import styled from "styled-components";

export const ContainerNavbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  .buttons {
    width: 90%;
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    white-space: nowrap;
    padding: 10px 0px;
    gap: 10px;
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    @media screen and (min-width: 750px) {
      /* justify-content: space-evenly; */
    }

    @media screen and (min-width: 1000px) {
      overflow: hidden;
    }

    @media screen and (min-width: 1300px) {
      width: 75%;
      justify-content: space-between;
    }
  }

  button {
    padding: 8px 30px;
    border-radius: 5px;
    border: none;
    background-color: #000;
    color: #777777;
    font-family: var(--font);
    font-weight: 700;

    line-height: 18px;
    cursor: pointer;

    &:hover {
      background-color: #fa7b12;
      color: #fff;
      transform: scale(1.02);
      transition: 0.5s;
    }

    &:focus {
      background-color: #fa7b12;
      transform: scale(1.02);
    }
  }
`;
