# NeXTSSH: A Web-based SSH Client and Terminal Emulator

Connect to and command your remote servers effortlessly with NeXTSSH, a web-based SSH client and terminal emulator. Master your systems directly from your browser!

## Key Features

- **Seamless SSH Connections:** Establish secure connections to your remote servers with ease.
- **Responsive Terminal Experience:** Enjoy a fluid, full-featured terminal right in your web browser.
- **Organized Connection Management:** Conveniently manage multiple server connections. 

## Technologies

- [NextJS:](https://nextjs.org)  Blazing-fast [React](https://reactjs.org)-based web framework.
- [NodeJS:](https://nodejs.org) Robust JavaScript runtime environment.
- [Socket.io:](https://socket.io) Real-time, bi-directional communication for seamless updates.
- [Xterm.js:](https://xtermjs.org) Robust terminal emulation in the browser.
- [SSH2:](https://npmjs.com/package/ssh2) Comprehensive SSH2 implementation for NodeJS.

## Local Development

1. Clone the Repository:
   ```bash
   git clone https://github.com/tapiwamla/NeXTSSH.git
   ```

2. Install Dependencies:
   ```bash
   npm install
   ```

3. Add Environment Variables:
   Create a `.env` file with the following content:

   ```bash
   NEXTAUTH_SECRET='your-secret-key' (Use `openssl rand -base64 32` to generate a secret key)
   GOOGLE_CLIENT_ID='your-client-id'
   GOOGLE_CLIENT_SECRET='your-client-secret'
   GITHUB_CLIENT_ID='your-client-id'
   GITHUB_CLIENT_SECRET='your-client-secret'
   ```

   _**Note:** The `NEXTAUTH_SECRET` value is optional for development, but **required** for production._

4. For development, start the Development Server:
   ```bash
   npm run dev 
   ```
   
   For production, first build the project:
   ```bash
   npm run build
   ```

   Then start the server:
   ```bash
   npm run start
   ```

## Testing

- The project includes [Jest](https://jestjs.io/) for unit testing.

- Run unit tests:
   ```bash
   npm test
   ```

## Contributing

- NeXTSSH was passionately crafted by [Tapiwanashe Mlambo](https://tapiwamla.me), a graduate of the Bachelor of Science in Applied Computer Technology from [USIU-Africa](https://usiu.ac.ke).

- Want to make NeXTSSH even better? I welcome contributions! Feel free to open issues, submit pull requests, or suggest new features. Let's build together!

- If you find NeXTSSH useful, a star on the GitHub repo would be awesome!

## Additional Notes

- **Security:** NeXTSSH handles SSH connections. Ensure you follow best security practices and use strong credentials.
- **Deployment:** Explore suitable hosting options (like cloud providers) for production deployment.