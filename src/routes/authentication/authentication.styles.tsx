import styled from "styled-components";

export const AuthenticationContainerDesktop = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const AuthenticationContainerMobile = styled.div`
  width: 100%;
  display: none;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    display: flex;
  }
`;

export const SwitchLink = styled.button`
  margin-top: 20px;
  background: none;
  border: none;
  color: blue;
  text-decoration: underline;
  cursor: pointer;

  &:hover,
  &:visited {
    color: blue;
  }
`;
