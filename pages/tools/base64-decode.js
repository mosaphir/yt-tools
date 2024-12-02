import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HelpIcon from "@mui/icons-material/Help";
import Layout from "../../components/Layout";
import Head from "next/head";

export default function Base64Decode() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleDecode = () => {
    try {
      const decoded = atob(input);
      setOutput(decoded);
    } catch (error) {
      setOutput("Invalid Base64 string");
    }
  };

  return (
    <Layout>
      <Head>
        <title>Base64 Decoder Tool | Decode Base64 Online</title>
        <meta
          name="description"
          content="Use our free Base64 Decoder to decode Base64 encoded strings. Decode your data instantly with an easy-to-use online tool."
        />
        <meta
          name="keywords"
          content="Base64 decoder, decode Base64, online Base64 decoder, free Base64 decoder tool, decode encoded data, Base64 string"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Base64 Decoder Tool" />
        <meta
          property="og:description"
          content="Instantly decode Base64 encoded data using our online tool. Decode any Base64 string with ease."
        />
        <meta property="og:type" content="website" />
      </Head>

      <Typography variant="h4" align="center" gutterBottom>
        Base64 Decoder Tool
      </Typography>

      {/* Input Section */}
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Typography variant="h6" gutterBottom>
          Enter Base64 String to Decode
        </Typography>
        <TextField
          label="Base64 String"
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
          onClick={handleDecode}
          disabled={!input.trim()}
        >
          Decode Base64
        </Button>
        {output && (
          <Typography
            variant="h6"
            align="center"
            sx={{ marginTop: 2 }}
            color={output === "Invalid Base64 string" ? "error.main" : "text.primary"}
          >
            <strong>Decoded Text:</strong> {output}
          </Typography>
        )}
      </Paper>

      {/* About Section */}
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <InfoIcon sx={{ marginRight: 1 }} />
          <Typography variant="h5">About Base64 Decoder</Typography>
        </Box>
        <Typography>
          Base64 is an encoding scheme that represents binary data in an ASCII
          string format by converting it into a radix-64 representation. This tool
          allows you to decode Base64 encoded strings back to their original format.
          Whether it's text, images, or any other binary data, you can decode it
          instantly with ease using this free online Base64 decoder.
        </Typography>
      </Paper>

      {/* Features Section */}
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <ListAltIcon sx={{ marginRight: 1 }} />
          <Typography variant="h5">Features of Base64 Decoder Tool</Typography>
        </Box>
        <Typography component="ul" sx={{ paddingLeft: 2 }}>
          <li>Instant decoding of Base64 encoded strings.</li>
          <li>Supports decoding various Base64 encoded data types.</li>
          <li>Simple and intuitive user interface for fast results.</li>
          <li>Responsive design optimized for mobile, tablet, and desktop devices.</li>
          <li>Completely free to use without any registration required.</li>
        </Typography>
      </Paper>

      {/* FAQ Section */}
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <HelpIcon sx={{ marginRight: 1 }} />
          <Typography variant="h5">Frequently Asked Questions (FAQ)</Typography>
        </Box>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What is Base64 Encoding?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Base64 encoding is a method of converting binary data (such as
              images or files) into an ASCII string format using a 64-character
              alphabet. It ensures that binary data can be safely transmitted over
              text-based protocols like email or in URLs.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What types of data can be Base64 encoded?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Base64 encoding can be applied to any type of binary data such as
              images, files, text, or any other non-text data that needs to be
              transmitted over text-based protocols.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Why is Base64 encoding used?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Base64 encoding is often used to safely encode binary data for
              transfer over systems that handle text. For example, it is widely
              used in email attachments, URLs, and embedded media in HTML documents.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Layout>
  );
}
