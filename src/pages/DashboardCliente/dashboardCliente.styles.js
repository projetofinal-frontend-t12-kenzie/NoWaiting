import styled from "styled-components";

export const ContainerDashboard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 150vh;
  align-items: center;

  background-color: var(--grey-2);

  @media screen and (min-width: 1000px) {
    width: 75%;
    height: 115vh;
  }

  @media screen and (min-width: 1400px) {
    width: 70%;
    height: 110vh;
  }
  .bodyList {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 750px) {
      width: 95%;
    }
  }
`;
