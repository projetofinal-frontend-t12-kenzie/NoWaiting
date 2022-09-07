import styled from "styled-components";

export const Pesquisa = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 70px;
  width: 100%;

  position: fixed;
  bottom: 0;

  background-color: #000;

  @media screen and (min-width: 1000px) {
    display: none;
  }

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

  .nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    .inputSearch {
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
        height: 100%;
        width: 80%;
        outline: 0;

        ::placeholder {
          color: #ffff;
        }
      }
    }
  }
`;
