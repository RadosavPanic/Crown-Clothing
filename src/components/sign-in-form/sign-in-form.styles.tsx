import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    align-items: center;
    justify-content: center;

    h2 {
      margin: 0;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
