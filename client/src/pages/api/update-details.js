import fs from 'fs';
import path from 'path';
import { useRouter } from 'next/router';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { host, username, password } = req.body;

    // Format the environment variable string
    const envContent = `HOST=${host}\nUSERNAME=${username}\nPASSWORD=${password}`;

    // Path to your .env file
    const envFilePath = path.resolve(process.cwd(), '.env');

    // Write to the .env file
    fs.writeFile(envFilePath, envContent, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
      
      // Redirect to terminal page after writing to the file
      res.status(200).json({ message: 'Details updated successfully' });
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
