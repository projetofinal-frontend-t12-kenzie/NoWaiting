import styled from "styled-components";

export const ConcludedOrders = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 260px;
  align-items: flex-start;
  margin-left: 5%;
  margin-right: 5%;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
