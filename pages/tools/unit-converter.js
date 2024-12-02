import { useState } from 'react';
import { TextField, Button, Typography, Box, Select, MenuItem } from '@mui/material';
import convert from 'convert-units';
import Layout from '../../components/Layout';

export default function UnitConverter() {
  const [value, setValue] = useState(1);
  const [unitFrom, setUnitFrom] = useState('m');
  const [unitTo, setUnitTo] = useState('ft');
  const [convertedValue, setConvertedValue] = useState(null);

  const handleConvert = () => {
    try {
      const result = convert(value).from(unitFrom).to(unitTo);
      setConvertedValue(result.toFixed(2));
    } catch {
      setConvertedValue('Invalid conversion');
    }
  };

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        Unit Converter
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Value"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          fullWidth
        />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Select
            value={unitFrom}
            onChange={(e) => setUnitFrom(e.target.value)}
            fullWidth
          >
            {convert().possibilities().map((unit) => (
              <MenuItem key={unit} value={unit}>
                {unit}
              </MenuItem>
            ))}
          </Select>
          <Select
            value={unitTo}
            onChange={(e) => setUnitTo(e.target.value)}
            fullWidth
          >
            {convert().possibilities().map((unit) => (
              <MenuItem key={unit} value={unit}>
                {unit}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Button variant="contained" onClick={handleConvert}>
          Convert
        </Button>
        {convertedValue && (
          <Typography>
            {value} {unitFrom} = {convertedValue} {unitTo}
          </Typography>
        )}
      </Box>
    </Layout>
  );
}
