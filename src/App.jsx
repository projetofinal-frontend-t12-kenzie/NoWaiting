import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import React from "react";
import Global from "./style/Global";
import Landingpage from "./pages/Landingpage/Landingpage";
import DashboardRestaurante from "./pages/DashboardRestaurante";

function App(){
  return (
    <div className="App">
      <Global/>
      <Landingpage/>
      <DashboardRestaurante />
      <Login />
      <Register />
    </div>)
}
  
export default App;
