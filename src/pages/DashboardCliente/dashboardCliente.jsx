import BoxPesquisa from "../../components/DashboarCliente/BoxPesquisa/BoxPesquisa";
import ProdutosRecomendados from "../../components/DashboarCliente/BoxRecomendados/BoxRecomendado";
import Produtos from "../../components/DashboarCliente/CardProduto/CardProduto";
import Header from "../../components/DashboarCliente/Header/Header";
import ContainerLocalizacao from "../../components/DashboarCliente/Localização/localizacao";
import Navbar from "../../components/DashboarCliente/Navbar/Navbar";
import { ContainerDashboard } from "./dashboardCliente.styles";

const DashboardCliente = () => {
  return (
    // Designe Mobile
    // <ContainerDashboard>
    //   <div className="bodyList">
    //     <Header />
    //     <ContainerLocalizacao />
    //     <Navbar />
    //     <Produtos />
    //     <ProdutosRecomendados />
    //   </div>
    //   <BoxPesquisa />
    // </ContainerDashboard>

    // Designe Desktop
    <ContainerDashboard>
      <div className="bodyList">
        <Header />
        <ContainerLocalizacao />
        <Navbar />
        <Produtos />
        <ProdutosRecomendados />
      </div>
      <div className="pedidosContainer"></div>
      <BoxPesquisa />
    </ContainerDashboard>
  );
};

export default DashboardCliente;
