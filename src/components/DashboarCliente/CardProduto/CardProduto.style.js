import styled from "styled-components";

export const ContainerProdutos = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 100vw;
  height: 100%;

  padding-left: 20px;
  margin-top: 30px;

  box-sizing: border-box;

  gap: 15px;

  overflow-x: scroll;
  overflow-y: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 1000px) {
    display: grid;
    width: 80%;
    padding: 15px 10px 530px 15px;
    grid-template-columns: 1fr 1fr 1fr;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1400px) {
    width: 75%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    flex-wrap: wrap;
  }
`;

export const CardProdutos = styled.li`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  position: relative;

  min-width: 180px;
  height: 220px;

  border-radius: 12px;

  font-family: var(--font);

  opacity: 0.7;

  img {
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: 12px;
  }

  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 8px 0px 0 8px;
    border-radius: 12px;

    width: 100%;
    height: 100px;

    gap: 5.5px;

    background: rgba(0, 0, 0, 0.5) 0%;
    z-index: 1;
  }

  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    color: #ffffff;
  }

  .description-product {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #ffffff;
  }

  .categoria {
    font-size: 14px;
    font-weight: 800;
    color: var(--color-primary);
  }

  .price {
    color: #ffff;
    font-size: 12px;
    font-weight: 600;
  }

  .cart {
    background-color: transparent;
    border: none;
    color: #ffff;
    width: 40px;
    height: 40px;
    size: 3rem;

    cursor: pointer;

    padding-bottom: 40px;
  }

  @media screen and (min-width: 1000px) {
    height: 230px;
  }
  &:hover {
    transform: scale(1.02);
    transition: 0.4s;
    opacity: 1;
  }
`;
