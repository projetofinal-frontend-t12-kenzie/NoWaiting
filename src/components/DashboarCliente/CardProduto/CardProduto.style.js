import styled from "styled-components";

export const ContainerProdutos = styled.div`
  align-items: center;
  flex-direction: row;

  width: 100%;

  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-between;
  padding: 130px 20px 130px 15px;
  gap: 15px;
  overflow: scroll;
  overflow-y: hidden;

  @media screen and (min-width: 1000px) {
    width: 100%;
    overflow: hidden;
    padding: 15px 10px 530px 15px;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1400px) {
    width: 80%;
    overflow: hidden;
    padding: 15px 15px 530px 15px;
    flex-wrap: wrap;
  }
`;

export const CardProdutos = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;

  width: 150px;
  height: 220px;

  background-image: url("https://images.pexels.com/photos/574111/pexels-photo-574111.jpeg?auto=compress&cs=tinysrgb&w=1600");
  border-radius: 12px;
  padding: 3px;

  font-family: var(--font);

  &:hover {
    transform: scale(1.1);
    transition: 0.4s;
  }

  div {
    background-color: var(--grey-transparent);
    padding: 5px 15px 5px 15px;
    border-radius: 12px;
    width: 150px;
    height: 100px;

    display: flex;
    flex-direction: column;
    justify-content: baseline;
    gap: 6px;

    position: relative;
    top: 58px;
  }

  h3 {
    font-size: 20px;
    font-weight: 700;
    color: var(--grey-0);
  }

  p {
    font-size: 12px;
    font-weight: 200;
    color: var(--grey-0);
  }

  .categoria {
    font-size: 16px;
    font-weight: 800;
    color: var(--color-primary);
  }

  span {
    font-size: 12px;
    font-weight: 600;
  }

  button {
    background-color: transparent;
    border: none;
    color: #fa7b12;
    width: 40px;
    height: 40px;
    size: 3rem;
    padding: 0;
    cursor: pointer;
    position: relative;
    top: -22px;
    left: 95px;
  }
`;
