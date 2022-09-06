import "./App.css";
import React from "react";
import ContextsProvider from "./contexts/provider";
import RoutesMain from "./routes/Routes";

function App(){
  return (
    <div className="App">
      <ContextsProvider>
        <RoutesMain/>
      </ContextsProvider>
    </div>)
}
  
export default App;