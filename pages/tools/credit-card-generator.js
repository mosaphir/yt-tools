import { useState } from 'react';
import { Typography, Button, TextField, Box, IconButton, Paper, Grid, InputAdornment, useTheme, useMediaQuery } from '@mui/material';
import Layout from '../../components/Layout';
import { CopyAll as CopyIcon } from '@mui/icons-material';

export default function CreditCardGenerator() {
  const [generatedCards, setGeneratedCards] = useState([]);
  const [bin, setBin] = useState('');
  const [expiry, setExpiry] = useState('');
  const [quantity, setQuantity] = useState(1);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // Function to generate a valid credit card number using Luhn Algorithm
  const generateCreditCards = () => {
    const cards = [];
    const currentYear = new Date().getFullYear();

    for (let i = 0; i < quantity; i++) {
      // If BIN is empty, choose a random one from predefined list
      const cardBin = bin || generateRandomBin();
      let cardNumber = cardBin;

      // Generate card number to be 16 digits long
      while (cardNumber.length < 16) {
        cardNumber += Math.floor(Math.random() * 10).toString();
      }

      // Luhn Algorithm Check
      if (isValidLuhn(cardNumber)) {
        const cardExpiry = generateExpiryDate(currentYear);
        const cardCVV = generateCVV();

        // Generate card details
        cards.push({
          cardNumber,
          expiry: cardExpiry,
          cvv: cardCVV,
        });
      } else {
        i--;
      }
    }

    setGeneratedCards(cards);
  };

  // Generate a random BIN from a predefined list
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
    </Layout>
  );
}
