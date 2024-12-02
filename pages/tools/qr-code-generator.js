import { useState } from "react";
import {
  TextField,
  Typography,
  Box,
  Paper,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Slider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HelpIcon from "@mui/icons-material/Help";
import QRCode from "qrcode.react";
import Layout from "../../components/Layout";

export default function QRCodeGenerator() {
  const [text, setText] = useState("");
  const [size, setSize] = useState(200);
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [errorCorrectionLevel, setErrorCorrectionLevel] = useState("M");

  const handleDownload = () => {
    const canvas = document.querySelector("canvas");
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "qrcode.png";
    link.click();
  };

  return (
    <Layout>
      <Typography variant="h4" gutterBottom align="center">
        QR Code Generator
      </Typography>

      {/* Input Section */}
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Typography variant="h6" gutterBottom>
          Enter Text or URL
        </Typography>
        <TextField
          label="Enter text or URL"
          variant="outlined"
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Typography gutterBottom>QR Code Size</Typography>
        <Slider
          value={size}
          onChange={(e, newValue) => setSize(newValue)}
          step={50}
          min={100}
          max={500}
          valueLabelDisplay="auto"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Foreground Color"
          type="color"
          value={fgColor}
          onChange={(e) => setFgColor(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Background Color"
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Error Correction Level"
          select
          SelectProps={{ native: true }}
          value={errorCorrectionLevel}
          onChange={(e) => setErrorCorrectionLevel(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
        >
          <option value="L">Low</option>
          <option value="M">Medium</option>
          <option value="Q">Quartile</option>
          <option value="H">High</option>
        </TextField>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleDownload}
          disabled={!text}
        >
          Download QR Code
        </Button>
      </Paper>

      {/* QR Code Display */}
      {text && (
        <Box sx={{ textAlign: "center", marginBottom: 4 }}>
          <Typography variant="h6" gutterBottom>
            Your QR Code
          </Typography>
          <QRCode
            value={text}
            size={size}
            fgColor={fgColor}
            bgColor={bgColor}
            level={errorCorrectionLevel}
          />
        </Box>
      )}

      {/* About Section */}
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <InfoIcon sx={{ marginRight: 1 }} />
          <Typography variant="h5">About QR Code Generator</Typography>
        </Box>
        <Typography>
          This tool helps you create customizable QR codes for text, URLs, or
          other content. Customize the size, colors, and error correction levels
          as needed, and download your QR codes in high quality.
        </Typography>
      </Paper>

      {/* Features Section */}
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <ListAltIcon sx={{ marginRight: 1 }} />
          <Typography variant="h5">Features</Typography>
        </Box>
        <Typography component="ul" sx={{ paddingLeft: 2 }}>
          <li>Generate QR codes for any text or URL.</li>
          <li>Customizable size, colors, and error correction levels.</li>
          <li>Download QR codes as PNG images.</li>
          <li>Responsive and user-friendly interface.</li>
        </Typography>
      </Paper>

      {/* FAQ Section */}
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <HelpIcon sx={{ marginRight: 1 }} />
          <Typography variant="h5">FAQ</Typography>
        </Box>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What is a QR Code?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A QR code is a two-dimensional barcode that can be scanned using a
              smartphone or QR code scanner. It can store text, URLs, and other
              information.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Can I customize the QR code?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, you can customize the size, colors, and error correction
              levels using this tool.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Is this tool free?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, this tool is completely free to use for creating QR codes.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Layout>
  );
}
