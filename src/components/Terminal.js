import React, { useEffect, useRef } from 'react';
import 'xterm/css/xterm.css'; 
import io from 'socket.io-client';

const FontSize = 16;
const Col = 80;

const XTerminal = () => {
  const webTerminal = useRef(null);

  useEffect(() => {
    const initializeTerminal = async () => { 
      const { Terminal } = await import('xterm');
      const { WebLinksAddon } = await import('xterm-addon-web-links'); 
      const { FitAddon } = await import('xterm-addon-fit'); 

      const ele = document.getElementById('terminal');
      if (ele && !webTerminal.current) {
       const height = ele.clientHeight;

        const terminal = new Terminal({
          cursorBlink: true,
          cols: Col,
          rows: Math.ceil(height / FontSize),
        });

        const fitAddon = new FitAddon();
        terminal.loadAddon(new WebLinksAddon());
        terminal.loadAddon(fitAddon);

        terminal.open(ele);
        terminal.write('Hi from \x1B[1;31mNeXTSSH\x1B[0m $ ');
        fitAddon.fit();
        webTerminal.current = terminal;

        const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3000');

        terminal.onData(data => socket.emit('message', data));
        socket.on('message', data => terminal.write(data)); 

        socket.on('error', (err) => {
          console.error('Socket.IO error:', err);
        });
      }
    };

    initializeTerminal(); 
  }, []);

  return (
    <div id="terminal" style={{ backgroundColor: '#000', width: '100%', height: '89%', paddingLeft: '1.5rem', paddingTop: '0.5rem', borderRadius: '0.1rem' }} />
  );
};

export default XTerminal;
