import { useContext } from "react";
import { Contexts } from "../../contexts/provider";
import api from "../../services/api";
import { OrderCard } from "../DashboardRest/OrderCard.style";

function BuildOrderCard({ order }) {
  /* const {handleOrder} = useContext(Contexts) */
  console.log(order);
  return (
    <>
      <OrderCard>
        <img src={order.img} alt={order.name} />
        <h2>{order.name}</h2>
        <span>Mesa 10</span>
        <h3>R$ {order.price.toFixed(2)}</h3>
        <input type="checkbox" />
      </OrderCard>
    </>
  );
}

export default BuildOrderCard;
