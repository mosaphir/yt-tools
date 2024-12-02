import { useState } from 'react';
import { TextField, Button, Typography, Box, Paper, Grid, IconButton, Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Layout from '../../components/Layout';
import Head from 'next/head';
import marked from 'marked';

export default function MdToHtmlConverter() {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  const handleConvert = () => {
    const convertedHtml = marked(markdown);
    setHtml(convertedHtml);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(html);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <Layout>
      {/* SEO */}
      <Head>
        <title>Markdown to HTML Converter - Next.js Tools</title>
        <meta
          name="description"
          content="Convert Markdown text to HTML instantly with this easy-to-use online tool. Copy the HTML to your clipboard and preview it in real-time."
        />
        <meta name="keywords" content="markdown to html, markdown converter, html generator" />
        <meta name="author" content="Next.js Tools" />
      </Head>

      {/* Header */}
      <Typography variant="h4" gutterBottom>
        Markdown to HTML Converter
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Convert your Markdown text to HTML instantly. Preview the result, copy to clipboard, and use it wherever you need.
      </Typography>

      <Grid container spacing={4}>
        {/* Input Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>
              Enter Markdown:
            </Typography>
            <TextField
              label="Markdown Text"
              variant="outlined"
              multiline
              rows={10}
              fullWidth
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              placeholder="Write your Markdown here..."
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              fullWidth
              onClick={handleConvert}
              disabled={!markdown.trim()}
            >
              Convert to HTML
            </Button>
          </Paper>
        </Grid>

        {/* Output Section */}
        <Grid item xs={12} md={6}>
          {html ? (
            <Paper elevation={3} sx={{ padding: 3, position: 'relative' }}>
              <Typography variant="h6" gutterBottom>
                Converted HTML:
              </Typography>
              <pre
                style={{
                  background: '#f0f0f0',
                  padding: '10px',
                  borderRadius: '4px',
                  overflowX: 'auto',
                  maxHeight: '300px',
                }}
              >
                {html}
              </pre>
              <Box
                dangerouslySetInnerHTML={{ __html: html }}
                sx={{
                  mt: 2,
                  border: '1px solid #ddd',
                  padding: 2,
                  borderRadius: 2,
                  overflowY: 'auto',
                  maxHeight: '150px',
                  bgcolor: '#fafafa',
                }}
              />

              {/* Copy Button */}
              <Tooltip title="Copy to Clipboard">
                <IconButton
                  onClick={handleCopyToClipboard}
                  sx={{ position: 'absolute', top: 10, right: 10 }}
                >
                  <ContentCopyIcon color={copySuccess ? 'success' : 'action'} />
                </IconButton>
              </Tooltip>

              {copySuccess && (
                <Typography
                  variant="body2"
                  color="success.main"
                  sx={{ mt: 1, textAlign: 'right' }}
                >
                  Copied!
                </Typography>
              )}
            </Paper>
          ) : (
            <Typography variant="body2" color="text.secondary">
              No HTML to display. Enter Markdown and click "Convert to HTML."
            </Typography>
          )}
        </Grid>
      </Grid>

      {/* About, Features, and FAQ */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          About the Markdown to HTML Converter
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          This tool helps you convert Markdown text to HTML quickly and efficiently. Whether you're
          a developer, content writer, or student, this tool is designed to save you time and effort.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircleOutlineIcon color="primary" />
              Real-time Conversion
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircleOutlineIcon color="primary" />
              Copy to Clipboard
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircleOutlineIcon color="primary" />
              Live HTML Preview
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h5" gutterBottom>
          Frequently Asked Questions (FAQ)
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <HelpOutlineIcon color="primary" />
              <strong>What is Markdown?</strong>
            </Typography>
            <Typography variant="body2">
              Markdown is a lightweight markup language with plain text formatting syntax. It's often used to format README files, create rich text, and write for web platforms.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <HelpOutlineIcon color="primary" />
              <strong>Can I edit the HTML?</strong>
            </Typography>
            <Typography variant="body2">
              Yes, once converted, you can copy and edit the HTML in your preferred text editor or IDE.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
