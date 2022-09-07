import styled from "styled-components";

export const HeaderConteiner = styled.section`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  margin-top: 2px;

  @media screen and (min-width: 750px) {
    width: 95%;
  }

  @media screen and (min-width: 1000px) {
    margin-top: 10px;
  }

  @media screen and (min-width: 1400px) {
    width: 77%;
    margin-top: 10px;
  }

  h1 {
    font-family: var(--font);
    font-weight: 600;
    font-size: 1.75rem;
  }

  img {
    width: 220px;
    height: 50px;
  }

  .notification {
    text-align: center;
    color: white;
    font-family: var(--font);
    font-size: 10px;
    font-weight: 700;

    display: flex;
    justify-content: center;
    position: bsolute;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: black;

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
    cursor: pointer;

    @media screen and (min-width: 1000px) {
      display: none;
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

    ::placeholder {
      color: #ffff;
      font-family: var(--font);
    }
  }
`;
