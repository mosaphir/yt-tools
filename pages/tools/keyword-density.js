import { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import Layout from '../../components/Layout';
import natural from 'natural';

export default function KeywordDensityChecker() {
  const [input, setInput] = useState('');
  const [keywordDensity, setKeywordDensity] = useState([]);

  const handleCheckDensity = () => {
    const tokenizer = new natural.WordTokenizer();
    const words = tokenizer.tokenize(input.toLowerCase());
    const frequency = {};

    words.forEach((word) => {
      frequency[word] = (frequency[word] || 0) + 1;
    });

    const totalWords = words.length;
    const density = Object.keys(frequency).map((word) => ({
      word,
      density: ((frequency[word] / totalWords) * 100).toFixed(2),
    }));

    setKeywordDensity(density);
  };

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Keyword Density Checker
      </Typography>

      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Typography variant="h6" gutterBottom>
          Enter Text:
        </Typography>
        <TextField
          label="Text to Analyze"
          variant="outlined"
          fullWidth
          multiline
          rows={6}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleCheckDensity}>
          Check Keyword Density
        </Button>
      </Paper>

      {keywordDensity.length > 0 && (
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h6" gutterBottom>
            Keyword Density:
          </Typography>
          <ul>
            {keywordDensity.map((entry, index) => (
              <li key={index}>
                {entry.word}: {entry.density}%
              </li>
            ))}
          </ul>
        </Paper>
      )}
    </Layout>
  );
}
