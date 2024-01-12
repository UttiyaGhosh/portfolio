import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import './App.css'

function App() {

  const Home = () => (
    <div>
      <h2>Home</h2>
    </div>
  );
  
  const About = () => (
    <div>
      <h2>About</h2>
    </div>
  );
  
  const Contact = () => (
    <div>
      <h2>Contact</h2>
    </div>
  );
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/contact" element = {<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
