import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import React from "react";
import ContextsProvider from "./contexts/provider";
import RoutesMain from "./routes/Routes";

function App(){
  return (
      <ContextsProvider>
        <RoutesMain/>
      </ContextsProvider>
  )
}
  
export default App;