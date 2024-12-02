import { useState } from 'react';
import { TextField, Button, Typography, Box, Paper, IconButton } from '@mui/material';
import Layout from '../../components/Layout';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import QRCodeDecoder from 'qrcode-decoder';
import Head from 'next/head';

export default function QRCodeDecoderTool() {
  const [file, setFile] = useState(null);
  const [qrText, setQrText] = useState('');

  const handleFileChange = (e) => {
    const qrDecoder = new QRCodeDecoder();
    const reader = new FileReader();
    reader.onload = (event) => {
      qrDecoder.decode(event.target.result).then((data) => {
        setQrText(data);
      });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <Layout>
      <Head>
        <meta name="description" content="QR Code Decoder tool to decode QR codes from images." />
        <meta name="keywords" content="QR code decoder, QR code, decode" />
        <title>QR Code Decoder</title>
      </Head>

      <Typography variant="h4" align="center" gutterBottom>
        QR Code Decoder
      </Typography>

      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Typography variant="h6" gutterBottom>Upload QR Code image:</Typography>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {qrText && (
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="body1"><strong>Decoded Text:</strong> {qrText}</Typography>
            <CopyToClipboard text={qrText}>
              <IconButton color="primary">
                <ContentCopyIcon />
              </IconButton>
            </CopyToClipboard>
          </Box>
        )}
      </Paper>
    </Layout>
  );
}
