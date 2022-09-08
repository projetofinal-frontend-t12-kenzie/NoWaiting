import styled from "styled-components";

export const HeaderConteiner = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 70px;

  padding: 5px;

  margin-bottom: 10px;

  @media screen and (min-width: 750px) {
    margin: 2vh 0 3vh 0;
  }

  @media screen and (min-width: 1000px) {
    margin: 2vh 0 3vh 0;
    padding: 0 6vh 0 0;
  }

  @media screen and (min-width: 1200px) {
    margin: 2vh 0 3vh 0;
    padding: 0 17vh 0 14vh;
  }

  h1 {
    font-family: var(--font);
    font-weight: 600;
    font-size: 1.75rem;
  }

  img {
    width: 18vh;
    height: 6vh;
    padding-left: 3vh;
  }

  .shortcut {
    position: relative;
    padding-right: 3vh;

    .notification {
      display: flex;
      justify-content: center;

      font-family: var(--font);
      font-size: 10px;
      font-weight: 700;
      color: #fa7b12;

      position: absolute;

      right: 7px;

      height: 12px;
      width: 12px;

      border-radius: 50%;
      background-color: #fff;

      position: bsolute;
      margin-right: 3vh;
      /* top:;
    left:; */

      @media screen and (min-width: 1000px) {
        display: none;
      }
    }

    .cart {
      display: block;
      background-color: transparent;
      border: none;
      color: #fa7b12;
      width: 45px;
      height: 45px;
      size: 3rem;
      padding: 0;
      margin-right: 10px;
      cursor: pointer;

      @media screen and (min-width: 1000px) {
        display: none;
      }
    }
  }
`;

export const BarraPesquisa = styled.div`
  display: none;
  height: 40px;
  width: 260px;
  border-radius: 20px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0 10px;

  background-color: #fa7b12;

  @media screen and (min-width: 1000px) {
    display: flex;
  }

  .lupa {
    background-color: transparent;
    border: none;
    color: black;
    cursor: pointer;
    padding: 0;
  }

  input {
    background-color: transparent;
    border: none;
    width: 85%;
    outline: 0;

    ::placeholder {
      color: #ffff;
      font-family: var(--font);
    }
  }
`;
