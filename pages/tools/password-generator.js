import { useState } from 'react';
import { TextField, Button, Typography, Box, Slider, Checkbox, FormControlLabel } from '@mui/material';
import Layout from '../../components/Layout';

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let characters = letters;

    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    setPassword(result);
  };

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        Password Generator
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography>Length: {length}</Typography>
        <Slider
          value={length}
          onChange={(e, newValue) => setLength(newValue)}
          min={4}
          max={32}
          step={1}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
          }
          label="Include Numbers"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
          }
          label="Include Symbols"
        />
        <Button variant="contained" color="primary" onClick={generatePassword}>
          Generate Password
        </Button>
        {password && (
          <Typography>
            <strong>Generated Password:</strong> {password}
          </Typography>
        )}
      </Box>
    </Layout>
  );
}
