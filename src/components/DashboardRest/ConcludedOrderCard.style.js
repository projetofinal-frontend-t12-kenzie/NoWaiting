import styled from "styled-components";

export const ConcludedOrderCard = styled.div`
  display: flex;
  width: 90%;
  height: 65px;
  justify-content: space-between;
  align-items: center;
  border: 2px solid var(--grey-1);
  border-radius: 10px;
  font-size: 14px;

  .divInfo {
    display: flex;
    flex-direction: column;
  }

  img {
    margin-left: 45px;
  }
  svg {
    margin-right: 45px;
    color: var(--success);
  }

  strong{
    font-family: "Roboto";
    font-size: 14px;
    font-weight: bold;
    color: var(--grey-3);
  }
  
  span{
    font-family: "Roboto";
    font-size: 14px;
    font-weight: medium;
    color: var(--grey-2);
    margin: 4px 0;
  }

  h2 {
    font-weight: bold;
    font-family: "Roboto";
    color: var(--color-primary);
  }
`;
