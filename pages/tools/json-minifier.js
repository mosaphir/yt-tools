import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import Layout from '../../components/Layout';

export default function JSONMinifier() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const minifyJSON = () => {
    try {
      const minified = JSON.stringify(JSON.parse(input));
      setOutput(minified);
    } catch (error) {
      setOutput('Invalid JSON input');
    }
  };

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        JSON Minifier
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Enter JSON"
          multiline
          rows={6}
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="contained" onClick={minifyJSON}>
          Minify JSON
        </Button>
        {output && (
          <TextField
            label="Minified JSON"
            multiline
            rows={6}
            fullWidth
            value={output}
            InputProps={{ readOnly: true }}
          />
        )}
      </Box>
    </Layout>
  );
}
