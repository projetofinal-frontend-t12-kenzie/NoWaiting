import styled from "styled-components";

export const ContainerRecomendados = styled.section`
  margin-top: 20px;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 1000px) {
    top: 43.1rem;
    display: none;
  }

  h2 {
    font-size: 20px;
    font-weight: 700;
    font-family: var(--font);
    color: var(--grey-0);
    margin-bottom: 10px;
    width: 90%;
  }

  img {
    width: 90%;
    height: 300px;
    border-radius: 12px;
  }
`;
