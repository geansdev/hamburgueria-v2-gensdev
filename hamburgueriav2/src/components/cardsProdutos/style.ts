import styled from "styled-components";

export const CardLiStyled = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  width: 100%;
  height: 70px;

  & > div {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  & > div > img {
    width: 60%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
    background-color: var(--color--grey-0);
  }

  & > div > div > h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    color: var(--color--grey-100);
  }

  & > div > div > span {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: var(--color--grey-50);
  }

  button {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: var(--color--grey-40);
  }
`;
