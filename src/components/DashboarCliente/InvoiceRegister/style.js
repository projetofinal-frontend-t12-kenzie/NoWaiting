import styled from "styled-components";

export const InvoiceContainer = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  width: 100%;
  height: 100%;

  .invoice {
    height: 207px;
    position: relative;
    right: 21px;
    top: -18px;
    width: 70%;

    .register-name {
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;

      background-color: #ffffff;
      height: 110px;
      position: relative;
      width: 100%;
      margin: 0px;
      border-radius: 20px 20px 0px 0px;
      padding: 0 20px 10px 20px;

      font-size: 14px;
      font-weight: 600;
    }

    .invoice-cut {
      .left {
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: 40px;
        background-color: var(--grey-3);
        top: 101px;
        left: -26px;
        z-index: 1;
      }

      .line {
        margin: 0px;
        width: 200px;
        background-color: #000;
        height: 4px;
      }

      .rigth {
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: 40px;
        background-color: var(--grey-3);
        top: 101px;
        right: -64px;
        z-index: 1;
      }
    }

    .invoice-total {
      flex-direction: column;
      background-color: #ffffff;
      height: 40px;
      position: relative;
      width: 100%;
      margin: 0px;
      border-radius: 0px 0px 20px 20px;
      padding: 10px 20px 0 20px;

      div {
        margin-top: 10px;
        font-size: 15px;
        font-weight: 600;
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

    background: #fa7b12;
    border-radius: 10px;
    border: none;

    color: #ffffff;

    font-size: 16px;
  }
`;
