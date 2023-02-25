import Header from './Header';
import Aside from './Aside';
import { useGlobalContext } from './Context.js';
import Submenu from './Submenu';
import Main from './Main';
import StateOfArt from './StateOfArt';
import AddInfo from './AddInfo';

function App() {
  const { isMenuOpen, isSubmenuOpen } = useGlobalContext();
  return (
    <div className="content-wrapper">
      <Header />
      {isMenuOpen && <Aside />}
      {isSubmenuOpen && <Submenu />}
      <Main />
      <StateOfArt />
      <AddInfo />
    </div>
  );
}

export default App;
