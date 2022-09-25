import {Outlet, Navigate} from 'react-router-dom'
import NavbarMenu from '../layout/NavbarMenu'


const ProtectedRoute = () => {
  let auth = {'token': false}
  return(
    <NavbarMenu/>,
    auth.token ? <Outlet/> : <Navigate to='/login'/>
  )  
  
}

export default ProtectedRoute