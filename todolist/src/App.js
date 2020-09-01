import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const list = [
      'Go to market',
      'Buy food',
      'Make dinner'
  ];
  const listMap = list.map(x => <li>{x}</li>);
  return (<ul>{listMap}</ul>);
}

export default App;
