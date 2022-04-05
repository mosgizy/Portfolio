import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'
import Skill from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer';

import { Context } from './context';


import './App.css';

function App() {
  return (
    <Context>
      <main className="container" id="app">
        <Navbar />
        <Hero />
        <About />
        <Skill />
        <Project />
        <Contact />
        <Footer />
      </main>
    </Context>
  );
}

export default App;
