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

export default function BinaryToText() {
  const [binary, setBinary] = useState('');
  const [text, setText] = useState('');

  const convertToText = () => {
    try {
      const converted = binary
        .split(' ')
        .map((bin) => String.fromCharCode(parseInt(bin, 2)))
        .join('');
      setText(converted);
    } catch (e) {
      setText('Invalid binary input.');
    }
  };

  return (
    <Layout>
      <Head>
        <title>Binary to Text Converter Tool | Convert Binary to Human Readable Text</title>
        <meta
          name="description"
          content="Convert binary numbers to text easily with our free online Binary to Text Converter tool. Paste your binary data and get the text result instantly."
        />
        <meta
          name="keywords"
          content="binary to text, binary converter, binary to text online, free binary to text, convert binary numbers to text"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Binary to Text Converter" />
        <meta
          property="og:description"
          content="Convert binary numbers to human-readable text instantly with our easy-to-use online tool."
        />
        <meta property="og:type" content="website" />
      </Head>

      <Typography variant="h4" align="center" gutterBottom>
        Binary to Text Converter
      </Typography>

      {/* Input Section */}
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Typography variant="h6" gutterBottom>
          Enter Binary Data (e.g., 01001000)
        </Typography>
        <TextField
          label="Enter Binary"
          variant="outlined"
          fullWidth
          value={binary}
          onChange={(e) => setBinary(e.target.value)}
          multiline
          rows={4}
          sx={{ marginBottom: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={convertToText}
          disabled={!binary.trim()}
        >
          Convert to Text
        </Button>
        {text && (
          <Box sx={{ marginTop: 2, textAlign: 'center' }}>
            <Typography variant="h6">
              <strong>Converted Text:</strong>
            </Typography>
            <Typography
              variant="body1"
              sx={{ wordWrap: 'break-word', marginBottom: 2 }}
            >
              {text}
            </Typography>
            <CopyToClipboard text={text}>
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
          <Typography variant="h5">About Binary to Text Converter</Typography>
        </Box>
        <Typography>
          Binary to Text Converter is a simple tool that helps you convert binary numbers (like 01001000) into human-readable text. It's particularly useful for decoding binary data and analyzing or transforming machine-level data into readable text format.
        </Typography>
      </Paper>

      {/* Features Section */}
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <ListAltIcon sx={{ marginRight: 1 }} />
          <Typography variant="h5">Features</Typography>
        </Box>
        <Typography component="ul" sx={{ paddingLeft: 2 }}>
          <li>Convert binary strings to human-readable text.</li>
          <li>Supports space-separated binary input.</li>
          <li>Instant conversion with no delay.</li>
          <li>Easy-to-use interface suitable for all users.</li>
          <li>Responsive design, works on all devices (desktop, tablet, mobile).</li>
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
            <Typography>What is Binary?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Binary is a system of counting using only two digits: 0 and 1. It is used in computing to represent data, as digital systems work on binary values (on and off).
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>How does this converter work?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The tool converts binary numbers (composed of 0s and 1s) into human-readable text by interpreting each set of 8 binary digits (1 byte) as a character.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Why do I need to convert binary to text?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Converting binary to text is useful when you need to understand or process binary data in a readable format. It's commonly used in programming, data analysis, and systems engineering.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Layout>
  );
}
