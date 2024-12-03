import { useState, useEffect } from 'react';
import Head from 'next/head';
import { 
  TextField, 
  Button, 
  Typography, 
  Box, 
  Grid, 
  Slider, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Card, 
  CardContent, 
  CardActions 
} from '@mui/material';
import { 
  RecordVoiceOver, 
  VolumeUp, 
  StopCircle, 
  Info, 
  SettingsVoice 
} from '@mui/icons-material';
import Layout from '../../components/Layout';

export default function TextToSpeech() {
  const [text, setText] = useState('');
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    if ('speechSynthesis' in window) {
      const availableVoices = () => {
        const voices = speechSynthesis.getVoices();
        setVoices(voices);
        if (voices.length > 0) {
          setSelectedVoice(voices[0].name);
        }
      };

      availableVoices();
      speechSynthesis.onvoiceschanged = availableVoices;
    } else {
      alert('Text-to-Speech not supported in this browser.');
    }
  }, []);

  const speakText = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = pitch;
      utterance.rate = rate;

      const voice = voices.find((v) => v.name === selectedVoice);
      if (voice) {
        utterance.voice = voice;
      }

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);

      speechSynthesis.speak(utterance);
    }
  };

  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <>
      <Head>
        <title>Text-to-Speech Tool</title>
        <meta name="description" content="Convert text to speech with customizable options, a responsive interface, and step-by-step guidance." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <Box sx={{ maxWidth: '800px', margin: '0 auto', padding: 4 }}>
          {/* Header */}
          <Typography variant="h3" align="center" gutterBottom>
            Text-to-Speech Tool
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Convert your text into speech with a customizable interface.
          </Typography>

          {/* Input Section */}
          <Grid container spacing={4} sx={{ marginY: 4 }}>
            <Grid item xs={12}>
              <TextField
                label="Enter Text"
                multiline
                rows={6}
                fullWidth
                variant="outlined"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Select Voice</InputLabel>
                <Select
                  value={selectedVoice}
                  onChange={(e) => setSelectedVoice(e.target.value)}
                >
                  {voices.map((voice) => (
                    <MenuItem key={voice.name} value={voice.name}>
                      {voice.name} ({voice.lang})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {selectedVoice && (
                <Typography variant="caption">
                  Selected Voice: {selectedVoice}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box>
                <Typography variant="body1" gutterBottom>
                  Pitch: {pitch.toFixed(1)}
                </Typography>
                <Slider
                  value={pitch}
                  onChange={(e, newValue) => setPitch(newValue)}
                  min={0}
                  max={2}
                  step={0.1}
                  marks
                />
              </Box>
              <Box>
                <Typography variant="body1" gutterBottom>
                  Rate: {rate.toFixed(1)}
                </Typography>
                <Slider
                  value={rate}
                  onChange={(e, newValue) => setRate(newValue)}
                  min={0.5}
                  max={2}
                  step={0.1}
                  marks
                />
              </Box>
            </Grid>
          </Grid>

          {/* Action Buttons */}
          <Box sx={{ textAlign: 'center', marginTop: 4 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={speakText}
              size="large"
              startIcon={<RecordVoiceOver />}
              disabled={isSpeaking}
            >
              Speak
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={stopSpeech}
              size="large"
              startIcon={<StopCircle />}
              sx={{ marginLeft: 2 }}
            >
              Stop
            </Button>
            <Button
              variant="text"
              onClick={() => setText('')}
              size="large"
              sx={{ marginLeft: 2 }}
            >
              Clear Text
            </Button>
          </Box>
        </Box>

        {/* About Section */}
        <Box sx={{ backgroundColor: '#f5f5f5', padding: 4, marginTop: 6 }}>
          <Typography variant="h4" align="center" gutterBottom>
            About This Tool
          </Typography>
          <Typography variant="body1" align="center">
            This tool allows you to convert text to speech with ease. Customize your experience with voice, pitch, and rate options.
          </Typography>
        </Box>

        {/* Features Section */}
        <Box sx={{ padding: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <SettingsVoice color="primary" fontSize="large" />
                  <Typography variant="h6" align="center">
                    Multiple Voices
                  </Typography>
                  <Typography variant="body2" align="center">
                    Choose from a variety of voices available in your browser.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <VolumeUp color="primary" fontSize="large" />
                  <Typography variant="h6" align="center">
                    Adjustable Pitch
                  </Typography>
                  <Typography variant="body2" align="center">
                    Modify the pitch of the speech for a personalized experience.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Info color="primary" fontSize="large" />
                  <Typography variant="h6" align="center">
                    Custom Rate
                  </Typography>
                  <Typography variant="body2" align="center">
                    Adjust the speed of the speech output to match your needs.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <StopCircle color="primary" fontSize="large" />
                  <Typography variant="h6" align="center">
                    Stop Anytime
                  </Typography>
                  <Typography variant="body2" align="center">
                    Stop the speech instantly with a single click.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* How to Use Section */}
        <Box sx={{ backgroundColor: '#f5f5f5', padding: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            How to Use
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" align="center">
                1. Enter Text
              </Typography>
              <Typography variant="body2" align="center">
                Type or paste the text you want to convert into speech.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" align="center">
                2. Customize
              </Typography>
              <Typography variant="body2" align="center">
                Choose your preferred voice, pitch, and rate.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" align="center">
                3. Listen
              </Typography>
              <Typography variant="body2" align="center">
                Click "Speak" and enjoy the audio playback.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </>
  );
}
