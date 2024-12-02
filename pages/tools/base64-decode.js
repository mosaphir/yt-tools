import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import Layout from '../../components/Layout';

export default function Base64Decode() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleDecode = () => {
    try {
      const decoded = atob(input);
      setOutput(decoded);
    } catch (error) {
      setOutput('Invalid Base64 string');
    }
  };

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        Base64 Decoder
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Enter Base64 string"
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleDecode}>
          Decode Base64
        </Button>
        {output && (
          <Typography>
            <strong>Decoded Text:</strong> {output}
          </Typography>
        )}
      </Box>
    </Layout>
  );
}
