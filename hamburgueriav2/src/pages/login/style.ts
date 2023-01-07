import styled from "styled-components";

export const MainLogin = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;
export const DivLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  max-width: 400px;
  margin-top: 10px;
  img {
    display: none;
  }
`;
