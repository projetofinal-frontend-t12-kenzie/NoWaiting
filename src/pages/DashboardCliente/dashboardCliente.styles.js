import styled from "styled-components";

export const ContainerDashboard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100vw;
  height: 100%;

  background-color: var(--grey-2);
  margin: 0;

  @media screen and (min-width: 1000px) {
    width: 100vw;
    height: 116vh;
  }

  @media screen and (min-width: 1300px) {
    width: 100vw;
    height: 105vh;
  }
  .app {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }

    @media screen and (min-width: 1000px) {
      width: 80%;
    }
  }
`;
