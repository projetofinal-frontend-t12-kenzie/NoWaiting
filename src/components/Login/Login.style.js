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
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 20px;
  border-radius: 20px;
  width: 90%;

  h2 {
    display: flex;
    justify-content: center;
    padding: 20px;
    color: rgba(0, 0, 0, 1);
  }

  input {
    height: 56px;
    width: 90%;
    border: none;
    border-radius: 10px;
    margin-bottom: 50px;
    padding-left: 20px;
    background-color: rgba(255, 255, 255, 1);
    color: rgba(0, 0, 0, 1);
  }

  .btnSingIn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 52px;
    width: 50%;
    margin-bottom: 30px;
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

  span {
    margin-bottom: 20px;
    color: #313131;
  }

  .btnSingUp {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-weight: bolder;
    text-decoration: underline #fa7b12;
    color: #141414;
  }
`;
