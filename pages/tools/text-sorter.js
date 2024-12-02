import { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import Layout from '../../components/Layout';

export default function TextSorter() {
  const [text, setText] = useState('');
  const [sortedText, setSortedText] = useState('');

  const sortText = () => {
    const words = text.split(' ').sort().join(' ');
    setSortedText(words);
  };

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Text Sorter
      </Typography>

      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <TextField
          label="Enter Text"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={sortText}>
          Sort Text
        </Button>
      </Paper>

      {sortedText && (
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h6" gutterBottom>
            Sorted Text:
          </Typography>
          <Typography>{sortedText}</Typography>
        </Paper>
      )}
    </Layout>
  );
}
