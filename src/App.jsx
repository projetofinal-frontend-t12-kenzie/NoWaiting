import React from "react";

import Global from "./style/Global";
import './App.css';
import Landingpage from "./pages/Landingpage/Landingpage";
import DashboardRestaurante from "./pages/DashboardRestaurante";

function App(){
  return (
    <div className="App">
      <Global/>
      <Landingpage/>
      <DashboardRestaurante />
    </div>)}

export default App;
