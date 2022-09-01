// import Global from "./style/Global";
import "./App.css";
import DashboardCliente from "./pages/DashboardCliente/dashboardCliente";
import { GlobalStyle } from "./style/Global";

function App() {
  return (
    <>
      <GlobalStyle />
      <DashboardCliente />
    </>
    // <div className="App">
    //   {/* Comece aqui */}
    //   {/* Colocar Component global como filho do contextprovider */}
    // </div>
  );
}

export default App;
