import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import CryptoJS from 'crypto-js';
import Layout from '../../components/Layout';

export default function MD5Generator() {
  const [input, setInput] = useState('');
  const [hash, setHash] = useState('');

  const generateMD5 = () => {
    setHash(CryptoJS.MD5(input).toString());
  };

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        MD5 Generator
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Enter text"
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={generateMD5}>
          Generate MD5
        </Button>
        {hash && (
          <Typography variant="body1">
            <strong>MD5 Hash:</strong> {hash}
          </Typography>
        )}
      </Box>
    </Layout>
  );
}
