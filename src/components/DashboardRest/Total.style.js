import styled from "styled-components";

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-left: 5%;
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
`;
