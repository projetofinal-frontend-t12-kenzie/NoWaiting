import BoxPesquisa from "../../components/DashboarCliente/BoxPesquisa/BoxPesquisa";
import ProdutosRecomendados from "../../components/DashboarCliente/BoxRecomendados/BoxRecomendado";
import Produtos from "../../components/DashboarCliente/CardProduto/CardProduto";
import Orders from "../../components/DashboarCliente/ClientOrders/ClientOrders.index";
import Header from "../../components/DashboarCliente/Header/Header";
import RegisterOrder from "../../components/DashboarCliente/InvoiceRegister";
import ContainerLocalizacao from "../../components/DashboarCliente/Localização/localizacao";
import Navbar from "../../components/DashboarCliente/Navbar/Navbar";
import { ContainerDashboard } from "./dashboardCliente.styles";

const DashboardCliente = () => {
  return (
    <ContainerDashboard id="dashboardCliente">
      <main className="app">
        <Header />
        <ContainerLocalizacao />
        <Navbar />
        <Produtos />
        <ProdutosRecomendados />
      </main>
      <Orders />
      <BoxPesquisa id="seach" />
    </ContainerDashboard>
  );
};

export default DashboardCliente;
