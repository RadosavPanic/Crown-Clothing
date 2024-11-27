import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 150px;
  margin: 20px 10px 0 10px;

  padding: 50px 40px 130px 40px;
  border-radius: 20px;
  background-color: #e2e2e2;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
  padding: 0;

  @media screen and (max-width: 600px) {
    min-width: 100%;
  }
`;

export const PaymentButtonContainer = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PaymentButton = styled(Button as any)`
  margin-left: auto;
  margin-top: 30px;

  @media screen and (max-width: 600px) {
    margin-left: 0;
  }
`;

export const cardElementOptions = {
  style: {
    base: {
      iconColor: "blue",
      "::placeholder": {
        color: "#1b69dd",
      },
    },
  },
};
