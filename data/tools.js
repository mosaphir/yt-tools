import SecurityIcon from '@mui/icons-material/Security';
import PublicIcon from '@mui/icons-material/Public';
import SearchIcon from '@mui/icons-material/Search';
import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import YouTubeIcon from '@mui/icons-material/YouTube';
import QrCodeIcon from '@mui/icons-material/QrCode';
import DescriptionIcon from '@mui/icons-material/Description';
import CloudIcon from '@mui/icons-material/Cloud';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import CompareIcon from '@mui/icons-material/Compare';
import TranslateIcon from '@mui/icons-material/Translate';
import TimerIcon from '@mui/icons-material/Timer';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import NumbersIcon from '@mui/icons-material/Numbers';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

const tools = [
  { name: 'MD5 Generator', link: '/tools/md5-generator', description: 'Generate MD5 hashes from text.', icon: <SecurityIcon /> },
  { name: 'What Is My IP', link: '/tools/what-is-my-ip', description: 'Find out your public IP address.', icon: <PublicIcon /> },
  { name: 'IP Address Lookup', link: '/tools/ip-lookup', description: 'Look up detailed information about an IP address.', icon: <SearchIcon /> },
  { name: 'Base64 Decode', link: '/tools/base64-decode', description: 'Decode Base64 encoded strings.', icon: <CodeIcon /> },
  { name: 'Base64 Encode', link: '/tools/base64-encode', description: 'Encode text into Base64 format.', icon: <CodeIcon /> },
  { name: 'Color Converter', link: '/tools/color-converter', description: 'Convert between HEX, RGB, and other color formats.', icon: <PaletteIcon /> },
  { name: 'Password Generator', link: '/tools/password-generator', description: 'Generate secure random passwords.', icon: <VpnKeyIcon /> },
  { name: 'VTT to SRT', link: '/tools/vtt-to-srt', description: 'Convert VTT subtitle files to SRT format.', icon: <SubtitlesIcon /> },
  { name: 'SRT to VTT', link: '/tools/srt-to-vtt', description: 'Convert SRT subtitle files to VTT format.', icon: <SubtitlesIcon /> },
  { name: 'YouTube Thumbnail Downloader', link: '/tools/youtube-thumbnail-downloader', description: 'Download thumbnails from YouTube videos.', icon: <YouTubeIcon /> },
  { name: 'HEX to RGB', link: '/tools/hex-to-rgb', description: 'Convert HEX color codes to RGB format.', icon: <PaletteIcon /> },
  { name: 'RGB to HEX', link: '/tools/rgb-to-hex', description: 'Convert RGB color codes to HEX format.', icon: <PaletteIcon /> },
  { name: 'QR Code Generator', link: '/tools/qr-code-generator', description: 'Generate QR codes from text or URLs.', icon: <QrCodeIcon /> },
  { name: 'Markdown Previewer', link: '/tools/markdown-previewer', description: 'Write and preview Markdown instantly.', icon: <DescriptionIcon /> },
  { name: 'Weather Checker', link: '/tools/weather-checker', description: 'Get weather details for any city.', icon: <CloudIcon /> },
  { name: 'Palindrome Checker', link: '/tools/palindrome-checker', description: 'Check if a text is a palindrome.', icon: <TextFieldsIcon /> },
  { name: 'Text Comparison Tool', link: '/tools/text-comparison', description: 'Compare two texts for differences.', icon: <CompareIcon /> },
  { name: 'Binary to Text Converter', link: '/tools/binary-to-text', description: 'Convert binary code to text and vice versa.', icon: <TranslateIcon /> },
  { name: 'Timestamp Converter', link: '/tools/timestamp-converter', description: 'Convert Unix timestamps to readable dates and vice versa.', icon: <TimerIcon /> },
  { name: 'File Metadata Viewer', link: '/tools/file-metadata-viewer', description: 'View metadata of uploaded files.', icon: <FilePresentIcon /> },
  { name: 'URL Encoder', link: '/tools/url-encoder', description: 'Encode text into URL-friendly format.', icon: <CodeIcon /> },
  { name: 'URL Decoder', link: '/tools/url-decoder', description: 'Decode URL-encoded strings.', icon: <CodeIcon /> },
  { name: 'Random Number Generator', link: '/tools/random-number-generator', description: 'Generate random numbers within a range.', icon: <NumbersIcon /> },
  { name: 'JSON Formatter', link: '/tools/json-formatter', description: 'Format and validate JSON strings.', icon: <DataUsageIcon /> },
  { name: 'Text Case Converter', link: '/tools/text-case-converter', description: 'Convert text to uppercase, lowercase, or title case.', icon: <FormatColorTextIcon /> },
  { name: 'Currency Converter', link: '/tools/currency-converter', description: 'Convert between different currencies.', icon: <SwapHorizIcon /> },
  { name: 'HTML Entity Encoder', link: '/tools/html-entity-encoder', description: 'Encode text into HTML entities.', icon: <CodeIcon /> },
  { name: 'HTML Entity Decoder', link: '/tools/html-entity-decoder', description: 'Decode HTML entities into text.', icon: <CodeIcon /> },
  { name: 'UUID Generator', link: '/tools/uuid-generator', description: 'Generate universally unique identifiers (UUIDs).', icon: <VpnKeyIcon /> },
];

export default tools;
