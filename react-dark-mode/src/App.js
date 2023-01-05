import './App.css';
import Header from './components/Header'
import Welcome from './components/Welcome'
import Testimonials from './components/Testimonials';
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Welcome />
      <Footer />
    </div>
  );
}

export default App;
