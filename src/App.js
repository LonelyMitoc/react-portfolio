import './App.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <main className="portfolio-app">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;