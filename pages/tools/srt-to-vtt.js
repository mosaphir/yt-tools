import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { saveAs } from 'file-saver';
import Layout from '../../components/Layout';

export default function SRTtoVTT() {
  const [srtText, setSrtText] = useState('');
  const [vttText, setVttText] = useState('');

  const convertToVTT = () => {
    const vtt = 'WEBVTT\n\n' + 
      srtText
        .replace(/(\d+:\d+:\d+),(\d+)/g, '$1.$2') // Replace , with .
        .replace(/\n{2,}/g, '\n\n'); // Normalize empty lines

    setVttText(vtt);
  };

  const downloadVTT = () => {
    const blob = new Blob([vttText], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'converted.vtt');
  };

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        SRT to VTT Converter
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Paste SRT Content"
          variant="outlined"
          multiline
          rows={10}
          fullWidth
          value={srtText}
          onChange={(e) => setSrtText(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={convertToVTT}>
          Convert to VTT
        </Button>
        {vttText && (
          <>
            <TextField
              label="Converted VTT"
              variant="outlined"
              multiline
              rows={10}
              fullWidth
              value={vttText}
              readOnly
            />
            <Button variant="contained" color="secondary" onClick={downloadVTT}>
              Download VTT
            </Button>
          </>
        )}
      </Box>
    </Layout>
  );
}
