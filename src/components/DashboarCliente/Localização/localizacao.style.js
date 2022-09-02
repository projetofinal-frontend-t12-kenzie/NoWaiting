import styled from "styled-components";

export const Localizacao = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: var(--font);
  margin-bottom: 10px;

  @media screen and (min-width: 1000px) {
    display: none;
  }

  h5 {
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 5px;
    color: var(--grey-1);
  }

  p {
    font-size: 14px;
    font-weight: 700;
    color: var(--grey-0);
  }
`;
