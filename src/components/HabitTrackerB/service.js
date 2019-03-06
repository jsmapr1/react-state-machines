const habitData = [
  {
    date: 'Monday',
    value: 10,
  },
  {
    date: 'Tuesday',
    value: 8,
  },
  {
    date: 'Wednesday',
    value: 9,
  },
  {
    date: 'Thurday',
    value: 5,
  },
  {
    date: 'Friday',
    value: 9,
  },
  {
    date: 'Saturday',
    value: 3,
  },
  {
    date: 'Sunday',
    value: 6,
  },
];

export default () => {
  return fetch('http://localhost:3009/habits')
  .then(d => d.json())
  .then(x => new Promise(resolve => setTimeout(() => resolve(x), 3000)))
}
