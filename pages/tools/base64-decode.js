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
      <Typography variant="h4" align="center" gutterBottom>
        Base64 Decoder
      </Typography>

      {/* Input Section */}
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Typography variant="h6" gutterBottom>
          Enter Base64 String
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
          helps you decode Base64 encoded strings back to their original format.
        </Typography>
      </Paper>

      {/* Features Section */}
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <ListAltIcon sx={{ marginRight: 1 }} />
          <Typography variant="h5">Features</Typography>
        </Box>
        <Typography component="ul" sx={{ paddingLeft: 2 }}>
          <li>Decodes Base64 encoded text into its original format.</li>
          <li>Supports decoding of various Base64 encoded data types.</li>
          <li>Simple and intuitive user interface.</li>
          <li>Responsive design suitable for mobile, tablet, and desktop devices.</li>
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
              Base64 encoding is a method to convert binary data into ASCII text
              by encoding it in a special format that uses a 64-character alphabet.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What types of data can be Base64 encoded?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Any type of binary data (such as images, files, or any other binary
              data) can be Base64 encoded into a string that is ASCII-safe.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Why is Base64 encoding used?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Base64 encoding is commonly used for embedding binary data in text
              formats like emails, JSON, or URLs. It's especially useful when
              data needs to be transferred over media that are designed to deal
              with text.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Layout>
  );
}
