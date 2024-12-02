import { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import Layout from '../../components/Layout';
import axios from 'axios';

export default function KeywordDensityChecker() {
  const [input, setInput] = useState('');
  const [keywordDensity, setKeywordDensity] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckDensity = async () => {
    setLoading(true);
    setError('');
    try {
      // Replace this URL with the actual endpoint for the third-party API you are using
      const response = await axios.post(
        'https://twinword-text-analysis.p.rapidapi.com/keyword_extraction/',
        { text: input },
        {
          headers: {
            'x-rapidapi-host': 'twinword-text-analysis.p.rapidapi.com',
            'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY', // Replace with your RapidAPI key
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      // Assuming the API returns keyword extraction results
      const keywords = response.data.keywords; // Adjust based on the API response
      const totalWords = input.split(' ').length;

      const density = keywords.map((keyword) => ({
        word: keyword,
        density: ((input.split(keyword).length - 1) / totalWords) * 100,
      }));

      setKeywordDensity(density);
    } catch (err) {
      setError('Failed to fetch keyword density. Please try again.');
    } finally {
      setLoading(false);
    }
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
        <Button
          variant="contained"
          color="primary"
          onClick={handleCheckDensity}
          sx={{ marginTop: 2 }}
          disabled={loading}
        >
          {loading ? 'Checking...' : 'Check Keyword Density'}
        </Button>
      </Paper>

      {error && (
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        </Paper>
      )}

      {keywordDensity.length > 0 && (
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h6" gutterBottom>
            Keyword Density:
          </Typography>
          <ul>
            {keywordDensity.map((entry, index) => (
              <li key={index}>
                {entry.word}: {entry.density.toFixed(2)}%
              </li>
            ))}
          </ul>
        </Paper>
      )}
    </Layout>
  );
}
