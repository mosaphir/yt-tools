import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import Layout from '../../components/Layout';

const romanNumeralMap = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1],
];

const toRoman = (num) => {
  let result = '';
  for (let [roman, value] of romanNumeralMap) {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }
  return result;
};

const fromRoman = (roman) => {
  let num = 0;
  let i = 0;
  for (let [romanSymbol, value] of romanNumeralMap) {
    while (roman.startsWith(romanSymbol, i)) {
      num += value;
      i += romanSymbol.length;
    }
  }
  return num;
};

export default function RomanNumerals() {
  const [input, setInput] = useState('');
  const [converted, setConverted] = useState('');

  const handleConvert = () => {
    if (/^\d+$/.test(input)) {
      setConverted(toRoman(parseInt(input, 10)));
    } else {
      setConverted(fromRoman(input).toString());
    }
  };

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        Roman Numerals Converter
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Enter number or Roman numeral"
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleConvert}>
          Convert
        </Button>
        {converted && (
          <Typography>
            <strong>Converted Value:</strong> {converted}
          </Typography>
        )}
      </Box>
    </Layout>
  );
}
