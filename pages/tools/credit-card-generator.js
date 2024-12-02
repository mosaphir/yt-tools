import { useState } from 'react';
import { Typography, Button, TextField, Box, IconButton, Paper, Grid, useTheme, useMediaQuery, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { CopyAll as CopyIcon, ExpandMore as ExpandMoreIcon, Info as InfoIcon, Help as HelpIcon } from '@mui/icons-material';
import Layout from '../../components/Layout';

export default function CreditCardGenerator() {
  const [generatedCards, setGeneratedCards] = useState([]);
  const [bin, setBin] = useState('');
  const [expiry, setExpiry] = useState('');
  const [quantity, setQuantity] = useState(1);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // Function to generate valid credit card number using Luhn Algorithm
  const generateCreditCards = () => {
    const cards = [];
    const currentYear = new Date().getFullYear();

    for (let i = 0; i < quantity; i++) {
      const cardBin = bin || generateRandomBin();
      let cardNumber = cardBin;

      while (cardNumber.length < 16) {
        cardNumber += Math.floor(Math.random() * 10).toString();
      }

      if (isValidLuhn(cardNumber)) {
        const cardExpiry = generateExpiryDate(currentYear);
        const cardCVV = generateCVV();

        cards.push({
          cardNumber,
          expiry: cardExpiry,
          cvv: cardCVV,
        });
      } else {
        i--; // Regenerate if Luhn check fails
      }
    }

    setGeneratedCards(cards);
  };

  // Generate a random BIN from predefined list
  const generateRandomBin = () => {
    const prefixes = ['4539', '4556', '4916', '4532', '4929', '40240071', '4485', '4716'];
    return prefixes[Math.floor(Math.random() * prefixes.length)];
  };

  // Luhn Algorithm to validate the card number
  const isValidLuhn = (number) => {
    let sum = 0;
    let shouldDouble = false;

    for (let i = number.length - 1; i >= 0; i--) {
      let digit = parseInt(number[i], 10);

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  };

  // Generate expiry date in MM/YY format, default to current year if not provided
  const generateExpiryDate = (currentYear) => {
    const year = currentYear + Math.floor(Math.random() * 5); // Expiry year between current and 5 years ahead
    const month = Math.floor(Math.random() * 12) + 1; // Month between 1 and 12
    return `${month < 10 ? '0' + month : month}/${year.toString().slice(-2)}`;
  };

  // Generate random 3-digit CVV
  const generateCVV = () => {
    return Math.floor(100 + Math.random() * 900).toString();
  };

  // Function to handle copying card details to clipboard
  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    });
  };

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Credit Card Generator
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Generate fake credit card details for testing purposes. These are not real credit card numbers and should only be used in development and testing environments.
      </Typography>

      <Paper sx={{ p: 3, mb: 3, backgroundColor: theme.palette.background.paper }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TextField
              label="BIN (Bank Identification Number)"
              value={bin}
              onChange={(e) => setBin(e.target.value)}
              fullWidth
              helperText="Enter the BIN, or leave empty to randomize."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Expiry (MM/YY)"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              fullWidth
              helperText="Optional: You can leave this empty to randomize expiry date."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              type="number"
              label="Number of Cards"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              fullWidth
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" color="primary" onClick={generateCreditCards}>
            Generate Cards
          </Button>
        </Box>
      </Paper>

      <Typography variant="h6">Generated Credit Cards:</Typography>
      <Grid container spacing={2}>
        {generatedCards.map((card, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Paper sx={{ p: 2, backgroundColor: theme.palette.background.default }}>
              <Typography variant="body2">
                <strong>Card Number:</strong> {card.cardNumber}
              </Typography>
              <Typography variant="body2">
                <strong>Expiry:</strong> {card.expiry}
              </Typography>
              <Typography variant="body2">
                <strong>CVV:</strong> {card.cvv}
              </Typography>
              <Box sx={{ mt: 1 }}>
                <IconButton onClick={() => handleCopyToClipboard(`${card.cardNumber}|${card.expiry}|${card.cvv}`)}>
                  <CopyIcon />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* About Section */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          About
        </Typography>
        <Typography variant="body1">
          This Credit Card Generator is a tool designed to generate fake credit card details for testing purposes only. These card numbers are randomly generated and do not represent real or valid credit cards.
        </Typography>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
            <Typography variant="h6">What is this tool for?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This tool is designed to generate fake credit card numbers for testing purposes. It can be used to test payment systems and other applications that require valid-looking credit card numbers.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
            <Typography variant="h6">Is this a real credit card?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              No, the generated cards are not real and cannot be used for any financial transactions. They are only for development and testing purposes.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
            <Typography variant="h6">How do I copy the card details?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can click on the copy icon next to the generated card details to copy them to your clipboard.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Layout>
  );
}
