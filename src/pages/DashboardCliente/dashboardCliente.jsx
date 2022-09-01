import BoxPesquisa from "../../components/DashboarCliente/BoxPesquisa/BoxPesquisa";
import Header from "../../components/DashboarCliente/Header/Header";
import ContainerLocalizacao from "../../components/DashboarCliente/Localização/localizacao";
import Navbar from "../../components/DashboarCliente/Navbar/Navbar";
import { ContainerDashboard } from "./dashboardCliente.styles";

const DashboardCliente = () => {
  return (
    <ContainerDashboard>
      <div className="topo">
        <Header />
        <ContainerLocalizacao />
        <Navbar />
      </div>
      <BoxPesquisa />
    </ContainerDashboard>
  );
};

export default DashboardCliente;
