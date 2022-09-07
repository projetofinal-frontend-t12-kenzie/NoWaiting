import { RiShoppingCartLine } from "react-icons/ri";
import { SpaceBetween } from "../ClientOrders/ClientOrders.style";
import { ContainerRecomendados } from "./BoxRecomendado.style";

const ProdutosRecomendados = () => {
  return (
    <ContainerRecomendados>
      <h2>Recomendado</h2>
      <div className="product">
        <div className="description">
          <h3 className="title">Panquece</h3>
          <p className="description-product">
            Os Hamburgues sempre são uma boa opção para o lanche
          </p>
          <span className="categoria">Sobremesas</span>
          <SpaceBetween>
            <span className="price">R$ 10.00</span>
            <button className="cart">
              <RiShoppingCartLine size={20} />
            </button>
          </SpaceBetween>
        </div>
      </div>
    </ContainerRecomendados>
  );
};

export default ProdutosRecomendados;
