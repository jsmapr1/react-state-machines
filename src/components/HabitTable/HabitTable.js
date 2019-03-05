import React from 'react';

export default function HabitTable({ data }) {
  return(
    <table>
      <thead>
        <tr><td>Date</td><td>Habits</td></tr>
      </thead>
      <tbody>
        {data.map((row, index) => {
          return(
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.value}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
