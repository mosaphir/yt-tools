import { useState, useEffect } from 'react';
import { TextField, Button, Typography, Box, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import Layout from '../../components/Layout';

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [currencyFrom, setCurrencyFrom] = useState('USD');
  const [currencyTo, setCurrencyTo] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    axios
      .get('https://open.er-api.com/v6/latest/USD')
      .then((response) => {
        setCurrencies(Object.keys(response.data.rates));
        setExchangeRate(response.data.rates[currencyTo]);
      })
      .catch((error) => console.error('Error fetching exchange rates:', error));
  }, []);

  const convertCurrency = () => {
    axios
      .get(`https://open.er-api.com/v6/latest/${currencyFrom}`)
      .then((response) => {
        const rate = response.data.rates[currencyTo];
        setExchangeRate(rate);
        setConvertedAmount((amount * rate).toFixed(2));
      })
      .catch((error) => console.error('Error fetching conversion rate:', error));
  };

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        Currency Converter
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          fullWidth
        />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Select
            value={currencyFrom}
            onChange={(e) => setCurrencyFrom(e.target.value)}
            fullWidth
          >
            {currencies.map((currency) => (
              <MenuItem key={currency} value={currency}>
                {currency}
              </MenuItem>
            ))}
          </Select>
          <Select
            value={currencyTo}
            onChange={(e) => setCurrencyTo(e.target.value)}
            fullWidth
          >
            {currencies.map((currency) => (
              <MenuItem key={currency} value={currency}>
                {currency}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Button variant="contained" onClick={convertCurrency}>
          Convert
        </Button>
        {convertedAmount && (
          <Typography>
            {amount} {currencyFrom} = {convertedAmount} {currencyTo}
          </Typography>
        )}
      </Box>
    </Layout>
  );
}
