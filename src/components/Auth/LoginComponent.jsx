import React from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "@/icons/EyeFilledIcon ";
import { EyeSlashFilledIcon } from "@/icons/EyeFilledIcon";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Formik } from "formik";
import { object, string } from "yup";
import { Spinner } from "@nextui-org/react";

const loginInitialValues = { email: "", password: "" };

const loginValidationSchema = object({
  email: string().email("Invalid email address").required("Required"),
  password: string()
    .min(4, "Minimum Length is Four Characters")
    .max(10, "Maximum Length is Ten Characters"),
});

const LoginComponent = () => {
  const variant = "underlined";
  const [isVisible, setIsVisible] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false)

  const submitHandler = (values) => {
    setSubmitLoading(true)
    console.log("State has been set")
    setTimeout(() => {
      signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect:"/dashboard",
        callbackUrl:"/dashboard"
      })
    }, 2000);
  };

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <>
      <h1 className="text-[40px] font-bold pb-[50px] text-center">
        Welcome Back
      </h1>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={submitHandler}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit} noValidate>
            <div key={variant} className="flex w-full ">
              <Input
                name="email"
                variant={variant}
                label="Email"
                isRequired={true}
                onChange={formik.handleChange}
                {...formik.getFieldProps("email")}
              />
            </div>
            <div className="text-sm text-gray-400 pl-1  pb-[23px]">
              {formik.errors.email}
            </div>
            <div className="flex w-full ">
              <Input
                label="Password"
                variant={variant}
                name="password"
                isRequired={true}
                endContent={
                  <button
                    className="focus:outline-none pr-1"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                onChange={formik.handleChange}
                {...formik.getFieldProps("password")}
              />
            </div>
            <div className="text-sm text-gray-400 px-1 pt-1">
              {formik.errors.password}
            </div>
            <div className="text-end pt-[8px] pb-[32px] text-sm text-black  dark:text-white ">
              Forgot Password?
            </div>
            <button
              type="submit"
              className="w-full bg-[#205e7f] opacity-100 text-white rounded-full py-[10px] "
            >
              <div className="flex justify-center items-center">
                <div> Login</div>
                  <Spinner size="sm" className={"m-0 px-2 "+ (submitLoading?"block":"hidden")} />
              </div>
            </button>
          </form>
        )}
      </Formik>

      <div className="flex w-full h-[20%] md:h-[50%] mt-2 justify-end items-end ">
        <div className="w-full text-center  text-gray-300 rounded-full py-[10px] ">
          Dont have an Account?
          <span className=" cursor-pointer mx-2">Signup</span>
        </div>
      </div>
      {/* Store Images */}
      <div className="flex h-[40px] justify-center gap-4">
        <img src="/appstore.png" />
        <img src="/playstore.png" />
      </div>
    </>
  );
};

export default LoginComponent;
