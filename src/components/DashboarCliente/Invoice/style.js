import styled from "styled-components";

export const ConfirmeInvoice = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  align-items: center;

  width: 430px;

  padding: 10px;

  background-color: #141414;

  font-family: "Inter";
  font-style: normal;

  gap: 15px;

  .invoice {
    display: flex;
    flex-direction: column;

    background-color: #ffffff;
    height: 500px;
    position: relative;
    width: 77%;
    margin: 0px;
    border-radius: 5px;

    font-family: "Roboto";
    font-style: normal;

    .receipt {
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;

      background-color: #ffffff;
      height: 70%;
      position: relative;
      width: 100%;
      margin: 0px;
      border-radius: 5px;
      padding: 0 20px 10px 20px;

      border-bottom: 1.5px dashed black;

      .icon-done.one {
        position: absolute;

        background: #fa7b12;

        border-radius: 50%;

        bottom: 314px;
        left: 37%;

        height: 80px;
        width: 80px;

        display: flex;
        align-items: center;
        justify-content: center;

        color: white;
        z-index: 1;
      }

      .icon-done.two {
        position: absolute;

        background: #fa7b12;

        border-radius: 50%;

        bottom: 305px;
        left: 33.4%;

        height: 100px;
        width: 100px;

        opacity: 40%;
      }

      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 90%;
        height: 70px;

        gap: 20px;

        margin-top: 30px;

        .description-done {
          display: flex;
          justify-content: center;

          color: #fa7b12;

          padding-left: 32px;
        }

        .description-order-done {
          font-weight: 700;
          font-size: 18px;
          line-height: 21px;

          color: #000000;

          padding-left: 40px;
        }
      }

      .invoice-amount {
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;

        height: 120px;

        width: 100%;
      }
      .left {
        position: absolute;
        width: 15px;
        height: 30px;
        border-radius: 0px 30px 30px 0px;
        background-color: var(--grey-3);
        top: 334px;
        left: 0px;
        z-index: 1;
      }

      .rigth {
        position: absolute;
        width: 15px;
        height: 30px;
        border-radius: 30px 0px 0px 30px;
        background-color: var(--grey-3);
        top: 334px;
        right: 0px;
        z-index: 1;
      }
    }
    .invoice-total {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      height: 28%;
      width: 100%;

      background-color: #ffffff;

      margin: 0px;

      border-radius: 5px;
      padding: 10px 20px 0 20px;
      .total {
        opacity: 60%;
        font-weight: 400;
        line-height: 19px;
        margin-bottom: 10px;
      }

      .price {
        font-size: 25px;
        font-weight: 400;
        line-height: 19px;

        color: #fa7b12;
      }
    }
  }

  .finish {
    position: absolute;
    top: 505px;
    right: 12px;

    @media screen and (min-width: 1300px) {
      right: 30px;
      top: 510px;
    }
  }

  .send {
    width: 303px;
    height: 57px;
    left: 1178px;
    top: 900px;

    background: #ffffff;
    border-radius: 10px;
    border: none;

    color: #fa7b12;

    font-size: 16px;
  }
`;
