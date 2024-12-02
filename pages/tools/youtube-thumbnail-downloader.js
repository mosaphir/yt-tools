import { useState } from 'react';
import { TextField, Button, Typography, Box, CardMedia } from '@mui/material';
import Layout from '../../components/Layout';

export default function YouTubeThumbnailDownloader() {
  const [videoURL, setVideoURL] = useState('');
  const [thumbnailURL, setThumbnailURL] = useState('');

  const extractThumbnail = () => {
    const videoId = videoURL.split('v=')[1]?.split('&')[0];
    if (videoId) {
      setThumbnailURL(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
    } else {
      setThumbnailURL('');
    }
  };

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        YouTube Thumbnail Downloader
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="YouTube Video URL"
          variant="outlined"
          fullWidth
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={extractThumbnail}>
          Get Thumbnail
        </Button>
        {thumbnailURL && (
          <CardMedia
            component="img"
            image={thumbnailURL}
            alt="YouTube Thumbnail"
            sx={{ mt: 2, maxHeight: 300 }}
          />
        )}
      </Box>
    </Layout>
  );
}
