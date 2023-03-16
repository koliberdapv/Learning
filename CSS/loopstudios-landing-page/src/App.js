import Hero from './Hero';
import Footer from './Footer';
import Aside from './Aside';
import { useState } from 'react';
import Main from './Main';
import Gallery from './Gallery';

function App() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  return (
    <>
      <Hero setIsAsideOpen={setIsAsideOpen} />
      <Main />
      <Gallery />
      <Footer />
      {isAsideOpen && <Aside setIsAsideOpen={setIsAsideOpen} />}
    </>
  );
}

export default App;
