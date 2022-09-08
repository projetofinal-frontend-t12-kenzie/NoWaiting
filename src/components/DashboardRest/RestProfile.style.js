import styled from "styled-components";

export const RestProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  img {
    width: 30px;
    margin-right: 1vh;
  }

  h4 {
    font-family: "Roboto";
    font-size: 18px;
    padding-right: 3vh;
    @media screen and (max-width: 426px) {
    font-family: "Roboto";
    font-size: 12px;
    padding-right: 2vh;
  }
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

  img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    @media screen and (max-width: 426px) {
    width: 30px;
    margin-right: 1vh;
    border-radius: 50%;
  }

  @media screen and (max-width: 426px) {
    flex-direction: column;
  }
`;
