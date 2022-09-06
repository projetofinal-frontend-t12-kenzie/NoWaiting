import React, { useContext, useEffect, useState } from "react";
import Logo from "./Logo.svg";
import hamburguer from "./hamburguer.png";
import usuario from "./usuario.png";
import { AiOutlineCheck } from "react-icons/ai";
import { DashboardRestContainer } from "../../components/DashboardRest/DashboardRestContainer.style";
import { HeaderContainer } from "../../components/DashboardRest/HeaderContainer.style";
import { RestProfile } from "../../components/DashboardRest/RestProfile.style";
import { NonConcludedOrders } from "../../components/DashboardRest/NonConcludedOrders.style";
import { OrderCard } from "../../components/DashboardRest/OrderCard.style";
import { ConcludedOrders } from "../../components/DashboardRest/ConcludedOrders.style";
import { OrdersContainer } from "../../components/DashboardRest/OrdersContainer.style";
import { ConcludedOrderCard } from "../../components/DashboardRest/ConcludedOrderCard.style";
import { TotalContainer } from "../../components/DashboardRest/Total.style";
import { EmptyOrderCard } from "../../components/DashboardRest/EmptyOrderCard.style";
import { EmptyConcludedOrders } from "../../components/DashboardRest/EmptyConcludedOrders.style";
import { DivAside } from "../../components/DashboardRest/DivAside.style";
import { HeaderRest } from "../../components/DashboardRest/HeaderRest.style";
import api from "../../services/api";
import BuildOrderCard from "../../components/OrderCard/OrderCard";
import { Contexts } from "../../contexts/provider";

function DashboardRest() {
  const { orders, concludedOrders } =
    useContext(Contexts);

  return (
    <DashboardRestContainer>
      <HeaderContainer>
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
                Sair
              </button>
            </div>
          </RestProfile>
        </HeaderRest>
      </HeaderContainer>
      <OrdersContainer>
        <NonConcludedOrders>
          <h3>Pedidos em espera</h3>
          {orders.length > 0 ? (
            orders.map((order) => (
              <BuildOrderCard key={order.id} order={order} />
            ))
          ) : (
            <EmptyOrderCard>
              <p>Ainda não temos pedidos :(</p>
            </EmptyOrderCard>
          )}
        </NonConcludedOrders>
        <DivAside>
          <h3>Pedidos concluídos</h3>
          <ConcludedOrders>
            <ConcludedOrderCard>
              {concludedOrders.length > 0 ? (
                concludedOrders.map((order) => (
                  <BuildOrderCard key={order.id} order={order} />
                ))
              ) : (
                <EmptyConcludedOrders>
                  <p>Ainda não temos pedidos concluidos :(</p>
                </EmptyConcludedOrders>
              )}
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
        </DivAside>
      </OrdersContainer>
    </DashboardRestContainer>
  );
}

export default DashboardRest;
