import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';


export default function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </AuthContextProvider>

    </>
  )
}