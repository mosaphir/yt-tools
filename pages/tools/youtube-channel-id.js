import { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import Layout from '../../components/Layout';
import axios from 'axios';

export default function YouTubeChannelID() {
  const [channelName, setChannelName] = useState('');
  const [channelID, setChannelID] = useState('');

  const getChannelID = async () => {
    try {
      const apiKey = 'YOUR_YOUTUBE_API_KEY';  // Add your YouTube API key
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&forUsername=${channelName}&key=${apiKey}`
      );
      setChannelID(response.data.items[0].id);
    } catch (error) {
      setChannelID('Channel not found or invalid username.');
    }
  };

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        YouTube Channel ID Finder
      </Typography>

      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <TextField
          label="Enter YouTube Channel Name"
          variant="outlined"
          fullWidth
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={getChannelID}>
          Get Channel ID
        </Button>
      </Paper>

      {channelID && (
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h6" gutterBottom>
            Channel ID:
          </Typography>
          <Typography>{channelID}</Typography>
        </Paper>
      )}
    </Layout>
  );
}
