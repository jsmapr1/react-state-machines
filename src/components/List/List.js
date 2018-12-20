import React from 'react';
import { useState, useEffect } from 'react';

function fakeAPI () {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(['joe', 'bob']), 1000);
  });
}

export default function List() {
  const [list, updateList] = useState([]);
  fakeAPI()
    .then(data => updateList(data));
  return(
    <div>
      {list.map(item => <h2>{item}</h2>)}
    </div>
  )
}
