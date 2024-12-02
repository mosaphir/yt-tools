import { useState } from 'react';
import { TextField, Button, Typography, Box, Paper, IconButton } from '@mui/material';
import Layout from '../../components/Layout';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import JavaScriptObfuscator from 'javascript-obfuscator';
import Head from 'next/head';

export default function JSObfuscator() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleObfuscate = () => {
    const obfuscatedCode = JavaScriptObfuscator.obfuscate(input).getObfuscatedCode();
    setOutput(obfuscatedCode);
  };

  const handleDeObfuscate = () => {
    // Deobfuscation would require a more complex approach, usually impossible to fully de-obfuscate programmatically
    setOutput('De-obfuscation is not easily achievable programmatically');
  };

  return (
    <Layout>
      <Head>
        <meta name="description" content="JavaScript Obfuscator tool to obfuscate or deobfuscate JS code." />
        <meta name="keywords" content="JavaScript obfuscator, tool" />
        <title>JavaScript Obfuscator / Deobfuscator</title>
      </Head>

      <Typography variant="h4" align="center" gutterBottom>
        JavaScript Obfuscator / Deobfuscator
      </Typography>

      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Typography variant="h6" gutterBottom>Enter your JavaScript code:</Typography>
        <TextField
          label="JavaScript Code"
          variant="outlined"
          fullWidth
          multiline
          rows={6}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
          <Button variant="contained" color="primary" onClick={handleObfuscate}>
            Obfuscate
          </Button>
          <Button variant="contained" color="secondary" onClick={handleDeObfuscate}>
            Deobfuscate (Limited)
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
