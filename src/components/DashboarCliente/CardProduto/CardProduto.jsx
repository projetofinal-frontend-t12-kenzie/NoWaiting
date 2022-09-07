import { CardProdutos, ContainerProdutos } from "./CardProduto.style";
import { BsCart2 } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { Contexts } from "../../../contexts/provider";

const Produtos = () => {
  const { menu, filtered, orders, setOrder } = useContext(Contexts);

  const addedproduct = (produto) => {
    let confirmAmount = false;

    if (orders.length > 0) {
      orders?.forEach((item) => {
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
      setOrder([...orders, objOrder]);
    }
  };

  return (
    <ContainerProdutos>
      {filtered === ""
        ? menu.map((produto) => (
            <CardProdutos key={produto.id}>
              <img src={produto.img} alt={produto.name} />
              <div>
                <h3>{produto.name}</h3>
                <p>{produto.description}</p>
                <span className="categoria">{produto.type}</span>
                <span>R$ {produto.price}.00</span>
                <button onClick={() => addedproduct(produto)}>
                  <BsCart2 size={15} />
                </button>
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
                    <BsCart2 size={15} />
                  </button>
                </div>
              </CardProdutos>
            ))}
    </ContainerProdutos>
  );
};

export default Produtos;
