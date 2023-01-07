import styled from "styled-components";

export const FormAll = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 350px;
  height: 380px;
  border: 2px solid var(--grey-0);
  padding: 15px;
  gap: 1.5rem;
  box-sizing: border-box;
  background: #ffff;
  border-radius: 5px;
  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
  }
  input {
    box-sizing: border-box;
    background: var(--grey-0);
    border-radius: 8px;
    border: none;
    width: 90%;
    padding: 10px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #9999;
    width: 95%;
    text-align: center;
  }
  span {
    width: 90%;
    font-size: 12px;
    color: var(--black);
  }
`;
export const Button = styled.button`
  width: 90%;
  padding: 10px;
  border-radius: 8px;
  background: var(--color--primary);
  color: #ffff;
  border: none;
`;
export const ButtonCadastar = styled.button`
  background: var(--color--grey-0);
  color: #999999;
`;
