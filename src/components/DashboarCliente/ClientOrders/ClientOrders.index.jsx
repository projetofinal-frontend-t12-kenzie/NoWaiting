import { useContext, useEffect, useState } from "react";
import { Contexts } from "../../../contexts/provider";
import Invoice from "../Invoice";
import RegisterOrder from "../InvoiceRegister";

import { OrderContainer, SpaceBetween } from "./ClientOrders.style";

// const order = {
//   order:
//     {
//       amount: 1,
//       ...produto,
//     },

//   clientRegister: {
//     name,
//     table,
//   };
// }

const Orders = () => {
  const { orders, setOrder, currentAmout, calculatingTotalValue } =
    useContext(Contexts);
  const [tempList, setTempList] = useState([]);

  const [registerOrder, setRegisterOrder] = useState(false);
  const [ordering, setOrderList] = useState(true);
  const [invoice, setInvoice] = useState(false);

  const handleOrder = (item, action) => {
    if (action === "add") {
      orders?.forEach((product) => {
        if (product.id === item.id) {
          product.amount += 1;
          setTempList([...tempList, product]);
        }
      });
      calculatingTotalValue();
    } else {
      orders?.forEach((product) => {
        if (product.id === item.id) {
          product.amount -= 1;
          if (product.amount === 0) {
            product.amount -= 1;
            const newList = orders?.filter((product) => product.id !== item.id);
            setOrder(newList);
          } else {
            setTempList([...tempList, product]);
          }
          calculatingTotalValue();
        }
      });
    }
  };

  const handleConfirmOrder = () => {
    console.log("pedido confirmado");
    setOrderList(false);
    setTimeout(() => {
      setRegisterOrder(true);
    }, 200);
  };

  const handlePrintInvoice = () => {
    console.log("invoice");
    setRegisterOrder(false);
    setTimeout(() => {
      setInvoice(true);
    }, 200);
  };

  return (
    <>
      {invoice && (
        <Invoice
          setRegisterOrder={setRegisterOrder}
          setOrderList={setOrderList}
          setInvoice={setInvoice}
        />
      )}
      {registerOrder && (
        <RegisterOrder
          setRegisterOrder={setRegisterOrder}
          setOrderList={setOrderList}
          setInvoice={setInvoice}
          handlePrintInvoice={handlePrintInvoice}
        />
      )}
      {ordering && (
        <OrderContainer id="orders">
          <div className="block one">
            <header className="header">
              <h2 className="title header">Pedidos</h2>
            </header>
            <ul className="list orders">
              {orders.map((item) => {
                return (
                  <li className="order" id={item.id} key={item.id}>
                    <div className="img">
                      <img src={item.img} alt={item.name} />
                    </div>

                    <div className="description">
                      <h3 className="description-title">{item.name} </h3>
                      <span className="price">{`R$ ${item.price}.00`}</span>
                    </div>
                    <div className="assests">
                      <button
                        className="button add"
                        id="add"
                        onClick={(e) => handleOrder(item, e.target.id)}
                      >
                        +
                      </button>
                      <span className="amount">{item.amount}</span>
                      <button
                        className="button less"
                        id="less"
                        onClick={(e) => handleOrder(item, e.target.id)}
                      >
                        -
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="block two">
            <div className="invoice">
              <div className="invoice-amount">
                <SpaceBetween>
                  <span className="subdescription">Subtotal</span>
                  <span className="value">{`R$ ${currentAmout.subTotal}.00`}</span>
                </SpaceBetween>
                <SpaceBetween>
                  <span className="subdescription">Descontos</span>
                  <span className="value">{`- R$ ${currentAmout.descount}.00`}</span>
                </SpaceBetween>
                <SpaceBetween>
                  <span className="subdescription">Total de imposto</span>
                  <span className="value">{`R$ ${currentAmout.tax?.toFixed(
                    2
                  )}`}</span>
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
                  <span className="price">{`R$ ${currentAmout.total?.toFixed(
                    2
                  )}`}</span>
                </SpaceBetween>
              </div>
            </div>
            <div className="finish">
              <button className="send" onClick={() => handleConfirmOrder()}>
                Confirmar pedido
              </button>
            </div>
          </div>
        </OrderContainer>
      )}
    </>
  );
};

export default Orders;
