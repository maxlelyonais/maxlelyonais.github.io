import AboutMe from './components/AboutMe'
import Achievements from './components/Achievements'
import Certificates from './components/Certificates'
import Footer from './components/Footer'
import Header from './components/Header'
import Presentation from './components/Presentation'
import Projects from './components/Projects'
import './styles/App.css'

function App() {
  return (
  <>
    <Header />
    <Presentation />
    <Projects />
    <Certificates />
    <Achievements />
    <AboutMe />
    <Footer />
  </>
  )
}

export default App
