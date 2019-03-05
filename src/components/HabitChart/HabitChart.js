import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default function HabitChart({ data }) {
  return(
    <LineChart
        width={900}
        height={300}
        data={data}
      >
       <XAxis dataKey="date"/>
       <YAxis domain={[0, 10]}/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Line
         isAnimationActive={false}
         type="linear"
         dataKey="value"
         stroke="#8884d8"
       />
      </LineChart>
  )
}
