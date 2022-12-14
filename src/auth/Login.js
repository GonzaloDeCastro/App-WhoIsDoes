import React, { useState } from "react";
import AuthLayout from "../layout/AuthLayout";
import { useForm } from "react-hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  ButtonForm,
  ContainerPassword,
  EyeComponent,
  FormComponent,
  InputForm,
  InputPassword,
  LabelForm,
  PassWrongIcon,
} from "../css/FormStyleComponents";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };
  const noEmptyPass = watch("password");
  const noEmptyForm = watch("email");

  const onSubmit = (form) => {
    setLoading(true);
    dispatch(userLogin(form, navigate));
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <AuthLayout>
      <FormComponent onSubmit={handleSubmit(onSubmit)}>
        <LabelForm>Email</LabelForm>
        <InputForm
          noEmptyForm={noEmptyForm && "#00ffff"}
          noEmptyFocus={
            errors.email?.type === "required" ||
            errors.email?.type === "pattern"
              ? "red"
              : "#00ffff"
          }
          variant="outlined"
          type="text"
          autoComplete="off"
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
          })}
        />
        <LabelForm>Password</LabelForm>
        <ContainerPassword>
          <InputPassword
            noEmptyPass={noEmptyPass && "#00ffff"}
            noEmptyFocus={
              errors.password?.type === "required" ||
              0 === "You could not be authenticated" ||
              0 === "The user is blocked"
                ? "red"
                : "#00ffff"
            }
            variant="outlined"
            type={passwordShown ? "text" : "password"}
            {...register("password", { required: true })}
          />
          <i onClick={togglePasswordVisiblity}>
            <EyeComponent>
              {0 === "You could not be authenticated" ||
              0 === "The user is blocked" ? (
                <PassWrongIcon>
                  {" "}
                  <ErrorOutlineIcon />
                </PassWrongIcon>
              ) : passwordShown ? (
                <VisibilityIcon />
              ) : (
                <VisibilityOffIcon />
              )}
            </EyeComponent>
          </i>
        </ContainerPassword>
        <ButtonForm type="submit">{"Log in"}</ButtonForm>
      </FormComponent>
    </AuthLayout>
  );
};

export default Login;
