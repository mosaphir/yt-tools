import { useState } from 'react';
import { TextField, Button, Typography, Box, Paper, IconButton } from '@mui/material';
import Layout from '../../components/Layout';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { html as beautifyHtml, minify as minifyHtml } from 'js-beautify';
import Head from 'next/head';

export default function HTMLBeautifierMinifier() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleBeautify = () => {
    setOutput(beautifyHtml(input));
  };

  const handleMinify = () => {
    setOutput(minifyHtml(input));
  };

  return (
    <Layout>
      <Head>
        <meta name="description" content="HTML Beautifier and Minifier tool to beautify or minify HTML code." />
        <meta name="keywords" content="HTML beautifier, HTML minifier, tool" />
        <title>HTML Beautifier / Minifier</title>
      </Head>

      <Typography variant="h4" align="center" gutterBottom>
        HTML Beautifier / Minifier
      </Typography>

      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Typography variant="h6" gutterBottom>Enter your HTML code:</Typography>
        <TextField
          label="HTML Code"
          variant="outlined"
          fullWidth
          multiline
          rows={6}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
          <Button variant="contained" color="primary" onClick={handleBeautify}>
            Beautify
          </Button>
          <Button variant="contained" color="secondary" onClick={handleMinify}>
            Minify
          </Button>
        </Box>

        {output && (
          <Box sx={{ marginTop: 2, display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ flexGrow: 1 }}>
              <strong>Result:</strong> {output}
            </Typography>
            <CopyToClipboard text={output}>
              <IconButton color="primary">
                <ContentCopyIcon />
              </IconButton>
            </CopyToClipboard>
          </Box>
        )}
      </Paper>
    </Layout>
  );
}
