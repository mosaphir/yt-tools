import { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import Layout from '../../components/Layout';

export default function LoremIpsumGenerator() {
  const [paragraphs, setParagraphs] = useState(1);
  const [output, setOutput] = useState('');

  const generateLoremIpsum = () => {
    const loremText = `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
      Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
    `.repeat(paragraphs);
    setOutput(loremText);
  };

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        Lorem Ipsum Generator
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography>Select number of paragraphs:</Typography>
        <Button variant="outlined" onClick={() => setParagraphs((prev) => Math.max(prev - 1, 1))}>
          -
        </Button>
        <Typography>{paragraphs}</Typography>
        <Button variant="outlined" onClick={() => setParagraphs((prev) => prev + 1)}>
          +
        </Button>
        <Button variant="contained" color="primary" onClick={generateLoremIpsum}>
          Generate Text
        </Button>
        {output && (
          <Typography style={{ whiteSpace: 'pre-line' }}>
            {output}
          </Typography>
        )}
      </Box>
    </Layout>
  );
}
