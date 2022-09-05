import { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../services/api"

export const Contexts = createContext({})

const ContextsProvider = ({children})=>{
  
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  // useEffect(()=>{
  //   async function loadUser() {
  //     if(token){
  //       try{
        
  //         api.defaults.headers.authorization = `Bearer ${token}`;
  //         const { data } = await api.get('/profile');
  //         setUser(data);

  //       } 
  //       catch(err){console.log(err)} 
  //     }
  //     setLoading(false)
  //   }

  //   loadUser()
  // },[token])

  async function registerUser(data) {
    console.log(data);
      const response = await api.post('/users', data)
      console.log(response);
      navigate('/login', { replace: true });
  }

  return(
  <Contexts.Provider value={{
    // colocar funções aqui
    registerUser,
    loading,
   }}>
    {children}
  </Contexts.Provider>
  )
}

export default ContextsProvider;