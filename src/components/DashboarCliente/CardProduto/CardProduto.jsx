import { CardProdutos, ContainerProdutos } from "./CardProduto.style";
import { RiShoppingCartLine } from "react-icons/ri";
import { useContext, useState } from "react";
import { Contexts } from "../../../contexts/provider";
import { SpaceBetween } from "../ClientOrders/ClientOrders.style";

const Produtos = () => {
  const { menu, filtered, request, setRequest, calculatingTotalValue } =
    useContext(Contexts);

  const addedproduct = (produto) => {
    let confirmAmount = false;

    if (request.length > 0) {
      request?.forEach((item) => {
        if (produto.id === item.id) {
          return (confirmAmount = true);
        }
      });
    }
    if (confirmAmount) {
      alert("Já existe nos Pedidos");
    } else {
      const objOrder = {
        amount: 1,
        ...produto,
      };
      setRequest([...request, objOrder]);
    }
  };

  return (
    <ContainerProdutos>
      {filtered === ""
        ? menu.map((produto) => (
            <CardProdutos key={produto.id}>
              <img src={produto.img} alt={produto.name} />
              <div className="description">
                <h3 className="title">{produto.name}</h3>
                <p className="description-product">{produto.description}</p>
                <span className="categoria">{produto.type}</span>
                <SpaceBetween>
                  <span className="price">R$ {produto.price}.00</span>
                  <button
                    className="cart"
                    onClick={() => addedproduct(produto)}
                  >
                    <RiShoppingCartLine size={20} />
                  </button>
                </SpaceBetween>
              </div>
            </CardProdutos>
          ))
        : menu
            .filter(
              (item) =>
                filtered.toLowerCase() === item.name.toLowerCase() ||
                item.name.toLowerCase().includes(filtered.toLowerCase()) ||
                filtered.toLowerCase() === item.type.toLowerCase() ||
                item.type.toLowerCase().includes(filtered.toLowerCase())
            )
            .map((produto) => (
              <CardProdutos key={produto.id}>
                <img src={produto.img} alt={produto.name} />
                <div>
                  <h3>{produto.name}</h3>
                  <p>{produto.description}</p>
                  <span className="categoria">{produto.type}</span>
                  <span>R$ {produto.price}.00</span>
                  <button>
                    <RiShoppingCartLine size={15} />
                  </button>
                </div>
              </CardProdutos>
            ))}
    </ContainerProdutos>
  );
};

export default Produtos;
