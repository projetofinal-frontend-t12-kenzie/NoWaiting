import styled from "styled-components";

export const NonConcludedOrders = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 280px;
  align-items: flex-start;
  margin-left: 5%;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
