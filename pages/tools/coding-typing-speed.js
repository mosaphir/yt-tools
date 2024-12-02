import { useState, useEffect } from 'react';
import {
  Typography,
  Button,
  Select,
  MenuItem,
  Box,
  TextField,
  Paper,
  Grid,
  LinearProgress,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from '../../components/Layout';
import codeSnippets from '../../data/codes';

// Dynamic imports for SyntaxHighlighter and styles to prevent SSR issues
const SyntaxHighlighter = dynamic(() =>
  import('react-syntax-highlighter').then((mod) => mod.Light),
  { ssr: false }
);

const dracula = dynamic(() =>
  import('react-syntax-highlighter/dist/cjs/styles/hljs').then((mod) => mod.dracula),
  { ssr: false }
);

export default function CodingTypingSpeed() {
  const [selectedLanguage, setSelectedLanguage] = useState('JavaScript');
  const [snippet, setSnippet] = useState(codeSnippets['JavaScript'] || '');
  const [typedCode, setTypedCode] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [accuracy, setAccuracy] = useState(0);
  const [wpm, setWpm] = useState(0);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setSnippet(codeSnippets[selectedLanguage] || 'No snippet available.');
    resetTest();
  }, [selectedLanguage]);

  const calculateAccuracy = () => {
    const snippetLength = snippet.length;
    const typedLength = typedCode.length;
    let correctChars = 0;

    for (let i = 0; i < typedLength; i++) {
      if (typedCode[i] === snippet[i]) correctChars++;
    }

    return ((correctChars / snippetLength) * 100).toFixed(2);
  };

  const calculateWPM = () => {
    const timeTaken = (endTime - startTime) / 60000; // Time in minutes
    const words = snippet.split(' ').length;
    return (words / timeTaken).toFixed(2);
  };

  const handleStartTest = () => {
    setStartTime(Date.now());
    setTypedCode('');
    setEndTime(null);
    setAccuracy(0);
    setWpm(0);
  };

  const handleEndTest = () => {
    const now = Date.now();
    setEndTime(now);
    setAccuracy(calculateAccuracy());
    setWpm(calculateWPM());
  };

  const resetTest = () => {
    setTypedCode('');
    setStartTime(null);
    setEndTime(null);
    setAccuracy(0);
    setWpm(0);
  };

  const handleTyping = (e) => {
    const value = e.target.value;
    if (value.length <= snippet.length) {
      setTypedCode(value);
    }
  };

  const progress = Math.min(
    (typedCode.length / snippet.length) * 100,
    100
  ).toFixed(2);

  return (
    <Layout>
      <Head>
        <title>Coding Typing Speed Test</title>
        <meta
          name="description"
          content="Test your coding typing speed and accuracy in various programming languages."
        />
      </Head>

      <Grid container spacing={4} sx={{ padding: isSmallScreen ? 2 : 4 }}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
            Coding Typing Speed Test
          </Typography>
          <Typography variant="body1" gutterBottom>
            Test your coding speed and accuracy in various programming languages.
          </Typography>
        </Grid>

        {/* Language Selection */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Select Language:</Typography>
          <Select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            fullWidth
            sx={{ mt: 1 }}
          >
            {Object.keys(codeSnippets).map((lang) => (
              <MenuItem key={lang} value={lang}>
                {lang}
              </MenuItem>
            ))}
          </Select>
        </Grid>

        {/* Snippet Display */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 3, backgroundColor: theme.palette.background.paper }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Code Snippet:</Typography>
            <SyntaxHighlighter
              language={selectedLanguage.toLowerCase()}
              style={dracula}
              customStyle={{
                borderRadius: 5,
                padding: '20px',
                overflowX: 'auto',
                fontSize: '1rem',
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
              }}
            >
              {snippet}
            </SyntaxHighlighter>
          </Paper>
        </Grid>

        {/* Typing Area */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6">Type the code below:</Typography>
            <TextField
              variant="outlined"
              multiline
              rows={6}
              fullWidth
              value={typedCode}
              onChange={handleTyping}
              disabled={!startTime || endTime}
              sx={{
                mt: 2,
                fontFamily: 'monospace',
                borderRadius: '8px',
                padding: '8px',
              }}
            />
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{ mt: 2, mb: 2 }}
            />
            <Typography variant="body2">Progress: {progress}%</Typography>

            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleStartTest}
                disabled={startTime && !endTime}
                sx={{
                  padding: '8px 16px',
                  fontWeight: 'bold',
                }}
              >
                Start Test
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleEndTest}
                disabled={!startTime || endTime}
                sx={{
                  padding: '8px 16px',
                  fontWeight: 'bold',
                }}
              >
                End Test
              </Button>
              <Button
                variant="outlined"
                onClick={resetTest}
                sx={{
                  padding: '8px 16px',
                  fontWeight: 'bold',
                }}
              >
                Reset
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Results */}
        {endTime && (
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Results:</Typography>
              <Typography variant="body1">
                <strong>Accuracy:</strong> {accuracy}%
              </Typography>
              <Typography variant="body1">
                <strong>Typing Speed:</strong> {wpm} WPM
              </Typography>
            </Paper>
          </Grid>
        )}
      </Grid>
    </Layout>
  );
}
