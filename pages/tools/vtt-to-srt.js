import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { saveAs } from 'file-saver';
import Layout from '../../components/Layout';

export default function VTTtoSRT() {
  const [vttText, setVttText] = useState('');
  const [srtText, setSrtText] = useState('');

  const convertToSRT = () => {
    const srt = vttText
      .replace(/WEBVTT.*\n/, '') // Remove WEBVTT header
      .replace(/(\d+:\d+:\d+\.\d+) --> (\d+:\d+:\d+\.\d+)/g, '$1,$2') // Replace --> with ,
      .replace(/\n{2,}/g, '\n\n'); // Normalize empty lines

    setSrtText(srt);
  };

  const downloadSRT = () => {
    const blob = new Blob([srtText], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'converted.srt');
  };

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        VTT to SRT Converter
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Paste VTT Content"
          variant="outlined"
          multiline
          rows={10}
          fullWidth
          value={vttText}
          onChange={(e) => setVttText(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={convertToSRT}>
          Convert to SRT
        </Button>
        {srtText && (
          <>
            <TextField
              label="Converted SRT"
              variant="outlined"
              multiline
              rows={10}
              fullWidth
              value={srtText}
              readOnly
            />
            <Button variant="contained" color="secondary" onClick={downloadSRT}>
              Download SRT
            </Button>
          </>
        )}
      </Box>
    </Layout>
  );
}
