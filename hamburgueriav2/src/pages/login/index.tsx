import React from "react";
import FormLogin from "../../components/formLogin";
import ImgIcon from "../../components/img";
import { MainLogin } from "../login/style";

const LoginPage = () => {
  return (
    <MainLogin>
      <div>
        <FormLogin />
      </div>
      <ImgIcon />
    </MainLogin>
  );
};

export default LoginPage;
