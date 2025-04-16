import { useState } from 'react';
import { ROUTES } from '../lib/route-links';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Alert from '../components/forms/alert';
import Input from '../components/forms/input';
import HeaderSimple from '../layouts/generic/header-simple';
import Button from '../components/forms/button';
//import axios from 'axios';

type FormValues = {
    email: string;
  }

  const userSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required('Email is required'),
  });

  const defaultValues = {
    email: ""
  };
  

const ResetPassword = () => {

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
    
    function onSubmit({ email }: FormValues) {

        if(!loading) {

            setLoading(true);


            const obj = {
                email: email
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
            <HeaderSimple />
            <main className="w-full min-h-screen block">
                <section className='flex relative justify-center '>
                    <div className="w-[55%] max-sm:w-full h-full lg:pt-20 pt-10 pb-10 px-20 max-sm:px-10">
                        <div className="w-full bg-white h-auto rounded-2xl p-5">
                            <h2 className="text-[#000000] text-[30px] font-[500] text-left">Reset Password</h2>
                            <p className='w-full text-blue-gray lg:text-[15px] text-[14px] mb-5 text-left'>Enter your email address to reset password</p>
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
                                            label="Email"
                                            {...register('email')}
                                            type="email"
                                            variant="outline"
                                            className="mb-5"
                                            placeholder='enter your email'
                                            error={errors.email?.message!}
                                        />

                                        <Button
                                            className="h-14 w-full mt-5 text-white !font-[400] rounded-lg"
                                            loading={loading || !errors}
                                            disabled={loading}
                                        >
                                            {loading ? "Loading..." : "Send Reset Link"}
                                        </Button>
                                </form>
                            </div>
                            <a href={ROUTES.LOGIN} className='text-primary font-[600] my-7 text text-[#475569] lg:text-[14px] text-[13px] block'>Back to Login</a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ResetPassword;