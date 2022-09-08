import styled from "styled-components";

export const LpagerContainer = styled.div`
  scroll-behavior: smooth;
`;
export const DivWellcome = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url("./assets/bemvindoimg_16-9.png");
  background-size: 100% 100%;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  @media (min-width: 425px) {
    background-image: url("./assets/bemvindoimg.png");
    background-size: 100% 100%;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  }
  @media (min-width: 700px) {
    background-image: url("./assets/bemvindoimg.png");
  }
`;
export const Container = styled.div`
  height: 80vh;
  display: flex;
  padding: 5vh;
  flex-direction: column-reverse;
  align-items: flex-end;
  justify-content: space-between;
  @media (min-width: 425px) {
  }
  @media (min-width: 700px) {
    height: 85vh;
    display: flex;
    padding: 9vh;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  }
`;
export const Logo = styled.img`
  height: 6vh;
  width: 15vh;
  @media (min-width: 425px) {
  }
  @media (min-width: 700px) {
    height: 9vh;
    width: 24vh;
  }
`;
export const DivTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const Title = styled.h1`
  font-family: "Roboto";
  font-size: 5vh;
  font-weight: bold;
  color: white;
  @media (min-width: 425px) {
  }
  @media (min-width: 700px) {
    font-family: "Roboto";
    font-size: 12vh;
    font-weight: bold;
    color: white;
  }
`;
export const SubTitle = styled.h2`
  font-family: "Roboto";
  font-size: 2vh;
  color: white;
  font-weight: thin;
  @media (min-width: 425px) {
  }
  @media (min-width: 700px) {
    font-family: "Roboto";
    font-size: 4vh;
    color: white;
    font-weight: thin;
  }
`;
export const Down = styled.img`
  width: 2vh;
  position: absolute;
  left: 50%;
  top: 90%;
  overflow: hidden;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.5);
  }
  @media (min-width: 425px) {
  }
  @media (min-width: 700px) {
    top: 95%;
  }
`;
export const Clickable = styled.a`
  height: 20vh;
  width: 100%;
`;
export const DivSelection = styled.div`
height: 100vh;
width: 100%;
display: grid;
grid-template-columns: 1fr;
@media (min-width:425px){
grid-template-columns: 1fr;
}
@media (min-width:700px){
grid-template-columns: 1fr 1fr;}
`
export const DivRestaurante = styled.div`
  cursor: pointer;
  background-image: url("./assets/restaurante.png");
  display: flex;
  background-size: 100% 110%;
  height: 50vh;
  width: 100%;
  overflow: hidden;
  transition: all 0.5s;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.4);
  &:hover {
    transform: scale(1.1);
    box-shadow: none;
  }
  @media (min-width: 425px) {
  }
  @media (min-width: 700px) {
    height: 100vh;
    width: 100%;
  }
`;
export const DivFregues = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background-image: url("./assets/fregues.png");
  background-size: 100% 100%;
  height: 50vh;
  width: 100%;
  overflow: hidden;
  transition: all 0.5s;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.4);
  &:hover {
    transform: scale(1.1);
    box-shadow: none;
  }
  @media (min-width: 425px) {
  }
  @media (min-width: 700px) {
    height: 100vh;
    width: 100%;
  }
`;
export const Cliente = styled.span`
  font-family: "Roboto";
  font-size: 5vh;
  font-weight: bold;
  color: white;
  margin: 8vh;
  @media (min-width: 425px) {
  }
  @media (min-width: 700px) {
    font-family: "Roboto";
    font-size: 12vh;
    font-weight: bold;
    color: white;
  }
`;
export const Restaurante = styled.span`
  font-family: "Roboto";
  font-size: 5vh;
  font-weight: bold;
  color: white;
  margin-top: 8vh;
  margin: 8vh;
  @media (min-width: 425px) {
  }
  @media (min-width: 700px) {
    font-family: "Roboto";
    font-size: 12vh;
    font-weight: bold;
    color: white;
  }
`;
