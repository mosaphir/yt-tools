import { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import Layout from '../../components/Layout';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { camelCase, snakeCase, paramCase, titleCase } from 'change-case';
import Head from 'next/head';

export default function TextCaseConverter() {
  const [input, setInput] = useState('');
  const [converted, setConverted] = useState('');

  const handleConversion = (type) => {
    switch (type) {
      case 'camel':
        setConverted(camelCase(input));
        break;
      case 'snake':
        setConverted(snakeCase(input));
        break;
      case 'param':
        setConverted(paramCase(input));
        break;
      case 'title':
        setConverted(titleCase(input));
        break;
      default:
        setConverted('');
    }
  };

  return (
    <Layout>
      <Head>
        <meta name="description" content="Text Case Converter tool to convert text to various cases." />
        <meta name="keywords" content="text case converter, camel case, snake case, tool" />
        <title>Text Case Converter</title>
      </Head>

      <Typography variant="h4" align="center" gutterBottom>
        Text Case Converter
      </Typography>

      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Typography variant="h6" gutterBottom>Enter Text:</Typography>
        <TextField
          label="Input Text"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
          <Button variant="contained" color="primary" onClick={() => handleConversion('camel')}>
            Convert to camelCase
          </Button>
          <Button variant="contained" color="secondary" onClick={() => handleConversion('snake')}>
            Convert to snake_case
          </Button>
          <Button variant="contained" color="success" onClick={() => handleConversion('param')}>
            Convert to param-case
          </Button>
          <Button variant="contained" color="warning" onClick={() => handleConversion('title')}>
            Convert to Title Case
          </Button>
        </Box>

        {converted && (
          <Box sx={{ marginTop: 2, display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ flexGrow: 1 }}>
              <strong>Converted Text:</strong> {converted}
            </Typography>
            <CopyToClipboard text={converted}>
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
