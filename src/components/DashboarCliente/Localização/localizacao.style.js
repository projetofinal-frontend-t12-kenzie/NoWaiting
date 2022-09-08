import styled from "styled-components";

export const Localizacao = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: var(--font);

  margin-top: 5px;
  margin-bottom: 14px;
  height: 60px;

  @media screen and (min-width: 1000px) {
    display: none;
  }

  h5 {
    font-size: 10px;
    font-weight: 700;
    margin-bottom: 6px;
    color: var(--grey-1);
  }

  p {
    font-size: 12px;
    font-weight: 700;
    color: var(--grey-0);
  }
`;
