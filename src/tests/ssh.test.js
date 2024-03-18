const ssh2 = require('ssh2');
const { Client } = ssh2;
const { Server } = require('socket.io');
const { createServer } = require('http');
const { default: sshHandler } = require('../pages/api/ssh');

jest.mock('ssh2');
jest.mock('socket.io', () => ({
  Server: jest.fn(() => ({
    on: jest.fn(),
  })),
}));

describe('sshHandler', () => {
  let req, res, mockSocketServer, mockSocketOn, mockSSHClient;

  beforeEach(() => {
    req = {
      method: 'POST',
      body: {
        host: 'testhost',
        username: 'testuser',
        password: 'testpassword',
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      end: jest.fn(),
      socket: {
        server: createServer(),
      },
    };
    mockSocketOn = jest.fn();
    mockSSHClient = {
      on: jest.fn(),
      connect: jest.fn(),
      shell: jest.fn(),
      end: jest.fn(),
    };
    mockSocketServer = {
      on: mockSocketOn,
    };
    Server.mockImplementation(() => mockSocketServer);
    Client.mockImplementation(() => mockSSHClient);
  });

  test('Should respond with method not allowed if method is not POST', async () => {
    req.method = 'GET';
    await sshHandler(req, res);
    expect(res.status).toHaveBeenCalledWith(405);
    expect(res.json).toHaveBeenCalledWith({ error: 'Method not allowed' });
  });

  test('Should create Socket.IO server with cors settings', async () => {
    await sshHandler(req, res);
    expect(Server).toHaveBeenCalledWith(res.socket.server, { cors: { origin: '*' } });
  });
});
