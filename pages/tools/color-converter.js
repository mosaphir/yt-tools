import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import convert from 'color-convert';
import Layout from '../../components/Layout';

export default function ColorConverter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleConvert = () => {
    if (input.startsWith('#')) {
      const rgb = convert.hex.rgb(input);
      setOutput(`RGB(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
    } else if (input.toLowerCase().startsWith('rgb')) {
      const values = input.match(/\d+/g).map(Number);
      const hex = `#${convert.rgb.hex(values[0], values[1], values[2])}`;
      setOutput(hex);
    } else {
      setOutput('Invalid format. Use #HEX or RGB(x, y, z)');
    }
  };

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        Color Converter
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Enter Color (#HEX or RGB)"
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleConvert}>
          Convert
        </Button>
        {output && (
          <Typography>
            <strong>Converted Color:</strong> {output}
          </Typography>
        )}
      </Box>
    </Layout>
  );
}
