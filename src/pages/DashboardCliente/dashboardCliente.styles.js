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
    height: 100%;
  }

  @media screen and (min-width: 1400px) {
    width: 100vw;
    height: 100%;
  }
  .bodyList {
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 750px) {
      width: 95%;
    }
  }
`;
