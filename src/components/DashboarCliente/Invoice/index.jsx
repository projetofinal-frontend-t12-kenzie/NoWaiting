import { useContext, useEffect } from "react";
import { Contexts } from "../../../contexts/provider";
import { SpaceBetween } from "../ClientOrders/ClientOrders.style";

import { GiCheckMark } from "react-icons/gi";
import { ConfirmeInvoice } from "./style.js";

const Invoice = ({ setOrderList, setInvoice }) => {
  const { setRequest, currentAmout } = useContext(Contexts);

  useEffect(() => {
    handleTimeOut();
  });

  const handleTimeOut = () => {
    // setTimeout(() => {
    //   setInvoice(false);
    //   setRequest([]);
    //   setOrderList(true);
    // }, 10000);
  };

  return (
    <ConfirmeInvoice id="invoice-done">
      <div className="invoice">
        <div className="receipt">
          <div className="icon-done one">
            <GiCheckMark size={50} />
          </div>
          <div className="icon-done two"></div>
          <div className="container">
            <span className="description-done">Pronto!</span>
            <span className="description-order-done">PEDIDO CONFIRMADO</span>
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
          <div className="left"></div>
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
