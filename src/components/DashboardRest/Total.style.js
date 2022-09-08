import styled from "styled-components";

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  padding: 0 30px;
  margin: 20px 20px;

  margin-top: 20px;

  border: 2px solid var(--grey-1);
  border-radius: 10px;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    justify-content: space-between;
    margin: 5px;
  }

  p {
    display: flex;
    font-size: 18px;
    font-family: "Roboto";
    font-weight: bold;
    padding: 0 3vh;
  }

  span {
    display: flex;
    font-size: 16px;
    font-family: "Roboto";
    font-weight: bold;
  }

  strong {
    display: flex;
    margin-top: 1vh;
    font-size: 24px;
    font-family: "Roboto";
    font-weight: medium;
  }

  @media screen and (min-width: 769px) {
    width: 92%;
    padding: 0 30px;
    strong {
    display: flex;
    margin-top: 1vh;
    font-size: 18px;
    font-family: "Roboto";
    font-weight: medium;
  }
  }
`;
