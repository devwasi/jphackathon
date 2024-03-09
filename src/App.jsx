import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import PublicRoutes from './config/Routes/PublicRoutes'
import ProtectedRoutes from './config/Routes/ProtectedRoutes'

function App() {

  return (
   <>
   <Routes>
    <Route element={<PublicRoutes />}>
    <Route index element={<Login />} />
    <Route path='/signup' element={<SignUp />} />
    </Route>
    <Route element={<ProtectedRoutes />}>
    <Route path='/home' element={<Home />} />
    </Route>
   </Routes>
   </>
  )
}

export default App
