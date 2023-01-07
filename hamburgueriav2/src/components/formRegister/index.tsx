import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { Link } from "react-router-dom";
import { IUserRegister } from "../../contexts/@types";
import { UserContexts } from "../../contexts/UserContext";
import { SchemaRegister } from "../../Schema/schema";
import Button from "../button";
import InputForm from "../input";

interface IFormRegister {
  register: IUserRegister;
}

const FormRegister = () => {
  const { UserRegister } = useContext(UserContexts);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(SchemaRegister),
  });

  const RegisterSubmit: SubmitHandler<IUserRegister> = (data) => {
    UserRegister(data);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(RegisterSubmit)}>
      <div>
        <h2>Cadastro</h2>
        <Link to={"/"}>Retornar para o login</Link>
        <InputForm
          label={"name"}
          id={"name"}
          type={"text"}
          placeholder={"Digite seu nome"}
          register={register("name")}
        />
        {errors.name?.message && <p>{errors.name.message}</p>}

        <InputForm
          label={"Email"}
          id={"email"}
          type={"email"}
          placeholder={"Digite seu email"}
          register={register("email")}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}

        <InputForm
          label={"Senha"}
          id={"password"}
          type={"password"}
          placeholder={"Digite seu Senha"}
          register={register("password")}
          /*        border={errors.password?.message ? "#E83F5B" : "#11891d"} */
        />
        {errors.password?.message && <p>{errors.password.message}</p>}

        <InputForm
          label={"Confirmar Senha"}
          id={"confirmPassword"}
          type={"password"}
          placeholder={"Digite sua senha novamente"}
          register={register("confirm_password")}
        />
        {errors.confirm_password?.message && (
          <p>{errors.confirm_password.message}</p>
        )}
      </div>
      <Button type="submit" name="BtnRegister" button="Cadastrar" />
    </form>
  );
};

export default FormRegister;
