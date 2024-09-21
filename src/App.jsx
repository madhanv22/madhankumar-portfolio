import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Experience from './components/Experience'

function App() {
  
  return (
    <div className='App'>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
