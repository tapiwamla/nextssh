import React, { useEffect, useRef } from 'react';

import 'xterm/css/xterm.css';

const FontSize = 16;
const Col = 80;

const WebTerminal = () => {
  const webTerminal = useRef(null);
  const ws = useRef(null);

  useEffect(() => {
    const initializeTerminal = async () => {
      // Dynamically import 'xterm' and its addons
      const { Terminal } = await import('xterm');
      const { WebLinksAddon } = await import('xterm-addon-web-links');
      const { FitAddon } = await import('xterm-addon-fit');

      // Initialize terminal
      const ele = document.getElementById('terminal');
      if (ele && !webTerminal.current) {
        const height = ele.clientHeight;

        const terminal = new Terminal({
          cursorBlink: true,
          cols: Col,
          rows: Math.ceil(height / FontSize),
        });

        // Addons
        const fitAddon = new FitAddon();
        terminal.loadAddon(new WebLinksAddon());
        terminal.loadAddon(fitAddon);

        terminal.open(ele);
        terminal.write('Hi from \x1B[1;31mCShell\x1B[0m $ ');
        fitAddon.fit();
        webTerminal.current = terminal;
        
        // Initialize WebSocket connection
        const socket = new WebSocket('ws://localhost:3001');
        socket.onopen = () => {
          socket.send('connect success');
          
          // Attach event listener for keyboard input
          terminal.onData(data => {
            socket.send(data);
          });
        };
        
        socket.onmessage = e => {
          console.log(e);

          if (typeof e.data === 'string') {
            terminal.write(e.data);
          } else {
            console.error('Invalid Data Type: ', e.data);
          }
        };

        ws.current = socket;
      }
    };

    initializeTerminal();
  }, []);

  return <div id="terminal" style={{ backgroundColor: '#000', width: '100%', height: '89%', paddingLeft: '1.5rem', paddingTop: '0.5rem', borderRadius: '0.1rem' }} />;
};

export default WebTerminal;
