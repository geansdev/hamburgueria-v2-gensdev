import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type FieldsetType = {
  children: Element[];
  bordered: boolean;
};

interface IInputsProps {
  label: string;
  placeholder: string;
  type: string;
  /* border: string; */
  id: string;
  register: UseFormRegisterReturn;
}

const InputForm = ({
  label,
  id,
  type,
  register,
  /*  border, */
  placeholder,
  ...rest
}: IInputsProps) => {
  return (
    <fieldset>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} {...register} />
    </fieldset>
  );
};

export default InputForm;
