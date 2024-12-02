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
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import LanguageIcon from '@mui/icons-material/Language';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import TextRotationNoneIcon from '@mui/icons-material/TextRotationNone';
import ReportIcon from '@mui/icons-material/Report';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const tools = [
  { name: 'MD5 Generator', link: '/tools/md5-generator', description: 'Generate MD5 hashes from text.', icon: <SecurityIcon /> },
  { name: 'What Is My IP', link: '/tools/what-is-my-ip', description: 'Find out your public IP address.', icon: <PublicIcon /> },
  { name: 'IP Address Lookup', link: '/tools/ip-lookup', description: 'Look up detailed information about an IP address.', icon: <SearchIcon /> },
  { name: 'Base64 Decode', link: '/tools/base64-decode', description: 'Decode Base64 encoded strings.', icon: <CodeIcon /> },
  { name: 'Base64 Encode', link: '/tools/base64-encode', description: 'Encode text into Base64 format.', icon: <CodeIcon /> },
  { name: 'Base64 to Image', link: '/tools/base64-to-image', description: 'Convert Base64 to an image.', icon: <CodeIcon /> },
  { name: 'Binary to Text Converter', link: '/tools/binary-to-text', description: 'Convert binary code to text and vice versa.', icon: <TranslateIcon /> },
  { name: 'Case Reverser', link: '/tools/case-reverser', description: 'Reverse the case of text.', icon: <TextRotationNoneIcon /> },
  { name: 'Color Converter', link: '/tools/color-converter', description: 'Convert between HEX, RGB, and other color formats.', icon: <PaletteIcon /> },
  { name: 'CSS Beautifier', link: '/tools/css-beautify', description: 'Beautify CSS code for better readability.', icon: <BrowserUpdatedIcon /> },
  { name: 'Currency Converter', link: '/tools/currency-converter', description: 'Convert between different currencies.', icon: <SwapHorizIcon /> },
  { name: 'Device Detector', link: '/tools/device-detect', description: 'Detect device type from user-agent.', icon: <DeviceHubIcon /> },
  { name: 'Domain to IP', link: '/tools/domain-to-ip', description: 'Convert a domain name to its corresponding IP address.', icon: <LanguageIcon /> },
  { name: 'File Metadata Viewer', link: '/tools/file-metadata-viewer', description: 'View metadata of uploaded files.', icon: <FilePresentIcon /> },
  { name: 'HTML Beautifier', link: '/tools/html-beautifier', description: 'Beautify HTML code for better readability.', icon: <CodeIcon /> },
  { name: 'IP Lookup', link: '/tools/ip-lookup', description: 'Lookup IP address information and location.', icon: <SearchIcon /> },
  { name: 'JavaScript Obfuscator', link: '/tools/javascript-obfuscator', description: 'Obfuscate JavaScript code to protect it from reverse-engineering.', icon: <CodeIcon /> },
  { name: 'JS Beautifier', link: '/tools/js-beautify', description: 'Beautify JavaScript code for better readability.', icon: <CodeIcon /> },
  { name: 'JSON Minifier', link: '/tools/json-minifier', description: 'Minify JSON data to reduce file size.', icon: <DataUsageIcon /> },
  { name: 'Keyword Density', link: '/tools/keyword-density', description: 'Check the density of keywords in text for SEO analysis.', icon: <ReportIcon /> },
  { name: 'Lorem Ipsum Generator', link: '/tools/lorem-ipsum-generator', description: 'Generate Lorem Ipsum text for placeholders.', icon: <EmojiObjectsIcon /> },
  { name: 'Markdown Previewer', link: '/tools/markdown-previewer', description: 'Write and preview Markdown instantly.', icon: <DescriptionIcon /> },
  { name: 'Palindrome Checker', link: '/tools/palindrome-checker', description: 'Check if a text is a palindrome.', icon: <TextFieldsIcon /> },
  { name: 'Password Generator', link: '/tools/password-generator', description: 'Generate secure random passwords.', icon: <VpnKeyIcon /> },
  { name: 'QR Code Generator', link: '/tools/qr-code-generator', description: 'Generate QR codes from text or URLs.', icon: <QrCodeIcon /> },
  { name: 'QRCode Decoder', link: '/tools/qrcode-decoder', description: 'Decode QR codes.', icon: <QrCodeIcon /> },
  { name: 'Roman Numerals', link: '/tools/roman-numerals', description: 'Convert numbers to Roman numerals and vice versa.', icon: <NumbersIcon /> },
  { name: 'SRT to VTT', link: '/tools/srt-to-vtt', description: 'Convert SRT subtitle files to VTT format.', icon: <SubtitlesIcon /> },
  { name: 'Text Case Converter', link: '/tools/text-case-converter', description: 'Convert text to uppercase, lowercase, or title case.', icon: <FormatColorTextIcon /> },
  { name: 'Text to Speech', link: '/tools/text-to-speech', description: 'Convert text to speech.', icon: <DescriptionIcon /> },
  { name: 'Timestamp Converter', link: '/tools/timestamp-converter', description: 'Convert Unix timestamps to readable dates and vice versa.', icon: <TimerIcon /> },
  { name: 'Unit Converter', link: '/tools/unit-converter', description: 'Convert between different units of measurement.', icon: <TrendingUpIcon /> },
  { name: 'VTT to SRT', link: '/tools/vtt-to-srt', description: 'Convert VTT subtitle files to SRT format.', icon: <SubtitlesIcon /> },
  { name: 'Weather Checker', link: '/tools/weather-checker', description: 'Get weather details for any city.', icon: <CloudIcon /> },
  { name: 'Whois', link: '/tools/whois', description: 'Lookup domain registration details and more.', icon: <InsertDriveFileIcon /> },
  { name: 'Word Counter', link: '/tools/word-counter', description: 'Count the number of words in a text.', icon: <TextFieldsIcon /> },
  { name: 'YouTube Thumbnail Downloader', link: '/tools/youtube-thumbnail-downloader', description: 'Download thumbnails from YouTube videos.', icon: <YouTubeIcon /> },
];

export default tools;
