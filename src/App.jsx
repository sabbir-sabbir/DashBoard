 import './App.css'
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavandSidebar from './components/NavandSidebar';



function App() {
  

  return (
    <>
     <BrowserRouter>
     <NavandSidebar/>
      <Routes>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
