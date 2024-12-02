import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import Layout from '../../components/Layout';

export default function BinaryToText() {
  const [binary, setBinary] = useState('');
  const [text, setText] = useState('');

  const convertToText = () => {
    try {
      const converted = binary
        .split(' ')
        .map((bin) => String.fromCharCode(parseInt(bin, 2)))
        .join('');
      setText(converted);
    } catch (e) {
      setText('Invalid binary input.');
    }
  };

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        Binary to Text Converter
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Enter binary (e.g., 01001000)"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          value={binary}
          onChange={(e) => setBinary(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={convertToText}>
          Convert to Text
        </Button>
        {text && (
          <Typography>
            <strong>Converted Text:</strong> {text}
          </Typography>
        )}
      </Box>
    </Layout>
  );
}
