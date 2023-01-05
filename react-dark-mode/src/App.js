import './App.css';
import Header from './components/Header'
import Welcome from './components/Welcome'
import Footer from './components/Footer'
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light-mode')

  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />
      <Welcome theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
