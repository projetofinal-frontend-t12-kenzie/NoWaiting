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

  .atalho {
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
  }
`;
