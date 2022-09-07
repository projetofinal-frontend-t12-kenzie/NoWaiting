import styled from "styled-components";

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 0 50px;
  margin: 20px 20px;

  margin-top: 20px;

  border: 2px solid var(--grey-1);
  border-radius: 10px;
  font-size: 14px;

  div {
    display: flex;
    justify-content: space-between;
    margin: 5px;
  }

  span {
    display: flex;
    font-size: 16px;
    font-family: "Roboto";
    font-weight: bold;
  }

  strong {
    display: flex;
    font-size: 16px;
    font-family: "Roboto";
    font-weight: medium;
  }

  @media screen and (min-width: 769px) {
    width: 92%;
    padding: 0 30px;
  }
`;
