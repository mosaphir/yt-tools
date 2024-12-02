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
import convert from 'color-convert';

export default function ColorConverter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [outputType, setOutputType] = useState('');

  const handleConvert = () => {
    try {
      if (input.startsWith('#')) {
        // HEX to RGB
        const rgb = convert.hex.rgb(input);
        setOutput(`RGB(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
        setOutputType('RGB');
      } else if (input.toLowerCase().startsWith('rgb')) {
        // RGB to HEX
        const values = input.match(/\d+/g).map(Number);
        const hex = `#${convert.rgb.hex(values[0], values[1], values[2])}`;
        setOutput(hex);
        setOutputType('HEX');
      } else if (input.startsWith('hsl')) {
        // HSL to RGB
        const hslValues = input.match(/\d+/g).map(Number);
        const rgb = convert.hsl.rgb(hslValues[0], hslValues[1], hslValues[2]);
        setOutput(`RGB(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
        setOutputType('RGB');
      } else {
        setOutput('Invalid format. Use #HEX, RGB(x, y, z), or HSL(h, s%, l%)');
        setOutputType('');
      }
    } catch (error) {
      setOutput('Error converting color. Please check the input format.');
      setOutputType('');
    }
  };

  return (
    <Layout>
      <Head>
        <title>Color Converter | HEX, RGB, HSL Conversion Tool</title>
        <meta
          name="description"
          content="Convert HEX, RGB, and HSL color codes with ease using our online Color Converter. Instant conversions between color formats."
        />
        <meta
          name="keywords"
          content="color converter, HEX to RGB, RGB to HEX, RGB to HSL, color tool, HSL to RGB, free color converter"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Color Converter" />
        <meta
          property="og:description"
          content="Convert between HEX, RGB, and HSL color formats with our easy-to-use online tool."
        />
        <meta property="og:type" content="website" />
      </Head>

      <Typography variant="h4" align="center" gutterBottom>
        Color Converter
      </Typography>

      {/* Input Section */}
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Typography variant="h6" gutterBottom>
          Enter Color (HEX, RGB, or HSL)
        </Typography>
        <TextField
          label="Color Input"
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
          onClick={handleConvert}
          disabled={!input.trim()}
        >
          Convert
        </Button>
        {output && (
          <Box sx={{ marginTop: 2, textAlign: 'center' }}>
            <Typography variant="h6">
              <strong>Converted Color ({outputType}):</strong>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                wordWrap: 'break-word',
                marginBottom: 2,
                color: outputType === 'HEX' ? output : 'inherit',
              }}
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
          <Typography variant="h5">About Color Converter</Typography>
        </Box>
        <Typography>
          Our Color Converter allows you to easily convert between different color formats like HEX, RGB, and HSL. Whether you're a web developer or designer, this tool helps you quickly transform color values to the desired format.
        </Typography>
      </Paper>

      {/* Features Section */}
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <ListAltIcon sx={{ marginRight: 1 }} />
          <Typography variant="h5">Features</Typography>
        </Box>
        <Typography component="ul" sx={{ paddingLeft: 2 }}>
          <li>Converts between HEX, RGB, and HSL color formats.</li>
          <li>Instant color conversions with no delay.</li>
          <li>Supports color input in various formats (e.g., RGB, HSL, HEX).</li>
          <li>Easy-to-use interface, no extra configurations needed.</li>
          <li>Responsive design, works seamlessly on any device.</li>
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
            <Typography>What are HEX, RGB, and HSL?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              - HEX is a hexadecimal color code, commonly used in web design. 
              - RGB represents colors using red, green, and blue values. 
              - HSL represents colors based on hue, saturation, and lightness.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Can I convert between all three formats?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes! Our tool allows you to convert HEX to RGB, RGB to HEX, and even RGB to HSL.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What color formats can I enter?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can enter HEX codes (e.g., #FF5733), RGB (e.g., RGB(255, 87, 51)), and HSL values (e.g., HSL(12, 100%, 60%)).
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Layout>
  );
}
