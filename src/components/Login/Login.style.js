import styled from "styled-components";
import BackGroundLogin from "../../images/backGroundRestLogin.jpg";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url(${BackGroundLogin});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 20px;
  border-radius: 20px;
  width: 310px;

  h2 {
    font-family: "Roboto";
    display: flex;
    justify-content: center;
    padding: 20px;
    color: rgba(0, 0, 0, 1);
    font-size: 30px;
    font-weight: bold;
  }

  input {
    font-family: "Roboto";
    width: 90%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 1);
    color: rgba(0, 0, 0, 1);
    outline: none;
    margin: 10px;
  }

  .anticon {
    position: absolute;
    margin-top: 52px;
    margin-left: 275px;
    color: #000000;
  }

  span {
    font-family: "Roboto";
    color: red;
    margin: 10px;
    font-size: 14px;
    font-weight: bold;
  }

  .btnSingIn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: 15px;
    margin-bottom: 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: rgba(250, 123, 18, 1);
    color: rgba(255, 255, 255, 1);
    font-weight: bold;
  }

  .btnSingIn:hover {
    background-color: #ffa75e;
  }

  .btnSingUp {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-weight: bolder;
    text-decoration: underline #fa7b12;
    color: #141414;
  }

  p {
    font-family: "Roboto";
    font-size: 14px;
  }

  strong {
    font-family: "Roboto";
    font-size: 14px;
    color: #fa7b12;
  }

  strong:hover {
    color: #ffa75e;
  }
`;
