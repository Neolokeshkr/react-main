import './App.css';
import React from 'react';

function App() {
  const ele1 = React.createElement(
    'h1',
    { id: 'header' },
    'React.createElement'
  );

  const ele2 = React.createElement('h1', {id:'name'}, "Lokesh");

  console.log(ele1);
  console.log(ele2);

  return (
    <>
      {ele1}
      {ele2}
    </>
  );
}

export default App;
