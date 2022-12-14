import React, { useContext, useEffect, useState } from "react";
import Logo from "./Logo.svg";
import { DashboardRestContainer } from "../../components/DashboardRest/DashboardRestContainer.style";
import { HeaderContainer } from "../../components/DashboardRest/HeaderContainer.style";
import { RestProfile } from "../../components/DashboardRest/RestProfile.style";
import { NonConcludedOrders } from "../../components/DashboardRest/NonConcludedOrders.style";
import { OrdersContainer } from "../../components/DashboardRest/OrdersContainer.style";
import { TotalContainer } from "../../components/DashboardRest/Total.style";
import { EmptyOrderCard } from "../../components/DashboardRest/EmptyOrderCard.style";
import { DivAside } from "../../components/DashboardRest/DivAside.style";
import { HeaderRest } from "../../components/DashboardRest/HeaderRest.style";
import BuildOrderCard from "../../components/OrderCard/OrderCard";
import { Contexts } from "../../contexts/provider";
function DashboardRest() {
  const { orders, logOut, user, findOrders } = useContext(Contexts);

  useEffect(() => {
    findOrders();
  }, []);
  return (
    <DashboardRestContainer>
      <HeaderContainer>
        <HeaderRest>
          <header>
            <img src={Logo} alt="NoWaiting"></img>
          </header>
          <RestProfile>
            <img src={user?.img} alt="img restaurante" />
            <div>
              <h4>{user?.name}</h4>
            </div>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  logOut();
                }}
                className="btnLogOut"
                type="button"
              >
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
            orders.map((pedido) => (
              <BuildOrderCard key={pedido.id} order={pedido} />
            ))
          ) : (
            <EmptyOrderCard>
              <p>Ainda n??o temos pedidos :(</p>
            </EmptyOrderCard>
          )}
        </NonConcludedOrders>
        <DivAside>
          <h3>Pedidos conclu??dos</h3>
          <TotalContainer>
            <div>
              <span>Total acumulado</span>
              <p>
                <strong>
                  R$
                  {orders
                    .map((value) => value.price)
                    .reduce(
                      (previousValue, currentValue) =>
                        previousValue + currentValue,
                      0
                    )}
                </strong>
              </p>
              <span>Total de pedidos</span>
              <p>
                <strong>{orders.length}</strong>
              </p>
            </div>
          </TotalContainer>
        </DivAside>
      </OrdersContainer>
    </DashboardRestContainer>
  );
}

export default DashboardRest;
