import styled from "styled-components";

export const ContainerNavbar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  gap: 15px;

  .buttons {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    white-space: nowrap;
    padding: 10px 15px;
    gap: 15px;
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    @media screen and (min-width: 750px) {
      justify-content: space-evenly;
    }

    @media screen and (min-width: 1000px) {
      width: 100%;
      overflow: hidden;
    }

    @media screen and (min-width: 1300px) {
      width: 80%;
      justify-content: space-between;
    }
  }

  button {
    padding: 8px 30px;
    border-radius: 20px;
    border: none;
    background-color: #828282;
    color: white;
    font-family: var(--font);
    cursor: pointer;

    &:hover {
      background-color: #fa7b12;
      transform: scale(1.2);
      transition: 1s;
    }

    &:focus {
      background-color: #fa7b12;
      transform: scale(1.2);
    }
  }
`;
