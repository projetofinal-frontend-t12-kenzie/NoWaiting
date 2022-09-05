import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  width: 100%;
  height: 100vh;

  margin: 0 auto;

  background-color: rgb(43 43 43 / 2%);

  .navbar-esquerda {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 15%;
    height: 100vh;

    background-color: #141414;

    padding: 15px;

    position: relative;

    .logo {
      display: flex;
      width: 72px;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--grey-2);
      justify-content: center;
      align-items: center;
    }
    .menu {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      gap: 10px;

      position: absolute;
      top: 150px;
      left: 30px;

      button {
        display: flex;
        align-items: center;

        border-style: none;
        background-color: transparent;

        svg {
          margin-right: 10px;
          color: var(--grey-1);
          cursor: pointer;
        }
      }

      span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        cursor: pointer;

        color: var(--grey-1);

        &:active,
        &:hover {
          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;

          color: var(--grey-0);
        }
      }
    }
    .sub-menu {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      width: 155px;

      padding: 20px;

      gap: 10px;

      position: absolute;
      bottom: 20px;

      border-top: 1px solid var(--grey-1);

      @media screen and (max-width: 1120px) {
        display: none;
      }

      span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;

        cursor: pointer;

        color: var(--grey-1);

        &:active,
        &:hover {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;

          color: var(--grey-0);
        }
      }
    }
  }
`;
export const Dashboard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  width: 62%;
  height: inherit;

  margin-left: 50px;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 30px;

    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;

      color: var(--grey-3);
    }

    form {
      display: flex;
      align-items: center;

      width: 230px;
      height: 35px;

      box-sizing: border-box;

      position: relative;

      input {
        display: flex;
        align-items: center;
        flex-direction: column;

        border-style: none;
        box-sizing: content-box;
        border-radius: 30px;

        padding: 10px 0px 10px 50px;
        margin: 0 auto;

        width: 180px;

        ::placeholder {
          color: var(--grey-3);
        }
      }
      label {
        position: absolute;
        left: 8%;
      }
    }
  }

  .cards {
    display: flex;

    .card {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;

      padding: 15px;
      margin: 40px 20px 0px 0px;

      width: 220px;
      height: 120px;

      border: 2px solid var(--grey-1);
      border-radius: 10px;

      position: relative;
      @media screen and (max-width: 1350px) {
        width: 120px;
      }

      &:hover {
        transform: scale(1.03);
      }

      span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        line-height: 21px;

        color: var(--grey-3);
      }

      strong {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;

        color: var(--grey-3);
      }

      .porcentagem {
        display: flex;
        align-items: center;

        position: absolute;
        bottom: 11px;

        border-radius: 5px;
        padding: 1px;
        background-color: #eeffe6;

        svg {
          color: var(--success);
        }

        h5 {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 10px;
          line-height: 12px;

          color: var(--success);
        }
      }

      span:nth-child(4) {
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;

        margin-left: 45px;
      }
    }
  }

  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;

    color: var(--grey-3);

    margin-top: 40px;
    margin-bottom: 40px;
  }

  .pedidos {
    display: flex;
    flex-direction: column;

    padding: 20px;

    width: 95%;
    height: 100%;

    margin: 20px 0px 30px 0px;

    border: 2px solid var(--grey-1);
    border-radius: 10px;

    position: relative;

    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }

    form {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      width: 100%;

      select,
      input {
        width: 100px;

        padding: 2px;
        margin-right: 10px;

        border-style: none;
        border-radius: 8px;

        background-color: var(--grey-0);

        cursor: pointer;
      }
    }

    .pedido {
      display: flex;
      align-items: center;

      padding: 10px;

      border-bottom: 1px solid var(--grey-1);

      position: relative;

      @media screen and (max-width: 1400px) {
        width: 450px;

        span:nth-child(4) {
          position: absolute;
          right: 85px;
        }
        span:nth-child(5) {
          position: absolute;
          right: 5px;
        }
      }
      @media screen and (max-width: 1350px) {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        margin: 0 auto;
        margin-top: 30px;

        width: inherit;

        span:nth-child(1) {
          position: absolute;
          top: 30px;
          left: -40px;
        }
        span:nth-child(4) {
          position: absolute;
          top: 10px;
          right: -50px;
        }
        span:nth-child(5) {
          position: absolute;
          top: 68px;
          right: -50px;
        }
      }
      @media screen and (max-width: 1120px) {
        span:nth-child(1) {
          font-size: 10px;

          position: absolute;
          top: 30px;
          left: -40px;
        }
        span:nth-child(4) {
          font-size: 10px;

          position: absolute;
          top: 10px;
          right: -40px;
        }
        span:nth-child(5) {
          font-size: 10px;

          position: absolute;
          top: 38px;
          right: -40px;
        }
      }
    }

    &:hover {
      transform: scale(1.01);
    }

    span {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;

      color: var(--grey-3);

      &:nth-child(4) {
        margin-left: 20%;
      }
      &:nth-child(5) {
        margin-left: 25%;
      }
    }

    img {
      margin-left: 40px;
    }

    strong {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;

      margin-left: 10px;

      color: var(--grey-3);
    }
  }
`;

export const Navbardir = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 20%;

  .avatar {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    margin-top: 30px;
    gap: 20px;

    position: relative;

    &:hover {
      transform: scale(1.02);
    }

    button {
      border: none;
      background-color: transparent;

      svg {
        color: var(--color-primary);
        &:hover {
          transform: scale(1.1);
          cursor: pointer;
        }
      }
    }
  }

  img {
    width: 40px;
    height: 40px;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }

  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    color: var(--grey-3);
  }

  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 8px;

    color: var(--grey-2);
  }

  .cards {
    display: flex;
    flex-direction: column;

    width: 256px;
    height: 248px;

    padding: 10px;

    margin-top: 30px;
    border: 2px solid var(--grey-1);
    border-radius: 10px;

    @media screen and (max-width: 1400px) {
      width: inherit;
      padding: 0;

      h4 {
        margin: 10px 0px 0px 10px;
      }
    }
    @media screen and (max-width: 920px) {
      width: 150px;
    }

    &:hover {
      transform: scale(1.01);
    }

    h4 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 17px;
      line-height: 21px;

      color: var(--grey-3);
    }
  }

  .card {
    display: flex;
    align-items: center;
    justify-content: space-around;

    height: 80px;

    border-bottom: 1px solid var(--grey-1);

    position: relative;

    @media screen and (max-width: 920px) {
      margin-top: 20px;
      flex-direction: column;
      width: 150px;

      svg {
        position: absolute;
        right: 1px;
        bottom: 2px;
      }
    }

    &:hover {
      transform: scale(1.03);
    }

    div {
      display: flex;
      flex-direction: column;

      strong {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;

        color: var(--grey-3);
      }
      span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;

        color: var(--grey-2);
      }
    }
  }
`;
