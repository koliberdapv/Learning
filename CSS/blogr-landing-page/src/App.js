import Header from './Header';
import Aside from './Aside';
import { useGlobalContext } from './Context.js';
import Submenu from './Submenu';
import Main from './Main';

function App() {
  const { isMenuOpen, isSubmenuOpen } = useGlobalContext();
  return (
    <div className="content-wrapper">
      <Header />
      {isMenuOpen && <Aside />}
      {isSubmenuOpen && <Submenu />}
      <Main />
    </div>
  );
}

export default App;
