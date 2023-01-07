import React, { useState } from "react";
import { Api } from "../services/api";
import { createContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  ILogin,
  ILoginResponse,
  IProviderValueContext,
  IUser,
  IUSerLogin,
  IDefaultProviderProps,
  IUserRegister,
} from "./@types";

export const UserContexts = createContext({} as IProviderValueContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [login, setLogin] = useState({} as ILogin);

  const navigate = useNavigate();

  const UserRegister = async (formData: IUserRegister) => {
    try {
      const response = await Api.post("users", formData);
      setUser(response.data);
      toast.success("Registrado com Sucesso!");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado!");
    } finally {
      <h1>...Loading</h1>;
    }
  };

  const UserLogin = async (formData: IUSerLogin) => {
    try {
      const response = await Api.post<ILoginResponse>("login", formData);
      setUser(response.data.user);
      setLogin(response.data.user);
      localStorage.setItem("@UserHamburgueria", response.data.accessToken);
      toast.success(`${response.data.user.name} logado!`);
      navigate("/home");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado!");
    } finally {
      <h1>...Loading</h1>;
    }
  };
  const UserLogout = async () => {
    setUser(null);
    localStorage.removeItem("@UserHamburgueria");
    navigate("/");
  };

  return (
    <UserContexts.Provider
      value={{ UserLogin, user, UserRegister, UserLogout }}
    >
      {children}
    </UserContexts.Provider>
  );
};
