import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import Layout from '../../components/Layout';

export default function CaseReverser() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const reverseCase = () => {
    const reversed = text
      .split('')
      .map((char) =>
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
      )
      .join('');
    setResult(reversed);
  };

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        Case Reverser
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Enter text"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={reverseCase}>
          Reverse Case
        </Button>
        {result && (
          <Typography>
            <strong>Reversed Text:</strong> {result}
          </Typography>
        )}
      </Box>
    </Layout>
  );
}
