import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import Layout from '../../components/Layout';

export default function TimestampConverter() {
  const [timestamp, setTimestamp] = useState('');
  const [result, setResult] = useState('');

  const convertTimestamp = () => {
    const date = new Date(Number(timestamp) * 1000);
    setResult(date.toUTCString());
  };

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        Timestamp Converter
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Enter UNIX timestamp"
          variant="outlined"
          fullWidth
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={convertTimestamp}>
          Convert to Date
        </Button>
        {result && (
          <Typography>
            <strong>Converted Date:</strong> {result}
          </Typography>
        )}
      </Box>
    </Layout>
  );
}
