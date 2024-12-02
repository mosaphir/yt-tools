import { useState } from 'react';
import { Typography, Button, TextField, Box } from '@mui/material';
import Layout from '../../components/Layout';

export default function CreditCardGenerator() {
  const [generatedCards, setGeneratedCards] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const generateCreditCards = () => {
    const prefixes = ['4539', '4556', '4916', '4532', '4929', '40240071', '4485', '4716'];
    const cards = [];

    for (let i = 0; i < quantity; i++) {
      const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
      let cardNumber = prefix;

      while (cardNumber.length < 16) {
        cardNumber += Math.floor(Math.random() * 10).toString();
      }

      // Luhn Algorithm Check
      if (isValidLuhn(cardNumber)) {
        cards.push(cardNumber);
      } else {
        i--;
      }
    }

    setGeneratedCards(cards);
  };

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

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Credit Card Generator
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Generate fake credit card numbers for testing purposes. These are not real credit card numbers and should only be used in development and testing environments.
      </Typography>
      <Box sx={{ mb: 3 }}>
        <TextField
          type="number"
          label="Number of Cards"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          sx={{ mb: 2, width: '200px' }}
        />
        <Button variant="contained" color="primary" onClick={generateCreditCards}>
          Generate Cards
        </Button>
      </Box>
      <Typography variant="h6">Generated Credit Cards:</Typography>
      <ul>
        {generatedCards.map((card, index) => (
          <li key={index}>{card}</li>
        ))}
      </ul>
    </Layout>
  );
}
