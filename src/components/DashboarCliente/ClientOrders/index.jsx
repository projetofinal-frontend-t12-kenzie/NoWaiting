import { useState } from "react";

import hamburguer from "../../../assests/Products/hamburguer.jpg";
import { OrderContainer, SpaceBetween } from "./style";

const Orders = () => {
  const [requests, setRequest] = useState([]);

  return (
    <OrderContainer id="orders">
      <div className="block">
        <header className="header">
          <h2 className="title header">Pedidos</h2>
        </header>
        <ul className="list orders">
          {/* {
        requests?.map(request => {

        })
    } */}
          <li className="order" id="01203214391">
            <div className="img">
              <img src={hamburguer} alt="hamburguer" />
            </div>

            <div className="description">
              <h3 className="description-title">Hamburguer</h3>
              <span className="price">{`R$ ${10}.00`}</span>
            </div>
            <div className="assests">
              <button className="button add">+</button>
              <span className="amount">1</span>
              <button className="button less">-</button>
            </div>
          </li>
          <li className="order" id="01203214391">
            <div className="img">
              <img src={hamburguer} alt="hamburguer" />
            </div>

            <div className="description">
              <h3 className="description-title">Hamburguer</h3>
              <span className="price">{`R$ ${10}.00`}</span>
            </div>
            <div className="assests">
              <button className="button add">+</button>
              <span className="amount">1</span>
              <button className="button less">-</button>
            </div>
          </li>
          <li className="order" id="01203214391">
            <div className="img">
              <img src={hamburguer} alt="hamburguer" />
            </div>

            <div className="description">
              <h3 className="description-title">Hamburguer</h3>
              <span className="price">{`R$ ${10}.00`}</span>
            </div>
            <div className="assests">
              <button className="button add">+</button>
              <span className="amount">1</span>
              <button className="button less">-</button>
            </div>
          </li>
        </ul>
      </div>
      <div id="total">
        <div className="invoice">
          <div className="invoice-amount">
            <SpaceBetween>
              <span className="invoice-description">Subtotal</span>
              <span className="invoice-value">{`R$ ${27}.00`}</span>
            </SpaceBetween>
            <SpaceBetween>
              <span className="invoice-description">Descontos</span>
              <span className="invoice-value">{`-R$ ${5}.00`}</span>
            </SpaceBetween>
            <SpaceBetween>
              <span className="invoice-description">Total de imposto</span>
              <span className="invoice-value">{`R$ ${1}.00`}</span>
            </SpaceBetween>
          </div>
          <div className="invoice-cut">
            <div className="left"></div>
            <div className="line"></div>
            <div className="rigth"></div>
          </div>
          <div className="invoice-total">
            <SpaceBetween>
              <span className="total">Total</span>
              <span className="price">R$ 27.90</span>
            </SpaceBetween>
          </div>
        </div>
        <div className="finish">
          <button className="send">Confirmar pedido</button>
        </div>
      </div>
    </OrderContainer>
  );
};

export default Orders;
