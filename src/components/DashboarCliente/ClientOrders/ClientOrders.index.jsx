import { useContext, useState } from "react";
import { Contexts } from "../../../contexts/provider";
import Invoice from "../Invoice";
import RegisterOrder from "../InvoiceRegister";

import { OrderContainer, SpaceBetween } from "./ClientOrders.style";

const Orders = () => {
  const {
    request,
    setRequest,
    currentAmout,
    calculatingTotalValue,
    invoice,
    setInvoice,
    ordering,
    setOrderList,
    registerOrder,
    setRegisterOrder,
  } = useContext(Contexts);
  const [tempList, setTempList] = useState([]);

  const handleOrder = (item, action) => {
    if (action === "add") {
      request?.forEach((product) => {
        if (product.id === item.id) {
          product.amount += 1;
          setTempList([...tempList, product]);
        }
      });
      calculatingTotalValue();
    } else {
      request?.forEach((product) => {
        if (product.id === item.id) {
          product.amount -= 1;
          if (product.amount === 0) {
            product.amount -= 1;
            const newList = request?.filter(
              (product) => product.id !== item.id
            );
            setRequest(newList);
          } else {
            setTempList([...tempList, product]);
          }
          calculatingTotalValue();
        }
      });
    }
  };

  const handleConfirmOrder = () => {
    if (request.length > 0) {
      setOrderList(false);
      setTimeout(() => {
        setRegisterOrder(true);
      }, 200);
    } else {
      alert("Necessário adicionar pedido");
    }
  };

  const handlePrintInvoice = () => {
    setRegisterOrder(false);
    setInvoice(true);
  };

  console.log(request);

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
              {request.length > 0 ? (
                request.map((item) => {
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
                })
              ) : (
                <>
                  <li className="ghost">
                    <div className="ghost img"></div>
                    <div className="ghost description">
                      <div className="ghost title"></div>
                      <div className="ghost config">
                        <div className="ghost price"></div>
                        <div className="ghost amount"></div>
                      </div>
                    </div>
                  </li>
                  <li className="ghost">
                    <div className="ghost img"></div>
                    <div className="ghost description">
                      <div className="ghost title"></div>
                      <div className="ghost config">
                        <div className="ghost price"></div>
                        <div className="ghost amount"></div>
                      </div>
                    </div>
                  </li>
                  <li className="ghost">
                    <div className="ghost img"></div>
                    <div className="ghost description">
                      <div className="ghost title"></div>
                      <div className="ghost config">
                        <div className="ghost price"></div>
                        <div className="ghost amount"></div>
                      </div>
                    </div>
                  </li>
                  <li className="ghost">
                    <div className="ghost img"></div>
                    <div className="ghost description">
                      <div className="ghost title"></div>
                      <div className="ghost config">
                        <div className="ghost price"></div>
                        <div className="ghost amount"></div>
                      </div>
                    </div>
                  </li>
                  <li className="ghost">
                    <div className="ghost img"></div>
                    <div className="ghost description">
                      <div className="ghost title"></div>
                      <div className="ghost config">
                        <div className="ghost price"></div>
                        <div className="ghost amount"></div>
                      </div>
                    </div>
                  </li>
                </>
              )}
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
                  <span className="value">{`- R$ ${currentAmout.descount?.toFixed(
                    0
                  )}.00`}</span>
                </SpaceBetween>
                <SpaceBetween>
                  <span className="subdescription">Total de imposto</span>
                  <span className="value">{`R$ ${currentAmout.tax?.toFixed(
                    2
                  )}`}</span>
                </SpaceBetween>
              </div>
              <div className="left"></div>
              <div className="rigth"></div>
              <div className="invoice-total">
                <SpaceBetween>
                  <span className="total">Total</span>
                  <span className="price">{`R$ ${currentAmout.total?.toFixed(
                    2
                  )}`}</span>
                </SpaceBetween>
              </div>
            </div>
            <button
              className="send-dashboard"
              onClick={() => handleConfirmOrder()}
            >
              Confirmar pedido
            </button>
          </div>
        </OrderContainer>
      )}
    </>
  );
};

export default Orders;
