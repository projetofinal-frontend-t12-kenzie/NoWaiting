import { createContext, useState, useEffect } from "react";
import api from "../services/api"

export const Contexts = createContext({})

const ContextsProvider = ({children})=>{
  
//   const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)
//   const location = useLocation()

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


  return(
  <Contexts.Provider value={{
    // colocar funções aqui
    loading,
   }}>
    {children}
  </Contexts.Provider>
  )
}

export default ContextsProvider;