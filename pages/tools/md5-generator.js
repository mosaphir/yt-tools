import { useState } from 'react';
import { TextField, Button, Typography, Box, Paper, IconButton, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import Layout from '../../components/Layout';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import InfoIcon from '@mui/icons-material/Info';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HelpIcon from '@mui/icons-material/Help';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CryptoJS from 'crypto-js';
import Head from 'next/head';

export default function MD5Generator() {
  const [input, setInput] = useState('');
  const [hash, setHash] = useState('');

  const generateMD5 = () => {
    setHash(CryptoJS.MD5(input).toString());
  };

  return (
    <Layout>
      {/* SEO Meta */}
      <Head>
        <meta name="description" content="MD5 Generator - Generate MD5 hash from your input text" />
        <meta name="keywords" content="MD5, hash, generator, crypto, text, encryption, tool" />
        <meta name="author" content="Your Name" />
        <title>MD5 Generator</title>
      </Head>

      {/* Main Title */}
      <Typography variant="h4" align="center" gutterBottom>
        MD5 Generator
      </Typography>

      {/* MD5 Generator Section */}
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Typography variant="h6" gutterBottom>
          Enter the text you want to generate the MD5 hash for:
        </Typography>
        <TextField
          label="Enter text"
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{
            '@media (max-width: 600px)': {
              fontSize: '0.875rem', // Adjust font size for smaller screens
            },
          }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 2 }}>
          <Button variant="contained" color="primary" onClick={generateMD5}>
            Generate MD5
          </Button>

          {hash && (
            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
              <Typography variant="body1" sx={{ marginRight: 2 }}>
                <strong>MD5 Hash:</strong> {hash}
              </Typography>
              <CopyToClipboard text={hash}>
                <IconButton color="primary">
                  <ContentCopyIcon />
                </IconButton>
              </CopyToClipboard>
            </Box>
          )}
        </Box>
      </Paper>

      {/* About Section */}
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <InfoIcon sx={{ marginRight: 1 }} />
          <Typography variant="h5">About MD5 Generator</Typography>
        </Box>
        <Typography>
          The MD5 Generator tool allows you to generate an MD5 hash from any input text. MD5 (Message Digest Algorithm 5) is commonly used to verify data integrity and is often used in cryptographic applications.
        </Typography>
      </Paper>

      {/* Features Section */}
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <ListAltIcon sx={{ marginRight: 1 }} />
          <Typography variant="h5">Features</Typography>
        </Box>
        <Typography component="ul" sx={{ paddingLeft: 2 }}>
          <li>Generate MD5 hash for any text input.</li>
          <li>Copy the generated MD5 hash to your clipboard with one click.</li>
          <li>Responsive design for both mobile and desktop devices.</li>
          <li>Easy-to-use interface with a real-time hash generation process.</li>
        </Typography>
      </Paper>

      {/* FAQ Section */}
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <HelpIcon sx={{ marginRight: 1 }} />
          <Typography variant="h5">FAQ</Typography>
        </Box>

        {/* FAQ Accordion */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What is MD5?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              MD5 (Message Digest Algorithm 5) is a cryptographic hash function that produces a 128-bit hash value, typically rendered as a 32-character hexadecimal number. It is widely used in checksums and data integrity applications.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Why should I use MD5?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              MD5 is commonly used to verify data integrity by comparing the hash of original data with a new hash of the data. It is also used in password hashing, ensuring data integrity, and digital signatures.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>How secure is MD5?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              MD5 is considered cryptographically broken and unsuitable for further use in security-sensitive applications. While MD5 was previously used for hashing passwords and verifying data, it is now vulnerable to hash collisions.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Layout>
  );
}
