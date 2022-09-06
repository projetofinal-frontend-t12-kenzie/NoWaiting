import { useState } from "react";
import { useForm } from "react-hook-form";
import { SpaceBetween } from "../ClientOrders/ClientOrders.style.js";

import { InvoiceContainer } from "./style.js";

const RegisterOrder = () => {
  const [requests, setRequest] = useState([]);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleClose = () => {
    console.log("closed");
  };

  return (
    <InvoiceContainer classNam="settingInvoice">
      <button className="close" onClick={() => handleClose()}>
        X
      </button>
      <div className="invoice">
        <form className="register" onSubmit={handleSubmit(onSubmit)}>
          <SpaceBetween>
            <div className="name">
              <span className="icon-x">X</span>
              <div className="container">
                <input className="setName" type="text" {...register} />
                <span className="icon-name">NOME</span>
              </div>
            </div>
          </SpaceBetween>
          <SpaceBetween>
            <div className="table">
              <span className="icon-x">X</span>
              <div className="container">
                <input className="setTable" type="text" {...register} />
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
            <span className="price">R$ 27.90</span>
          </SpaceBetween>
        </div>
      </div>
      <div className="finish">
        <button className="send" type="submit">
          Imprimir
        </button>
      </div>
    </InvoiceContainer>
  );
};

export default RegisterOrder;
