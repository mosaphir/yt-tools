import { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { fileTypeFromBuffer } from 'file-type';
import Layout from '../../components/Layout';

export default function FileMetadataViewer() {
  const [metadata, setMetadata] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const arrayBuffer = await file.arrayBuffer();
      const type = await fileTypeFromBuffer(new Uint8Array(arrayBuffer));
      setMetadata({
        name: file.name,
        size: file.size,
        type: file.type,
        detectedType: type?.mime || 'Unknown',
      });
    }
  };

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        File Metadata Viewer
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Button variant="outlined" component="label">
          Upload File
          <input hidden type="file" onChange={handleFileUpload} />
        </Button>
        {metadata && (
          <Box>
            <Typography>Name: {metadata.name}</Typography>
            <Typography>Size: {metadata.size} bytes</Typography>
            <Typography>Type: {metadata.type}</Typography>
            <Typography>Detected Type: {metadata.detectedType}</Typography>
          </Box>
        )}
      </Box>
    </Layout>
  );
}
