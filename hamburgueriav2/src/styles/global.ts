import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --color--primary: #27AE60;
  --color--primary-50: #93D7AF;
  --color--secundary: #EB5757;
  --color--grey-100: #333333;
  --color--grey-50: #828282;
  --color--grey-40: #BDBDBD;
  --color--grey-20: #E0E0E0;
  --color--grey-0: #F5F5F5;
  --white: #ffffff;
  --black: #000000;
}

body{
  width: 100vw;
  height: 100vh;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background: transparent;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: var(--white);
}

a{
  text-decoration: none;
}

ul,
li {
  list-style: none;
}

h2, h3, h4, p, span{
  font-family: 'Inter';
  font-style: normal;
}

fieldset{
  border:none
}
`;
