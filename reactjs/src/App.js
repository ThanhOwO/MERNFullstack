import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Landing from './components/layout/Landing';
import Auth from './views/Auth';
import NotFound from './components/auth/NotFound' 
import AuthContextProvider from './contexts/AuthContext'
import Dashboard from './views/Dashboard'
import ProtectedRoute from './components/routing/ProtectedRoute'
import Post from './views/Posts'

function App() {
  return (
  <AuthContextProvider>
  <Router>
    <Routes>
      <Route exact path='/' element={<Landing/>} />
      <Route exact path='/login' element={<Auth authRoute='login'/>} />
      <Route exact path='/register' element={<Auth authRoute='register'/>} />
      <Route path='*' element={<NotFound/>}/>
      
      <Route element={<ProtectedRoute/>}>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/posts' element={<Post/>} />
      </Route>
      
    </Routes>
  </Router> 
  </AuthContextProvider>
  )
}
 
export default App;
