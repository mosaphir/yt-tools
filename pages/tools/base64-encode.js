import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { encode } from 'base64-js';
import Layout from '../../components/Layout';

export default function Base64Encode() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleEncode = () => {
    const bytes = new TextEncoder().encode(input);
    const base64 = btoa(String.fromCharCode(...bytes));
    setOutput(base64);
  };

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        Base64 Encoder
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Enter text"
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleEncode}>
          Encode to Base64
        </Button>
        {output && (
          <Typography>
            <strong>Base64:</strong> {output}
          </Typography>
        )}
      </Box>
    </Layout>
  );
}
