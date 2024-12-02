import whois from 'whois-json';

export default async function handler(req, res) {
  const { domain } = req.query;

  if (!domain) {
    return res.status(400).json({ error: 'Domain is required.' });
  }

  try {
    // Fetch WHOIS data using whois-json
    const data = await whois(domain);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve hosting information.' });
  }
}
