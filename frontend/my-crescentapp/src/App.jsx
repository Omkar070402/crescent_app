import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './components/About'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import AuthRoute from './components/AuthRoute'

const App = () => {
  return (



    <Router>
      
      <Routes>
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path='/login' element={<AuthRoute><Login /></AuthRoute>}></Route>
        <Route path='/register' element={<AuthRoute><Register /></AuthRoute>}></Route>
        <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}></Route>
      </Routes>
    </Router>

  )
}

export default App
