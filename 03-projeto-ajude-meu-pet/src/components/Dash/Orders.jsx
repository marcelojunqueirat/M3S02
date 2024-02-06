import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '06 Fev, 2024',
    'Elvis Presley',
    'Tupelo, MS',
    'Pastor Alemão',
    312.44,
  ),
  createData(
    1,
    '06 Fev, 2024',
    'Paul McCartney',
    'London, UK',
    'American Bully',
    866.99,
  ),
  createData(2, '06 Fev, 2024', 'Tom Scholz', 'Boston, MA', 'Vira lata', 100.81),
  createData(
    3,
    '06 Fev, 2024',
    'Michael Jackson',
    'Gary, IN',
    'Rotweiller',
    654.39,
  ),
  createData(
    4,
    '06 Fev, 2024',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'Pitbull',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <h2>Últimas adoções</h2>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}