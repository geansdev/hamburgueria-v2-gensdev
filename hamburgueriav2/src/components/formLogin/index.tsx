import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUSerLogin } from "../../contexts/@types";
import { UserContexts } from "../../contexts/UserContext";
import { useContext } from "react";
import Button from "../button";
import { SchemaLogin } from "../../Schema/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import InputForm from "../input";
import { ButtonCadastar, FormAll } from "../form/style";

const FormLogin = () => {
  const { UserLogin } = useContext(UserContexts);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUSerLogin>({
    resolver: yupResolver(SchemaLogin),
  });

  const LoginSubmit: SubmitHandler<IUSerLogin> = (data) => {
    UserLogin(data);
  };
  return (
    <>
      <FormAll onSubmit={handleSubmit(LoginSubmit)}>
        <div>
          <h2>Login</h2>
        </div>
        <fieldset>
          <InputForm
            label={"email"}
            id={"email"}
            type={"email"}
            placeholder={"Digite o email de usuario"}
            register={register("email")}
            /* border={errors.email?.message ? "#E83F5B" : "#11891d"} */
          />
          {errors.email?.message && <p>{errors.email.message}</p>}

          <InputForm
            label={"senha"}
            id={"password"}
            type={"password"}
            placeholder={"Digite sua senha"}
            register={register("password")}
            /* border={errors.email?.message ? "#E83F5B" : "#11891d"} */
          />
          {errors.password?.message && <p>{errors.password.message}</p>}

          <Button type="submit" name="BtnLogin" button="Logar" />
          <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
        </fieldset>
        <Link to={"/cadastro"}>
          <ButtonCadastar>Cadastrar</ButtonCadastar>
        </Link>
      </FormAll>
    </>
  );
};

export default FormLogin;
