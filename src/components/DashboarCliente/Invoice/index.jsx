import { useState } from "react";
import { useForm } from "react-hook-form";
import { SpaceBetween } from "../ClientOrders/ClientOrders.style";

import { ConfirmeInvoice } from "./style.js";

const Invoice = () => {
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
            <span className="invoice-value">{`R$ ${27}.00`}</span>
          </SpaceBetween>
          <SpaceBetween>
            <span className="subdescription">Descontos</span>
            <span className="invoice-value">{`-R$ ${5}.00`}</span>
          </SpaceBetween>
          <SpaceBetween>
            <span className="subdescription">Total de imposto</span>
            <span className="invoice-value">{`R$ ${1}.00`}</span>
          </SpaceBetween>
        </div>
        <div className="invoice-cut">
          <div className="left"></div>
          <div className="line"></div>
          <div className="rigth"></div>
        </div>
        <div className="invoice-total">
          <span className="total">Total</span>
          <span className="price">R$ 27.90</span>
        </div>
      </div>
    </ConfirmeInvoice>
  );
};

export default Invoice;
