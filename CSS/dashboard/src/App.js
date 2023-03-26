import Header from './Header';
import Hero from './Hero';
import Main from './Main';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Main />
    </div>
  );
}

export default App;

// const handleClick = () => {
//   const app = document.querySelector('.app');
//   app.classList.add('darkmode');
//   document.documentElement.style.colorScheme = 'dark';
//   console.log('changed to dark mode');

//   if (
//     window.matchMedia &&
//     window.matchMedia('(prefers-color-scheme: dark)').matches
//   ) {
//     console.log('dark');
//   }
//   if (
//     window.matchMedia &&
//     window.matchMedia('(prefers-color-scheme: light)').matches
//   ) {
//     console.log('light');
//   }
// };
// const handleClick2 = () => {
//   const dos = document.querySelector('.app');
//   document.body.classList.remove('darkmode');
// };
