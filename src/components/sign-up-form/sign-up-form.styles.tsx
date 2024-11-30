import styled from "styled-components";

export const SignUpContainer = styled.div`
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
  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
