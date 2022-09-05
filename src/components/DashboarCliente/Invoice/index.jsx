import { useState } from "react";
import { useForm } from "react-hook-form";

import { SpaceBetween } from "./ClientOrders/ClientOrders.style";
import { InvoiceContainer } from "./style.js";

const Invoice = () => {
  return (
    <InvoiceContainer id="orders">
      <div className="invoice">
        <div className="icon-done"></div>
        <span className="description-done">Pronto!</span>
        <span className="description-order-done">PEDIDO CONFIRMADO!</span>
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
    </InvoiceContainer>
  );
};

export default Invoice;
