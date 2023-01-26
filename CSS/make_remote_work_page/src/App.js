import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Main from './Main';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Navbar setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Main />
    </>
  );
}

export default App;
