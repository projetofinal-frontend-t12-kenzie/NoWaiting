import styled from "styled-components";

export const Pesquisa = styled.div`
  height: 70px;
  width: 100%;
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 0;

  position: fixed;
  top: 31.3rem;

  background-color: #fa7b12;

  /* @media screen and (min-width: 750px) {
    top: 43.1rem;
  } */

  button {
    background-color: transparent;
    border: none;
    color: white;
    width: 45px;
    height: 45px;
    size: 3rem;
    padding: 0;
    cursor: pointer;
  }

  .inputPesquisa {
    width: 75%;
    height: 40px;
    display: flex;
    align-items: center;

    background-color: #ffa75e;
    opacity: 0.8;

    border-radius: 12px;
    margin-left: 10px;

    input {
      background-color: transparent;
      border: none;
    }
  }
`;
