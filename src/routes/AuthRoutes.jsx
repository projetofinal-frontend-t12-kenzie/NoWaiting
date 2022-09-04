import { useContext } from "react"
import { Contexts } from "../contexts/provider";
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const AuthRoutes = ()=> {
   const {user,  loading} = useContext(Contexts);
const location = useLocation();
  
   if(loading) return <div>carregando...</div>
    
    return user?
  
        <><Outlet/></>
        :
        <Navigate to='/' replace state={{from: location}}/>
  }
  
  export default AuthRoutes