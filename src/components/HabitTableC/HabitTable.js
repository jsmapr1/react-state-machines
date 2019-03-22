import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import HabitInput from './HabitInput'
import { matchesState } from "xstate";

export default function HabitTable({ data, machine, save }) {
  return(
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>SD</TableCell>
            <TableCell >Habits</TableCell>
         </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => {
            return(
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>

                <TableCell>
                  <HabitInput row={row} save={save}/>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}
