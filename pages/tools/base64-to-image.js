import { useState } from 'react';
import { TextField, Button, Typography, Box, CardMedia } from '@mui/material';
import Layout from '../../components/Layout';

export default function Base64ToImage() {
  const [base64, setBase64] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const convertToImage = () => {
    if (base64.startsWith('data:image')) {
      setImageUrl(base64);
    } else {
      setImageUrl('Invalid Base64 image data.');
    }
  };

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        Base64 to Image Converter
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Enter Base64 string"
          variant="outlined"
          multiline
          rows={6}
          fullWidth
          value={base64}
          onChange={(e) => setBase64(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={convertToImage}>
          Convert to Image
        </Button>
        {imageUrl && (
          <CardMedia
            component="img"
            image={imageUrl}
            alt="Converted Image"
            sx={{ mt: 2, maxHeight: 300 }}
          />
        )}
      </Box>
    </Layout>
  );
}
