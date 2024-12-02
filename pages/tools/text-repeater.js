import { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import Layout from '../../components/Layout';

export default function TextRepeater() {
  const [text, setText] = useState('');
  const [repeatedText, setRepeatedText] = useState('');
  const [count, setCount] = useState(1);

  const repeatText = () => {
    setRepeatedText(text.repeat(count));
  };

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Text Repeater
      </Typography>

      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <TextField
          label="Enter Text"
          variant="outlined"
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <TextField
          label="Repeat Count"
          variant="outlined"
          fullWidth
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={repeatText}>
          Repeat Text
        </Button>
      </Paper>

      {repeatedText && (
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h6" gutterBottom>
            Repeated Text:
          </Typography>
          <Typography>{repeatedText}</Typography>
        </Paper>
      )}
    </Layout>
  );
}
