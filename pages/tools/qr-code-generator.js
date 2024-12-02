import { useState } from 'react';
import { TextField, Typography, Box } from '@mui/material';
import { QRCode } from 'react-qrcode-logo';
import Layout from '../../components/Layout';

export default function QRCodeGenerator() {
  const [text, setText] = useState('');

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        QR Code Generator
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
        <TextField
          label="Enter text or URL"
          variant="outlined"
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {text && <QRCode value={text} size={200} />}
      </Box>
    </Layout>
  );
}
