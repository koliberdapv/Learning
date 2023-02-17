import Header from './Header';
import Aside from './Aside';
import { useGlobalContext } from './Context.js';
import Submenu from './Submenu';

function App() {
  const { isMenuOpen, isSubmenuOpen } = useGlobalContext();
  return (
    <div className="content-wrapper">
      <Header />
      {isMenuOpen && <Aside />}
      {isSubmenuOpen && <Submenu />}
    </div>
  );
}

export default App;
