
import './css/App.css'


import Home from './pages/Home';
import Navbar from './components/Navbar';
import ShoppingItem from './components/ShoppingItem';
import { ShoppingCartProvider } from './contexts/ShoppingCart';
import Checkout from './pages/checkout';
import Welcome from './pages/Welcome';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('userName') || '';
  });

  const handleNameSubmit = (name) => {
    setUserName(name);
    localStorage.setItem('userName', name);
  };

  if (!userName) {
    return <Welcome onNameSubmit={handleNameSubmit} />;
  }

  return (
    <ShoppingCartProvider>
      <Navbar />
      <main className="main-container">
        <Routes>
          <Route path='/' element={<Home userName={userName} />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </main>
    </ShoppingCartProvider>
  );
}

export default App
