import styled from "styled-components";

export const HeaderConteiner = styled.section`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  @media screen and (min-width: 750px) {
    width: 95%;
  }

  h1 {
    font-family: var(--font);
    font-weight: 600;
    font-size: 1.75rem;
  }

  button {
    background-color: transparent;
    border: none;
    color: #fa7b12;
    width: 45px;
    height: 45px;
    size: 3rem;
    padding: 0;
    cursor: pointer;
  }
`;
