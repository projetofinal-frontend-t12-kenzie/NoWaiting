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
  width: 312px;

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
    margin-bottom: 30px;
    padding-left: 20px;
    background-color: rgba(255, 255, 255, 1);
    color: rgba(0, 0, 0, 1);
  }

  .btnRegister {
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

  .btnRegister:hover {
    background-color: #ffa75e;
  }

  .btnCloseRegister {
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
