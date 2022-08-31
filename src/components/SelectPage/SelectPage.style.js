import styled from "styled-components";
import cliente from "../../images/backGroundSelectClient.jpg";
import restaurante from "../../images/backGroundRestLogin.jpg";
export const Geral = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  border: 0;
  @media (max-width: 426px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
  }
`;
export const Restaurante = styled.div`
  background-image: url(${restaurante});
  background-size: cover;
  background-position: center;
  width: 100%;
  @media (max-width: 426px) {
    min-height: 50vh;
  }
  :hover {
    width: 102%;
  }
  button {
    border: none;
    cursor: pointer;
    font-size: 70px;
    color: #ffffff;
    background-color: transparent;
    margin: 20px;
    @media (max-width: 426px) {
      font-size: 60px;
    }
  }
  button:hover {
    color: orange;
  }
`;
export const Cliente = styled.div`
  background-image: url(${cliente});
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  @media (max-width: 426px) {
    height: 50vh;
  }
  :hover {
    width: 102%;
  }
  button {
    border: none;
    cursor: pointer;
    font-size: 70px;
    color: #ffffff;
    background-color: transparent;
    margin: 20px;
    @media (max-width: 426px) {
      font-size: 60px;
    }
  }
  button:hover {
    color: orange;
  }
`;
