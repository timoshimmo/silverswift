import { useState } from 'react';
import { ROUTES } from '../lib/route-links';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Alert from '../components/forms/alert';
import Input from '../components/forms/input';
import PasswordInput from '../components/forms/password-input';
//import HeaderSimple from '../layouts/generic/header-simple';
import Header from '../layouts/generic/header';
import Button from '../components/forms/button';
//import axios from 'axios';

type FormValues = {
    email: string;
    password: string;
  }

  const userSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required('Email is required'),
    password:  yup.string().required('Password is required')
      .min(5, 'Password must be at least 5 characters long'),
  });

  const defaultValues = {
    email: "",
    password: ""
  };
  

const Login = () => {

    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const {
        register,
        handleSubmit,
    
        formState: { errors },
      } = useForm<FormValues>({
        defaultValues,
        resolver: yupResolver(userSchema),
      });
    
    function onSubmit({ email, password }: FormValues) {

        if(!loading) {

            setLoading(true);


            const obj = {
                email: email,
                password: password
            };

            console.log(obj);

            window.setTimeout(() => {
                setLoading(false);
              }, 3000);

           
        /*    SERVICES.post(`admins/register`, obj)
            .then(response => {
            const res = response.data;
            console.log(res);
            setManagerLoading(false);
            setSuccessMsg("Admin login username and password have been sent to the registered email. Use those credentials to access the dashboard");

            })
            .catch(error => {
            setManagerLoading(false);
            const resError = error.response ? error.response.data.message : "Something went wrong please try again";
            setErrorMsg(resError);
            });

            */

        }
    }

    return (
        <div className="w-full bg-light-gray justify-start items-center">
            <Header />
            <main className="w-full block">
                <section className='flex relative justify-center'>
                    <div className="w-[55%] max-sm:w-full h-full lg:pt-20 pt-10 pb-10 px-20 max-sm:px-10 overflow-y-auto">
                        <div className="w-full bg-white h-auto rounded-2xl p-5">
                            <h2 className="text-[#000000] text-[30px] font-[500] text-left">Login To Your Account</h2>
                            <p className='w-full text-blue-gray lg:text-[15px] text-[14px] mb-5 text-left'>Hey there! Welcome back 👋</p>
                            <div className="mt-6 w-full">
                                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                                    {errorMsg ? (
                                        <Alert
                                        message={errorMsg}
                                        variant="error"
                                        closeable={true}
                                        className="my-4"
                                        onClose={() => setErrorMsg("")}
                                        />
                                    ) : null}

                                    {successMsg ? (
                                        <Alert
                                        message={successMsg}
                                        variant="success"
                                        className="my-4"
                                        onClose={() => setSuccessMsg("")}
                                        />
                                    ) : null}

                                        <Input
                                            label="Email / Phone Number"
                                            {...register('email')}
                                            type="email"
                                            variant="outline"
                                            className="mb-5"
                                            placeholder='enter your email or phone number'
                                            error={errors.email?.message!}
                                        />

                                        <PasswordInput
                                            label="Password"
                                            {...register('password')}
                                            error={errors.password?.message!}
                                            variant="outline"
                                            placeholder='enter your password'
                                            forgotPassHelpText="Forgot Password?"
                                            forgotPageLink={ROUTES.RESET_PASSWORD}
                                            className="mb-5"
                                        />


                                        <Button
                                            className="h-14 w-full mt-5 text-white !font-[400] rounded-lg"
                                            loading={loading || !errors}
                                            disabled={loading}
                                        >
                                            {loading ? "Loading..." : "Log in"}
                                        </Button>
                                </form>
                            </div>
                        </div>
                        <p className='mt-7 mb-10 text text-[#475569] lg:text-[14px] text-[13px]'>Don't have an account? <a href={ROUTES.SIGNUP} className='text-primary font-[600]'>Create Account Instead</a></p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Login;