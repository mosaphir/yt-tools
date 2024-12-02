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
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Head from 'next/head';
import Layout from '../../components/Layout';
import codeSnippets from '../../data/codes';

export default function CodingTypingSpeed() {
  const [selectedLanguage, setSelectedLanguage] = useState('JavaScript');
  const [snippet, setSnippet] = useState(codeSnippets['JavaScript']);
  const [typedCode, setTypedCode] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [accuracy, setAccuracy] = useState(0);
  const [wpm, setWpm] = useState(0);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setSnippet(codeSnippets[selectedLanguage]);
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
          <Typography variant="h4" gutterBottom>
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
            <Typography variant="h6">Code Snippet:</Typography>
            <SyntaxHighlighter
              language={selectedLanguage.toLowerCase()}
              style={atomOneDark}
              customStyle={{ borderRadius: 5, padding: '10px', overflowX: 'auto' }}
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
              onChange={(e) => setTypedCode(e.target.value)}
              disabled={!startTime || endTime}
              sx={{ mt: 2 }}
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
              >
                Start Test
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleEndTest}
                disabled={!startTime || endTime}
              >
                End Test
              </Button>
              <Button variant="outlined" onClick={resetTest}>
                Reset
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Results */}
        {endTime && (
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Typography variant="h6">Results:</Typography>
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
