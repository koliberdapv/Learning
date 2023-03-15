import Hero from './Hero';
import Footer from './Footer';
import Aside from './Aside';
import { useState } from 'react';

function App() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  return (
    <>
      <Hero setIsAsideOpen={setIsAsideOpen} />
      <Footer />
      {isAsideOpen && <Aside setIsAsideOpen={setIsAsideOpen} />}
    </>
  );
}

export default App;
