import styled from "styled-components";

export const ConfirmeInvoice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;

  width: 300px;
  height: 115%;

  top: 0;
  right: -9px;

  padding: 10px;
  background: rgba(0, 0, 0, 0.8);

  font-family: "Inter";
  font-style: normal;

  z-index: 3;

  .invoice {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;

    background-color: #ffffff;
    height: 400px;
    position: relative;
    width: 77%;
    margin: 0px;
    border-radius: 5px;
    padding: 0 20px 10px 20px;

    .icon-done.one {
      position: absolute;

      background: #4caf50;

      border-radius: 50%;

      bottom: 378px;
      left: 96px;

      height: 80px;
      width: 80px;
    }

    .icon-done.two {
      position: absolute;

      background: #4caf50;

      border-radius: 50%;

      bottom: 369px;
      left: 86px;

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

      .description-done {
        color: #4caf50;

        padding-left: 23px;
      }

      .description-order-done {
        padding-left: 23px;
      }
    }

    .invoice-amount {
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;

      height: 120px;

      width: 100%;
    }
    .invoice-cut {
      .left {
        position: absolute;
        width: 15px;
        height: 30px;
        border-radius: 0px 30px 30px 0px;
        background-color: var(--grey-3);
        top: 288px;
        left: 0px;
        z-index: 1;
      }

      .line {
        position: absolute;
        margin: 0px;
        width: 270px;
        bottom: 106px;
        left: 10px;
        background-color: #000;
        height: 4px;
      }

      .rigth {
        position: absolute;
        width: 15px;
        height: 30px;
        border-radius: 30px 0px 0px 30px;
        background-color: var(--grey-3);
        top: 288px;
        right: 0px;
        z-index: 1;
      }
    }

    .invoice-total {
      display: flex;
      justify-content: center;
      align-items: center;

      flex-direction: column;

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
