import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Work/Home'
// import About from './Work/About'
import Contact from './Work/Contact'
import Services from './Work/Services'
import Stuffs from './Work/Stuffs'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <BrowserRouter>
        <Routes>
          <Route path="/stuffs" element={<Stuffs />} />
        </Routes>
      </BrowserRouter>
      <Contact />
    </>
  );
}

export default App;
