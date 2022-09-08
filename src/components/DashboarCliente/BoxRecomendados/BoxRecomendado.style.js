import styled from "styled-components";

export const ContainerRecomendados = styled.section`
  margin-top: 2vh;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 75px;

  @media screen and (min-width: 1000px) {
    top: 43.1rem;
    display: none;
  }

  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    font-family: var(--font);
    color: #fa7b12;
    margin-bottom: 10px;
    width: 90%;
  }

  .product {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    background-image: url("https://images.pexels.com/photos/574111/pexels-photo-574111.jpeg?auto=compress&cs=tinysrgb&w=1600");
    background-size: 350px 300px;
    width: 350px;
    height: 300px;
    border-radius: 12px;

    .description {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      padding: 8px 0px 0 8px;
      border-radius: 12px;

      width: 100%;
      height: 138px;

      gap: 5.5px;

      background: rgba(0, 0, 0, 0.5) 0%;
      font-family: "Inter";
      font-style: normal;

      .title {
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
    }
    &:hover {
      transform: scale(1.02);
      transition: 0.4s;
      opacity: 1;
    }
  }
`;
