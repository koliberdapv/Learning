import Person from './Person';
import Activities from './Activities';
import { useState, useEffect } from 'react';
import userData from './data.json';

function App() {
  const [cycle, setCycle] = useState('daily');
  return (
    <>
      <main className="main">
        <div className="content-wrapper">
          <Person cycle={cycle} setCycle={setCycle} />
          <Activities cycle={cycle} />
        </div>
      </main>
    </>
  );
}

export default App;
