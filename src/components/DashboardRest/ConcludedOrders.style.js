import styled from "styled-components";

export const ConcludedOrders = styled.div`
  display: flex;
  flex-direction: column;
  width: 110%;
  max-height: 260px;
  align-items: flex-start;
  padding: 0 20px;
  /* margin-left: 5%;
  margin-right: 5%; */

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }


  @media screen and (min-width: 769px){
    width: 100%;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
  }
`;
