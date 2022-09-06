import styled from "styled-components";

export const RestProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  img{
    width: 40px;
  }

  h4 {
    font-family: "Roboto";
    font-size: 14px;
  }

  .btnLogOut {
    border: none;
    border-radius: 10%;
    font-size: 14px;
    background-color: var(--color-primary);
    color: white;
    cursor: pointer;
  }
  .btnLogOut:hover {
    background-color: var(--color-primary-focused);
  }
`;
