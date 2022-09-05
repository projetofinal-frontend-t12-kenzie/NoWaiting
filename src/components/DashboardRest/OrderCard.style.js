import styled from "styled-components";

export const OrderCard = styled.div`
  display: flex;
  width: 90%;
  height: 65px;
  justify-content: space-around;
  align-items: center;
  border: 2px solid var(--grey-1);
  border-radius: 10px;
  font-size: 14px;

  /* &:hover {
    transform: scale(1.03);
  } */
  h2 {
    font-weight: bold;
    font-family: "Roboto";
  }
  span {
    font-family: "Roboto";
    color: var(--grey-3);
  }
`;
