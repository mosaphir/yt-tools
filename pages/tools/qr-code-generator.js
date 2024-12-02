import { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import Layout from '../../components/Layout';
import QRCode from 'qrcode.react';

export default function QRCodeGenerator() {
  const [text, setText] = useState('');
  const [qrCode, setQrCode] = useState('');

  const generateQRCode = () => {
    setQrCode(text);
  };

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        QR Code Generator
      </Typography>

      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Typography variant="h6" gutterBottom>
          Enter Text or URL:
        </Typography>
        <TextField
          label="Text or URL"
          variant="outlined"
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={generateQRCode}>
          Generate QR Code
        </Button>
      </Paper>

      {qrCode && (
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h6" gutterBottom>
            Your QR Code:
          </Typography>
          <QRCode value={qrCode} />
        </Paper>
      )}
    </Layout>
  );
}
