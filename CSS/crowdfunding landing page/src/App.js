import Header from './Header';
import Aside from './Aside';
import Darkener from './Darkener';
import Main from './Main.js';
import Modal from './Modal';
import Thanks from './Thanks';

function App() {
  return (
    <div className="app-wrapper">
      <Darkener />
      <Aside />
      <Header />
      <Main />
      <Modal />
      <Thanks />
    </div>
  );
}

export default App;
