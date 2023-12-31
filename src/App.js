import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom'
import Home from './Pages/Home';
import { Routes } from 'react-router';
import Header from './Components/Fundamental/Header';
import Login from './Pages/accounts/Login' 
import Register from './Pages/accounts/Register';
import EditProfile from './Pages/accounts/EditProfile';
import Profile from './Pages/accounts/Profile';
import { Navigate  } from 'react-router-dom';
function App() {
  return(
    <>
      <Router>
        <Header />
        <Routes>
          <Route element={<Home />} path='/home' />
        </Routes>
        <Routes>
          <Route path='/accounts/'>
            <Route path='login' element={<Login />}/> 
            <Route path='register' element={<Register />}/> 
            <Route path="profile" element={<Profile/>} />
            <Route path='profile/edit' element={<EditProfile />}/>
          </Route>
          <Route path='*' element={<Navigate to='/home' replace />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
