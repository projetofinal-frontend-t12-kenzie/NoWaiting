import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Contexts } from "../../../contexts/provider.jsx";
import { SpaceBetween } from "../ClientOrders/ClientOrders.style.js";

import { InvoiceContainer } from "./style.js";

const RegisterOrder = ({
  setRegisterOrder,
  setOrderList,
  handlePrintInvoice,
}) => {
  const [name, setName] = useState(null);
  const [table, setTable] = useState(null);

  const { currentAmout, orders } = useContext(Contexts);

  console.log(orders);

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

    console.log(clientRegister);
    console.log("pedido enviado com sucesso");
  };

  const handleClose = () => {
    console.log("closed");
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
        <button
          className="send"
          type="submit"
          onClick={() => {
            onSubmit();
            handlePrintInvoice();
          }}
        >
          Imprimir
        </button>
      </div>
    </InvoiceContainer>
  );
};

export default RegisterOrder;
