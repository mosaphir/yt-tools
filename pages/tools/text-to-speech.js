import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import Layout from '../../components/Layout';

export default function TextToSpeech() {
  const [text, setText] = useState('');

  const speakText = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-Speech not supported in this browser.');
    }
  };

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        Text-to-Speech
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Enter text"
          multiline
          rows={4}
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="contained" onClick={speakText}>
          Speak
        </Button>
      </Box>
    </Layout>
  );
}
