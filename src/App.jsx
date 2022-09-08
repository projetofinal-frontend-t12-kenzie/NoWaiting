import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import React from "react";
import ContextsProvider from "./contexts/provider";
import RoutesMain from "./routes/Routes";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App(){
  return (
    <div className="App">
      <ToastContainer/>
      <ContextsProvider>
        <RoutesMain/>
      </ContextsProvider>
    </div>
  )
}
  
export default App;