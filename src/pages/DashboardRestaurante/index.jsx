import React from "react";
import Logo from "./Logo.svg";
import hamburguer from "./hamburguer.png";
import usuario from "./usuario.png";
import { AiOutlineCheck } from "react-icons/ai";
import { DashboardRestContainer } from "../../components/DashboardRest/DashboardRestContainer.style";
import { HeaderRest } from "../../components/DashboardRest/HeaderRest.style";
import { RestProfile } from "../../components/DashboardRest/RestProfile.style";
import { NonConcludedOrders } from "../../components/DashboardRest/NonConcludedOrders.style";
import { OrderCard } from "../../components/DashboardRest/OrderCard.style";
import { ConcludedOrders } from "../../components/DashboardRest/ConcludedOrders.style";
import { OrdersContainer } from "../../components/DashboardRest/OrdersContainer.style";
import { ConcludedOrderCard } from "../../components/DashboardRest/ConcludedOrderCard.style";
import { TotalContainer } from "../../components/DashboardRest/Total.style";

function DashboardRest() {
  return (
    <DashboardRestContainer>
      <HeaderRest>
        <header>
          <img src={Logo} alt="NoWaiting"></img>
        </header>
        <RestProfile>
          <img src={usuario} alt="img restaurante" />
          <div>
            <h4>Kenzinho</h4>
          </div>
          <div>
            <button className="btnLogOut" type="button">
              x
            </button>
          </div>
        </RestProfile>
      </HeaderRest>
      <OrdersContainer>
        <h3>Pedidos em espera</h3>
        <NonConcludedOrders>
          <OrderCard>
            <span>Data, Hora</span>
            <img src={hamburguer} alt="hamburguer" />
            <h2>Hamburger</h2>
            <span>Mesa 10</span>
            <h2>R$ x,xx</h2>
            <input type="checkbox" />
          </OrderCard>
          <OrderCard>
            <span>Data, Hora</span>
            <img src={hamburguer} alt="hamburguer" />
            <h2>Hamburger</h2>
            <span>Mesa 10</span>
            <h2>R$ x,xx</h2>
            <input type="checkbox" />
          </OrderCard>
          <OrderCard>
            <span>Data, Hora</span>
            <img src={hamburguer} alt="hamburguer" />
            <h2>Hamburger</h2>
            <span>Mesa 10</span>
            <h2>R$ x,xx</h2>
            <input type="checkbox" />
          </OrderCard>
          <OrderCard>
            <span>Data, Hora</span>
            <img src={hamburguer} alt="hamburguer" />
            <h2>Hamburger</h2>
            <span>Mesa 10</span>
            <h2>R$ x,xx</h2>
            <input type="checkbox" />
          </OrderCard>
          <OrderCard>
            <span>Data, Hora</span>
            <img src={hamburguer} alt="hamburguer" />
            <h2>Hamburger</h2>
            <span>Mesa 10</span>
            <h2>R$ x,xx</h2>
            <input type="checkbox" />
          </OrderCard>
          <OrderCard>
            <span>Data, Hora</span>
            <img src={hamburguer} alt="hamburguer" />
            <h2>Hamburger</h2>
            <span>Mesa 10</span>
            <h2>R$ x,xx</h2>
            <input type="checkbox" />
          </OrderCard>
          <OrderCard>
            <span>Data, Hora</span>
            <img src={hamburguer} alt="hamburguer" />
            <h2>Hamburger</h2>
            <span>Mesa 10</span>
            <h2>R$ x,xx</h2>
            <input type="checkbox" />
          </OrderCard>
          <OrderCard>
            <span>Data, Hora</span>
            <img src={hamburguer} alt="hamburguer" />
            <h2>Hamburger</h2>
            <span>Mesa 10</span>
            <h2>R$ x,xx</h2>
            <input type="checkbox" />
          </OrderCard>
        </NonConcludedOrders>
        <h3>Pedidos Concluídos</h3>
        <ConcludedOrders>
          <ConcludedOrderCard>
            <img src={hamburguer} alt="img comida" />
            <div className="divInfo">
              <strong>Hamburguer</strong>
              <span>Mesa 10</span>
              <h2>R$ x,xx</h2>
            </div>
            <AiOutlineCheck size={24} />
          </ConcludedOrderCard>
          <ConcludedOrderCard>
            <img src={hamburguer} alt="img comida" />
            <div className="divInfo">
              <strong>Hamburguer</strong>
              <span>Mesa 10</span>
              <h2>R$ x,xx</h2>
            </div>
            <AiOutlineCheck size={24} />
          </ConcludedOrderCard>
          <ConcludedOrderCard>
            <img src={hamburguer} alt="img comida" />
            <div className="divInfo">
              <strong>Hamburguer</strong>
              <span>Mesa 10</span>
              <h2>R$ x,xx</h2>
            </div>
            <AiOutlineCheck size={24} />
          </ConcludedOrderCard>
          <ConcludedOrderCard>
            <img src={hamburguer} alt="img comida" />
            <div className="divInfo">
              <strong>Hamburguer</strong>
              <span>Mesa 10</span>
              <h2>R$ x,xx</h2>
            </div>
            <AiOutlineCheck size={24} />
          </ConcludedOrderCard>
          <ConcludedOrderCard>
            <img src={hamburguer} alt="img comida" />
            <div className="divInfo">
              <strong>Hamburguer</strong>
              <span>Mesa 10</span>
              <h2>R$ x,xx</h2>
            </div>
            <AiOutlineCheck size={24} />
          </ConcludedOrderCard>
          <ConcludedOrderCard>
            <img src={hamburguer} alt="img comida" />
            <div className="divInfo">
              <strong>Hamburguer</strong>
              <span>Mesa 10</span>
              <h2>R$ x,xx</h2>
            </div>
            <AiOutlineCheck size={24} />
          </ConcludedOrderCard>
          <ConcludedOrderCard>
            <img src={hamburguer} alt="img comida" />
            <div className="divInfo">
              <strong>Hamburguer</strong>
              <span>Mesa 10</span>
              <h2>R$ x,xx</h2>
            </div>
            <AiOutlineCheck size={24} />
          </ConcludedOrderCard>
          <ConcludedOrderCard>
            <img src={hamburguer} alt="img comida" />
            <div className="divInfo">
              <strong>Hamburguer</strong>
              <span>Mesa 10</span>
              <h2>R$ x,xx</h2>
            </div>
            <AiOutlineCheck size={24} />
          </ConcludedOrderCard>
          <ConcludedOrderCard>
            <img src={hamburguer} alt="img comida" />
            <div className="divInfo">
              <strong>Hamburguer</strong>
              <span>Mesa 10</span>
              <h2>R$ x,xx</h2>
            </div>
            <AiOutlineCheck size={24} />
          </ConcludedOrderCard>
          <ConcludedOrderCard>
            <img src={hamburguer} alt="img comida" />
            <div className="divInfo">
              <strong>Hamburguer</strong>
              <span>Mesa 10</span>
              <h2>R$ x,xx</h2>
            </div>
            <AiOutlineCheck size={24} />
          </ConcludedOrderCard>
        </ConcludedOrders>
        <TotalContainer>
          <div>
            <span>Total acumulado</span>
            <strong>R$ 416,30</strong>
          </div>
          <div>
            <span>Total de pedidos</span>
            <strong>8</strong>
          </div>
        </TotalContainer>
      </OrdersContainer>
    </DashboardRestContainer>
  );
}

export default DashboardRest;
