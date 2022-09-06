import styled from "styled-components";

export const NonConcludedOrders = styled.div`
  display: flex;
  flex-direction: column;
  width: 110%;
  max-height: 280px;
  align-items: flex-start;
  padding: 0 20px;
  /* margin-left: 5%; */

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 769px){
    width: 80%;
    max-height: 500px;
    margin: 20px 100px;
  }
`;
