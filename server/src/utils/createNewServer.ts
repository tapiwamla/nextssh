const SSHClient = require('ssh2').Client;
const utf8 = require('utf8');


export const createNewServer = (machineConfig: any, socket: any) => {
  const ssh = new SSHClient();
  const { host, username, password } = machineConfig;
  // On successful connection
  ssh.on('ready', function () {

    socket.send('\r\n*** SSH CONNECTION SUCCESS ***\r\n');

    ssh.shell(function (err: any, stream: any) {
      // On Connection Error
      if (err) {
        return socket.send('\r\n*** SSH SHELL ERROR: ' + err.message + ' ***\r\n');
      }

      // On Data Received
      socket.on('message', function (data: any) {
        stream.write(data);
      });

      // To get the output of the command
      stream.on('data', function (d: any) {
        socket.send(utf8.decode(d.toString('binary')));

        // Close the connection
      }).on('close', function () {
        ssh.end();
      });
    })

    // On Connection Close
  }).on('close', function () {
    socket.send('\r\n*** SSH CONNECTION CLOSED ***\r\n');

    // On Connection Error
  }).on('error', function (err: any) {
    socket.send('\r\n*** SSH CONNECTION ERROR: ' + err.message + ' ***\r\n');

    // Connect to the server
  }).connect({
    port: 22,
    host,
    username,
    password
  });
}
