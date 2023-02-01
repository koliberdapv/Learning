import Person from './Person';
import Activities from './Activities';
import { useState, useEffect } from 'react';
import userData from './data.json';

function App() {
  const [cycle, setCycle] = useState('weekly');
  return (
    <>
      <main className="main">
        <Person />
        <Activities />
      </main>
    </>
  );
}

export default App;
