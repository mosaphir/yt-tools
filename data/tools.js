import SecurityIcon from '@mui/icons-material/Security';
import PublicIcon from '@mui/icons-material/Public';
import SearchIcon from '@mui/icons-material/Search';
import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import YouTubeIcon from '@mui/icons-material/YouTube';

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
];

export default tools;
