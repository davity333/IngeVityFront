import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './../src/Components/Pages/Home'
import Contacts from './Components/Pages/Contacts'
import Services from './Components/Pages/Services'
import Login from './Components/Pages/Login'
import Register from './Components/Pages/Register'
import ListServices from './Components/Pages/ListServices'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/services/request" element={<ListServices />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
