import { Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Admin from "./pages/Admin"
import Home from "./pages/Home"
import Navbar from "./pages/Navbar"
import Hero from "./pages/Hero"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        
        <Route path="/admin" element={<Admin />}/>
        <Route path="/hero" element={<Hero />} />
        <Route path="/" element={<Home />} />



      </Routes>
      <Hero/>
    </>
  )
}

export default App
