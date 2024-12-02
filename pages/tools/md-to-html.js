import { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import Layout from '../../components/Layout';
import marked from 'marked';

export default function MdToHtmlConverter() {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');

  const handleConvert = () => {
    const convertedHtml = marked(markdown);
    setHtml(convertedHtml);
  };

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        MD to HTML Converter
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Convert Markdown text to HTML instantly. Simply paste your Markdown text below, and get the corresponding HTML code.
      </Typography>

      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h6" gutterBottom>
          Enter Markdown:
        </Typography>
        <TextField
          label="Markdown Text"
          variant="outlined"
          multiline
          rows={6}
          fullWidth
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleConvert}
        >
          Convert to HTML
        </Button>
      </Paper>

      {html && (
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h6" gutterBottom>
            Converted HTML:
          </Typography>
          <pre
            style={{
              background: '#f0f0f0',
              padding: '10px',
              borderRadius: '4px',
              overflowX: 'auto',
            }}
          >
            {html}
          </pre>
          <Box
            dangerouslySetInnerHTML={{ __html: html }}
            sx={{ mt: 2, border: '1px solid #ddd', padding: 2, borderRadius: 2 }}
          />
        </Paper>
      )}
    </Layout>
  );
}
