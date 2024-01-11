import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import './App.css'

function App() {

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
