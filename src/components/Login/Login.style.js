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

  .container{
    display: flex;
    flex-direction: row;
    width: 97%;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
    margin: 10px;
  }
  .container > input{
    width: 90%;
    margin: 0;
    height: 100%;

  }

  .eye{
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4% 0 0 0;
  }

  .eye > span{
    height: 100%;
    color: black;
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

  span {
    font-family: "Roboto";
    color: darkred;
    margin: 1px;
    font-size: 12px;
    font-weight: medium;
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
