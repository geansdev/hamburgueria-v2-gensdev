import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 15vh;
  background-color: var(--color--grey-0);

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 75%;
    margin: 0 auto;
    gap: 0.5rem;
  }

  button {
    width: 30px;
    height: 30px;
    background-color: var(--color--primary);
  }

  @media (min-width: 600px) {
    height: 10vh;
    & > div {
      flex-direction: row;
      justify-content: space-between;
      max-width: 90%;
    }
  }
`;
