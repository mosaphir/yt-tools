import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { TextField, Typography, Box } from '@mui/material';
import Layout from '../../components/Layout';

export default function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState('');

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        Markdown Previewer
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Write Markdown"
          variant="outlined"
          multiline
          rows={6}
          fullWidth
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
        <Typography variant="h6" gutterBottom>
          Preview:
        </Typography>
        <Box
          sx={{
            padding: 2,
            border: '1px solid #ccc',
            borderRadius: '4px',
            background: '#f9f9f9',
          }}
        >
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </Box>
      </Box>
    </Layout>
  );
}
