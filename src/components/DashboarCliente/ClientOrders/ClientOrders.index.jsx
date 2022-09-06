import { useState } from "react";

import hamburguer from "../../../assests/Products/hamburguer.jpg";
import Invoice from "../Invoice";
import RegisterOrder from "../InvoiceRegister";
import { OrderContainer, SpaceBetween } from "./ClientOrders.style";

const Orders = () => {
  const [requests, setRequest] = useState([]);

  const handleConfirmOrder = () => {
    console.log("pedido confirmado");
  };

  return (
    <>
      <Invoice />
      {/* <RegisterOrder /> */}
      {/* <OrderContainer id="orders">
        <div className="block one">
          <header className="header">
            <h2 className="title header">Pedidos</h2>
          </header>
          <ul className="list orders">
            {
              requests?.map(request => {

            }) 
          } 
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
        <div className="block two">
          <div className="invoice">
            <div className="invoice-amount">
              <SpaceBetween>
                <span className="subdescription">Subtotal</span>
                <span className="value">{`R$ ${27}.00`}</span>
              </SpaceBetween>
              <SpaceBetween>
                <span className="subdescription">Descontos</span>
                <span className="value">{`-R$ ${5}.00`}</span>
              </SpaceBetween>
              <SpaceBetween>
                <span className="subdescription">Total de imposto</span>
                <span className="value">{`R$ ${1}.00`}</span>
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
            <button className="send" onClick={() => handleConfirmOrder()}>
              Confirmar pedido
            </button>
          </div>
        </div>
      </OrderContainer> */}
    </>
  );
};

export default Orders;
