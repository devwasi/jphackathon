import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import DonorFullDetails from './pages/DonorFullDetails'
import PublicRoutes from './config/Routes/PublicRoutes'
import ProtectedRoutes from './config/Routes/ProtectedRoutes'
import DonorDetails from './pages/DonorDetails'
import { Bounce, ToastContainer } from 'react-toastify'

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
    <Route path='/donor' element={<DonorDetails />} />
    <Route path='/donorfulldetails/:uid' element={<DonorFullDetails />} />
    </Route>
   </Routes>

   <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
   </>
  )
}

export default App
