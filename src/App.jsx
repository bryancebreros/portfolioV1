import Header from './components/Header'
import Me from './components/Me'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Me />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
