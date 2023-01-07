import styled from "styled-components";

export const Container = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  max-width: 452px;
  max-height: 60px;
  margin-top: 10px;
  label {
    width: 90%;
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
