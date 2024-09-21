import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Experience from './components/Experience'
import Skills from './components/Skills'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path="/" exact component={Hero} />
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
