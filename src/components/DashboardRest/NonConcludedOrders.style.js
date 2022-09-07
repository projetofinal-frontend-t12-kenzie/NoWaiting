import styled from "styled-components";

export const NonConcludedOrders = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-height: 480px;
  align-items: flex-start;
  padding: 0px 20px 0px 20px;
  /* margin-left: 5%; */

  @media screen and (min-width: 769px) {
    width: 80%;
    max-height: 500px;
    margin: 20px;
  }
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
