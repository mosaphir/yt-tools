import { useState } from 'react';
import { TextField, Typography, Box } from '@mui/material';
import Layout from '../../components/Layout';

export default function WordCounter() {
  const [text, setText] = useState('');

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        Word Counter
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Enter text"
          variant="outlined"
          multiline
          rows={6}
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Typography>
          <strong>Word Count:</strong> {wordCount}
        </Typography>
        <Typography>
          <strong>Character Count:</strong> {charCount}
        </Typography>
      </Box>
    </Layout>
  );
}
