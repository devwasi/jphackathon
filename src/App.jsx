import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'

function App() {

  return (
   <>
   <Routes>
    <Route index element={<Login />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/home' element={<Home />} />
   </Routes>
   </>
  )
}

export default App
