import { useState } from "react";
import {
  TextField,
  Typography,
  Box,
  Paper,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HelpIcon from "@mui/icons-material/Help";
import Layout from "../../components/Layout";

export default function PalindromeChecker() {
  const [text, setText] = useState("");
  const [isPalindrome, setIsPalindrome] = useState(null);

  const checkPalindrome = () => {
    const cleanedText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    setIsPalindrome(cleanedText === cleanedText.split("").reverse().join(""));
  };

  return (
    <Layout>
      <Typography variant="h4" align="center" gutterBottom>
        Palindrome Checker
      </Typography>

      {/* Input Section */}
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Typography variant="h6" gutterBottom>
          Enter Text to Check
        </Typography>
        <TextField
          label="Enter text"
          variant="outlined"
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={checkPalindrome}
          disabled={!text.trim()}
        >
          Check
        </Button>
        {text && (
          <Typography
            variant="h6"
            align="center"
            color={isPalindrome ? "success.main" : "error.main"}
            sx={{ marginTop: 2 }}
          >
            {isPalindrome
              ? "Yes, it is a palindrome!"
              : "No, it is not a palindrome."}
          </Typography>
        )}
      </Paper>

      {/* About Section */}
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <InfoIcon sx={{ marginRight: 1 }} />
          <Typography variant="h5">About Palindrome Checker</Typography>
        </Box>
        <Typography>
          A palindrome is a word, phrase, number, or sequence of characters
          that reads the same backward as forward. This tool helps you quickly
          determine whether a given text is a palindrome by ignoring spaces,
          punctuation, and case sensitivity.
        </Typography>
      </Paper>

      {/* Features Section */}
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <ListAltIcon sx={{ marginRight: 1 }} />
          <Typography variant="h5">Features</Typography>
        </Box>
        <Typography component="ul" sx={{ paddingLeft: 2 }}>
          <li>Checks if the input text is a palindrome.</li>
          <li>Ignores spaces, punctuation, and capitalization.</li>
          <li>Simple and intuitive user interface.</li>
          <li>Responsive design for all devices.</li>
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
            <Typography>What is a palindrome?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A palindrome is a word, phrase, number, or other sequence of
              characters that reads the same backward as forward, such as "madam"
              or "racecar."
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Does this tool ignore spaces and punctuation?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, this tool ignores spaces, punctuation, and case sensitivity
              while checking for palindromes.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Can I use this on my phone?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Absolutely! This tool is fully responsive and works seamlessly on
              desktops, tablets, and mobile devices.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Layout>
  );
}
