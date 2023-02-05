import Figure from './Figure';
import Footer from './Footer';
import Main from './Main';
import Header from './Header';
import Aside from './Aside';
import Testimonials from './Testimonials';

function App() {
  return (
    <div className="content-wrapper">
      <Header />
      <Aside />
      <Main />
      <Testimonials />
      <Figure />
      <Footer />
    </div>
  );
}

export default App;
