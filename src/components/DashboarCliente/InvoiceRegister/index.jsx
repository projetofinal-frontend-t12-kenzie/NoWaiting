import { useContext, useState } from "react";
import { Contexts } from "../../../contexts/provider.jsx";
import { SpaceBetween } from "../ClientOrders/ClientOrders.style.js";

import { InvoiceContainer } from "./style.js";

const RegisterOrder = ({
  setRegisterOrder,
  setOrderList,
  handlePrintInvoice,
  handlePrintInvoiceMobile,
}) => {
  const [name, setName] = useState(null);
  const [table, setTable] = useState(null);

  const { currentAmout, request, sendRequest } = useContext(Contexts);

  const onChangeName = (data) => {
    setName(data);
  };

  const onChangeTable = (data) => {
    setTable(data);
  };

  const onSubmit = () => {
    const clientRegister = {
      name,
      table,
    };
    const objOrderComplete = {
      mesa: clientRegister.table,
      pedido: request,
    };
    if (
      objOrderComplete.mesa !== undefined &&
      objOrderComplete.pedido !== undefined
    ) {
      sendRequest(objOrderComplete);
      handlePrintInvoice();
    } else {
      alert("O nome e a mesa são necessários");
    }
  };

  const handleClose = () => {
    setRegisterOrder(false);
    setTimeout(() => {
      setOrderList(true);
    }, 200);
  };

  return (
    <InvoiceContainer id="settingInvoice">
      <button className="close" onClick={() => handleClose()}>
        X
      </button>
      <div className="invoice">
        <form className="register">
          <SpaceBetween>
            <div className="name">
              <span className="icon-x">X</span>
              <div className="container">
                <input
                  className="setName"
                  type="text"
                  onChange={(e) => onChangeName(e.target.value)}
                />
                <span className="icon-name">NOME</span>
              </div>
            </div>
          </SpaceBetween>
          <SpaceBetween>
            <div className="table">
              <span className="icon-x">X</span>
              <div className="container">
                <input
                  className="setTable"
                  type="number"
                  onChange={(e) => onChangeTable(e.target.value)}
                />
                <span className="icon-table">MESA</span>
              </div>
            </div>
          </SpaceBetween>
        </form>
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
        type="submit"
        onClick={() => {
          onSubmit();
        }}
      >
        Imprimir
      </button>
    </InvoiceContainer>
  );
};

export default RegisterOrder;
