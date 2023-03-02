import Header from './Header';
import Aside from './Aside';
import Darkener from './Darkener';
import Main from './Main.js';

function App() {
  return (
    <div className="app-wrapper">
      <Darkener />
      <Aside />
      <Header />
      <Main />
    </div>
  );
}

export default App;
