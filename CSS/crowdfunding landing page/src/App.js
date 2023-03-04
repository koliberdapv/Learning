import Header from './Header';
import Aside from './Aside';
import Darkener from './Darkener';
import Main from './Main.js';
import Modal from './Modal';

function App() {
  return (
    <div className="app-wrapper">
      <Darkener />
      <Aside />
      <Header />
      <Main />
      <Modal />
    </div>
  );
}

export default App;