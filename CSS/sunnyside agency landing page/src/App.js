import Figure from './Figure';
import Footer from './Footer';
import Main from './Main';
import Header from './Header';
import Aside from './Aside';
import Testimonials from './Testimonials';
import { useState } from 'react';

function App() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  return (
    <div className="content-wrapper">
      <Header isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen} />
      <Aside isAsideOpen={isAsideOpen} />
      <Main />
      <Testimonials />
      <Figure />
      <Footer />
    </div>
  );
}

export default App;
