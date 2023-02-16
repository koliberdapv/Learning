import Header from './Header';
import Aside from './Aside';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="content-wrapper">
      <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      {isMenuOpen && <Aside />}
    </div>
  );
}

export default App;
