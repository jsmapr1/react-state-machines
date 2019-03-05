import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function HabitTable({ data }) {
  return(
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell numeric>Habits</TableCell>
         </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => {
            return(
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell numeric>{row.value}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}
