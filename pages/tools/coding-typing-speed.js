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
} from '@mui/material';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Head from 'next/head';
import Layout from '../../components/Layout';

const codeSnippets = {
  JavaScript: `function greet(name) {
  console.log("Hello, " + name + "!");
}`,
  Python: `def greet(name):
    print(f"Hello, {name}!")`,
  C: `#include <stdio.h>
void greet(char name[]) {
    printf("Hello, %s!\\n", name);
}`,
  Java: `public class Main {
    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }
}`,
  Go: `package main
import "fmt"
func greet(name string) {
    fmt.Printf("Hello, %s\\n", name)
}`,
  PHP: `<?php
function greet($name) {
    echo "Hello, " . $name . "!";
}`,
  Ruby: `def greet(name)
  puts "Hello, #{name}!"
end`,
  Kotlin: `fun greet(name: String) {
    println("Hello, $name!")
}`,
};

export default function CodingTypingSpeed() {
  const [selectedLanguage, setSelectedLanguage] = useState('JavaScript');
  const [snippet, setSnippet] = useState(codeSnippets['JavaScript']);
  const [typedCode, setTypedCode] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [accuracy, setAccuracy] = useState(0);
  const [wpm, setWpm] = useState(0);

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
        <meta name="description" content="Test your coding typing speed and accuracy in various programming languages." />
      </Head>

      <Typography variant="h4" gutterBottom>
        Coding Typing Speed Test
      </Typography>
      <Typography variant="body1" gutterBottom>
        Test your coding speed and accuracy in various programming languages.
      </Typography>

      {/* Language Selection */}
      <Box sx={{ mb: 3 }}>
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
      </Box>

      {/* Snippet Display */}
      <Paper elevation={3} sx={{ padding: 3, mb: 3 }}>
        <Typography variant="h6">Code Snippet:</Typography>
        <SyntaxHighlighter language={selectedLanguage.toLowerCase()} style={docco}>
          {snippet}
        </SyntaxHighlighter>
      </Paper>

      {/* Typing Area */}
      <Paper elevation={3} sx={{ padding: 3, mb: 3 }}>
        <Typography variant="h6">Type the code below:</Typography>
        <TextField
          variant="outlined"
          multiline
          rows={6}
          fullWidth
          value={typedCode}
          onChange={(e) => setTypedCode(e.target.value)}
          disabled={!startTime || endTime}
        />
        <LinearProgress variant="determinate" value={progress} sx={{ mt: 2, mb: 2 }} />
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

      {/* Results */}
      {endTime && (
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h6">Results:</Typography>
          <Typography variant="body1">
            <strong>Accuracy:</strong> {accuracy}%
          </Typography>
          <Typography variant="body1">
            <strong>Typing Speed:</strong> {wpm} WPM
          </Typography>
        </Paper>
      )}
    </Layout>
  );
}
