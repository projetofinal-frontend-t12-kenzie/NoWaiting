import { AiOutlineCheck } from "react-icons/ai";
import { ConcludedOrderCard } from "../DashboardRest/ConcludedOrderCard.style";

function BuildConcludedOrderCard({ order }) {
  /* const {handleOrder} = useContext(Contexts) */

  return (
    <>
      <ConcludedOrderCard>
        <img src={order.img} alt={order.name} />
        <div className="divInfo">
          <h2>{order.name}</h2>
          <span>Mesa 10</span>
          <h3>R$ {order.price.toFixed(2)}</h3>
        </div>
        <AiOutlineCheck size={24} />
      </ConcludedOrderCard>
    </>
  );
}

export default BuildConcludedOrderCard;
