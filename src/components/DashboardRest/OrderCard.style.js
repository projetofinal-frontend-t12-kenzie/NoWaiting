import styled from "styled-components";

export const OrderCard = styled.div`
  display: flex;
  width: 100%;
  height: 65px;
  justify-content: space-around;
  align-items: center;
  border: 2px solid var(--grey-1);
  border-radius: 10px;
  font-size: 14px;

  h2 {
    font-weight: bold;
    font-family: "Roboto";
    color: var(--grey-3);
  }

  h3 {
    font-weight: bold;
    font-family: "Roboto";
    color: var(--color-primary);
  }
  span {
    font-family: "Roboto";
    color: var(--grey-3);
  }

  img {
    height: 45px;
    width: 45px;
    border-radius: 100%;
  }

  @media screen and (min-width: 769px) {
    width: 80%;
    max-height: 500px;
    margin: 20px 100px 20px 0px;
  }
`;
