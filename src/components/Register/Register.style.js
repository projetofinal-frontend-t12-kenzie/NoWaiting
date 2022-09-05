import styled from "styled-components";
import BackGroundRegister from "../../images/backGroundRestRegister.jpg";

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url(${BackGroundRegister});
  background-size: cover;
  background-position: center;
`;

export const RegisterForm = styled.form`
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
    border: none;
    border-radius: 10px;
    padding: 10px;
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

  .btnRegister {
    margin: 10px;
    font-family: "Roboto";
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    width: 50%;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: rgba(250, 123, 18, 1);
    color: rgba(255, 255, 255, 1);
    font-weight: bold;
  }

  .btnRegister:hover {
    background-color: #ffa75e;
  }

  .btnCloseRegister {
    color: rgba(250, 123, 18, 1);
    font-family: "Roboto";
    display: flex;
    margin-left: 290px;
    border: none;
    background-color: transparent;
    font-size: larger;
    font-weight: bolder;
    cursor: pointer;
  }
  .btnCloseRegister:hover {
    color: #ffa75e;
  }
`;
