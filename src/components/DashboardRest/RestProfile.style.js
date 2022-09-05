import styled from "styled-components";

export const RestProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;

  h4 {
    font-family: "Roboto";
    font-size: 16px;
  }

  .btnLogOut {
    border: none;
    border-radius: 100%;
    font-size: 16px;
    background-color: transparent;
    color: white;
    cursor: pointer;
  }
  .btnLogOut:hover {
    color: var(--negative);
  }
`;
