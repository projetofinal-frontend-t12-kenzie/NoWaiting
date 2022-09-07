import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Contexts } from "../../../contexts/provider";
import { SpaceBetween } from "../ClientOrders/ClientOrders.style";

import { ConfirmeInvoice } from "./style.js";

const Invoice = ({ setOrderList, setInvoice }) => {
  const { setOrder, currentAmout } = useContext(Contexts);

  useEffect(() => {
    handleTimeOut();
  });

  const handleTimeOut = () => {
    setTimeout(() => {
      setInvoice(false);
      setOrder([]);
      setOrderList(true);
    }, 2000);
  };

  return (
    <ConfirmeInvoice className="invoice-done">
      <div className="invoice">
        <div className="icon-done one"></div>
        <div className="icon-done two"></div>
        <div className="container">
          <span className="description-done">Pronto!</span>
          <span className="description-order-done">PEDIDO CONFIRMADO!</span>
        </div>
        <div className="invoice-amount">
          <SpaceBetween>
            <span className="subdescription">Subtotal</span>
            <span className="invoice-value">{`R$ ${currentAmout.subTotal}.00`}</span>
          </SpaceBetween>
          <SpaceBetween>
            <span className="subdescription">Descontos</span>
            <span className="invoice-value">{`- R$ ${currentAmout.descount}.00`}</span>
          </SpaceBetween>
          <SpaceBetween>
            <span className="subdescription">Total de imposto</span>
            <span className="invoice-value">{`R$ ${currentAmout.tax?.toFixed(
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
          <span className="total">Total</span>
          <span className="price">{`R$ ${currentAmout.total?.toFixed(
            2
          )}`}</span>
        </div>
      </div>
    </ConfirmeInvoice>
  );
};

export default Invoice;
