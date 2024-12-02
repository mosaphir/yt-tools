import { useState } from 'react';
import { TextField, Typography, Box } from '@mui/material';
import Layout from '../../components/Layout';

export default function PalindromeChecker() {
  const [text, setText] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(false);

  const checkPalindrome = () => {
    const cleanedText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    setIsPalindrome(cleanedText === cleanedText.split('').reverse().join(''));
  };

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        Palindrome Checker
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Enter text"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="contained" onClick={checkPalindrome}>
          Check
        </Button>
        {text && (
          <Typography>
            {isPalindrome ? 'Yes, it is a palindrome!' : 'No, not a palindrome.'}
          </Typography>
        )}
      </Box>
    </Layout>
  );
}
