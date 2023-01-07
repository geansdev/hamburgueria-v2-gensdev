import styled from "styled-components";

export const SectionLogin = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  max-width: 400px;
  margin-top: 10px;
  img {
    display: none;
  }
  @media (min-width: 768px) {
    img {
      display: flex;
      width: 181.16px;
      height: 79px;
      margin-top: 2rem;
    }
  }
`;
