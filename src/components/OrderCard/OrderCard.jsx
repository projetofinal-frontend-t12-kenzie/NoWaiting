import { useContext } from "react";
import { Contexts } from "../../contexts/provider";
import { OrderCard } from "../DashboardRest/OrderCard.style";

function BuildOrderCard({ order }) {
  const { orders } = useContext(Contexts);
  return (
    <>
      <OrderCard>
        <img src={order.img} alt={order.name} />
        <h2>{order.name}</h2>
        <span>Mesa {orders.mesa}</span>
        <h3>R$ {order.price.toFixed(2)}</h3>
        <input type="checkbox" /* onChange={() => check(order)}  */ />
      </OrderCard>
    </>
  );
}

export default BuildOrderCard;
