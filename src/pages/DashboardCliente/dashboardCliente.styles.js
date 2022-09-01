import styled from "styled-components";

export const ContainerDashboard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;

  background-color: var(--grey-2);

  .topo {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 750px) {
      width: 95%;
    }

    @media screen and (min-width: 1000px) {
      margin-left: 15px;
      width: 70%;
    }
  }
`;
