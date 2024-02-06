import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <>
      <h2>Cachorros Adotados</h2>
      <Typography component="p" variant="h4">
        567
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        em 06 de fevereiro, 2024
      </Typography>
    </>
  );
}