import styled from "styled-components";

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: flex-start;
  margin: 10px 0;

  h3 {
    /* margin-left: 5%; */
    display: flex;
    margin-top: 15px;
    font-size: 20px;
    font-family: "Roboto";
    font-weight: bolder;
    margin-bottom: 10px;
  }

  
  @media screen and (min-width: 769px){
    display: flex;
    flex-direction: row;
  }
`;
