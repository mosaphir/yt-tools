import { useState } from 'react';
import { TextField, Button, Typography, Box, Paper, Accordion, AccordionSummary, AccordionDetails, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HelpIcon from '@mui/icons-material/Help';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Layout from '../../components/Layout';
import Head from 'next/head';

export default function Base64Encode() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleEncode = () => {
    const bytes = new TextEncoder().encode(input);
    const base64 = btoa(String.fromCharCode(...bytes));
    setOutput(base64);
  };

  return (
    <Layout>
      <Head>
        <title>Base64 Encoder Tool | Encode Text to Base64 Online</title>
        <meta
          name="description"
          content="Convert your text to Base64 encoded format with our free online Base64 encoder tool. Easy and fast encoding in just a few clicks."
        />
        <meta
          name="keywords"
          content="Base64 encoder, encode text to Base64, online Base64 encoder, free Base64 encoder tool, Base64 encoding, text to Base64"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Base64 Encoder Tool" />
        <meta
          property="og:description"
          content="Convert your text into Base64 with our easy-to-use free Base64 encoder online."
        />
        <meta property="og:type" content="website" />
      </Head>

      <Typography variant="h4" align="center" gutterBottom>
        Base64 Encoder Tool
      </Typography>

      {/* Input Section */}
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Typography variant="h6" gutterBottom>
          Enter Text to Encode
        </Typography>
        <TextField
          label="Enter Text"
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleEncode}
          disabled={!input.trim()}
        >
          Encode to Base64
        </Button>
        {output && (
          <Box sx={{ marginTop: 2, textAlign: 'center' }}>
            <Typography variant="h6">
              <strong>Base64 Encoded Text:</strong>
            </Typography>
            <Typography
              variant="body1"
              sx={{ wordWrap: 'break-word', marginBottom: 2 }}
            >
              {output}
            </Typography>
            <CopyToClipboard text={output}>
              <IconButton color="primary">
                <ContentCopyIcon />
              </IconButton>
            </CopyToClipboard>
          </Box>
        )}
      </Paper>

      {/* About Section */}
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <InfoIcon sx={{ marginRight: 1 }} />
          <Typography variant="h5">About Base64 Encoder</Typography>
        </Box>
        <Typography>
          Base64 encoding is a process used to convert binary data, such as text or files, into an ASCII string format. This tool allows you to easily encode any text into Base64 format, which is commonly used in email attachments, web URLs, and other contexts where binary data must be safely transmitted as text.
        </Typography>
      </Paper>

      {/* Features Section */}
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <ListAltIcon sx={{ marginRight: 1 }} />
          <Typography variant="h5">Features</Typography>
        </Box>
        <Typography component="ul" sx={{ paddingLeft: 2 }}>
          <li>Fast and easy conversion of text to Base64.</li>
          <li>Free to use with no registration required.</li>
          <li>Simple and clean user interface.</li>
          <li>Responsive design optimized for all devices.</li>
          <li>Clipboard support for easy copying of Base64 results.</li>
        </Typography>
      </Paper>

      {/* FAQ Section */}
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <HelpIcon sx={{ marginRight: 1 }} />
          <Typography variant="h5">FAQ</Typography>
        </Box>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What is Base64 Encoding?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Base64 encoding is a way of encoding binary data into a string of printable ASCII characters. It is commonly used to encode binary data for transmission over text-based protocols such as email and URLs.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Why is Base64 Encoding Used?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Base64 encoding is used to safely encode binary data, such as images, files, or other media types, in environments that only support text, like email and URLs.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Is this tool free to use?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, this Base64 encoder tool is completely free to use. You don't need to register or pay for using it.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Layout>
  );
}
