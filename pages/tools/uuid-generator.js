import { useState } from 'react';
import { Button, Typography, Box, Paper, IconButton } from '@mui/material';
import Layout from '../../components/Layout';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { v4 as uuidv4 } from 'uuid';
import Head from 'next/head';

export default function UUIDGenerator() {
  const [uuid, setUuid] = useState('');

  const handleGenerateUUID = () => {
    setUuid(uuidv4());
  };

  return (
    <Layout>
      <Head>
        <meta name="description" content="UUID Generator tool to generate unique identifiers." />
        <meta name="keywords" content="UUID generator, unique identifier" />
        <title>UUID Generator</title>
      </Head>

      <Typography variant="h4" align="center" gutterBottom>
        UUID Generator
      </Typography>

      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Button variant="contained" color="primary" onClick={handleGenerateUUID}>
          Generate UUID
        </Button>

        {uuid && (
          <Box sx={{ marginTop: 2, display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ flexGrow: 1 }}>
              <strong>Generated UUID:</strong> {uuid}
            </Typography>
            <CopyToClipboard text={uuid}>
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
