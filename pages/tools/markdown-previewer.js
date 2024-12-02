import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { TextField, Typography, Box, Paper, IconButton, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import Layout from '../../components/Layout';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import InfoIcon from '@mui/icons-material/Info';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HelpIcon from '@mui/icons-material/Help';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Head from 'next/head';

export default function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState('');
  const [preview, setPreview] = useState('');

  const handlePreview = (markdown) => {
    setPreview(markdown);
  };

  return (
    <Layout>
      {/* SEO Meta */}
      <Head>
        <meta name="description" content="Markdown Previewer - Convert Markdown text into formatted HTML preview." />
        <meta name="keywords" content="Markdown, Preview, Text, Converter, Code, Copy, Previewer" />
        <meta name="author" content="Your Name" />
        <title>Markdown Previewer</title>
      </Head>

      {/* Main Title */}
      <Typography variant="h4" align="center" gutterBottom>
        Markdown Previewer
      </Typography>

      {/* Markdown Input Section */}
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Typography variant="h6" gutterBottom>
          Write your Markdown:
        </Typography>
        <TextField
          label="Write Markdown"
          variant="outlined"
          multiline
          rows={6}
          fullWidth
          value={markdown}
          onChange={(e) => handlePreview(e.target.value)}
          sx={{
            '@media (max-width: 600px)': {
              fontSize: '0.875rem', // Smaller text for smaller screens
            },
          }}
        />
      </Paper>

      {/* Markdown Preview Section */}
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Typography variant="h6" gutterBottom>
          Preview:
        </Typography>
        <Box sx={{ padding: 2, border: '1px solid #ccc', borderRadius: '4px', background: '#f9f9f9' }}>
          <ReactMarkdown>{preview}</ReactMarkdown>
        </Box>

        {/* Copy to Clipboard Button */}
        {preview && (
          <CopyToClipboard text={preview}>
            <IconButton color="primary" sx={{ marginTop: 2 }}>
              <ContentCopyIcon />
            </IconButton>
          </CopyToClipboard>
        )}
      </Paper>

      {/* About Section */}
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <InfoIcon sx={{ marginRight: 1 }} />
          <Typography variant="h5">About Markdown Previewer</Typography>
        </Box>
        <Typography>
          This Markdown Previewer tool allows you to write Markdown text and immediately view a live preview
          of the formatted output. Markdown is a lightweight markup language with plain-text formatting syntax.
        </Typography>
      </Paper>

      {/* Features Section */}
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <ListAltIcon sx={{ marginRight: 1 }} />
          <Typography variant="h5">Features</Typography>
        </Box>
        <Typography component="ul" sx={{ paddingLeft: 2 }}>
          <li>Real-time live preview of your Markdown input.</li>
          <li>Copy the generated HTML code to your clipboard with a button.</li>
          <li>Responsive design works on mobile, tablet, and desktop devices.</li>
          <li>Supports Markdown syntax including headings, lists, links, and images.</li>
        </Typography>
      </Paper>

      {/* FAQ Section */}
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <HelpIcon sx={{ marginRight: 1 }} />
          <Typography variant="h5">FAQ</Typography>
        </Box>

        {/* FAQ Accordion */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What is Markdown?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Markdown is a lightweight markup language that you can use to format text. It’s widely used in writing
              documentation and is compatible with many tools, including GitHub and static website generators.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What are the advantages of Markdown?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Markdown provides a clean and readable format for writing. It also allows for quick conversion to HTML,
              making it ideal for blog posts, documentation, and other web content.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>How do I use this tool?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Simply type your Markdown text in the input box, and the preview will automatically update. You can also
              copy the previewed HTML content to your clipboard using the button provided.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Layout>
  );
}
