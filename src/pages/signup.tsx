import { useState } from 'react';
import Header from '../layouts/generic/header';
import { ROUTES } from '../lib/route-links';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Alert from '../components/forms/alert';
import Input from '../components/forms/input';
import PasswordInput from '../components/forms/password-input';
import Button from '../components/forms/button';

//import axios from 'axios';

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }

  const userSchema = yup.object().shape({
    firstName: yup
      .string()
      .required('First name is required'),
    lastName: yup
      .string()
      .required('Last name is required'),
    email: yup
      .string()
      .email("Invalid email format")
      .required('Email is required'),
    password:  yup.string().required('Password is required')
      .min(5, 'Password must be at least 5 characters long'),
  });

  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };
  

const SignUp = () => {

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
    
    function onSubmit({ firstName, lastName, email, password }: FormValues) {

        if(!loading) {

            setLoading(true);


            const obj = {
                firstName: firstName,
                lastName: lastName,
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
        <div className="w-full justify-start items-center bg-light-gray">
            <Header />
            <main className="w-full block">
                <section className='flex relative justify-center bg-light-gray'>
                    <div className="w-[55%] max-sm:w-full h-full lg:pt-20 pt-10 pb-10 px-20 max-sm:px-10 overflow-y-auto">
                        <div className="w-full bg-white h-auto rounded-2xl p-5">
                            <h2 className="text-[#000000] text-[30px] font-[500] text-left">Create Account</h2>
                            <p className='w-full text-blue-gray lg:text-[15px] text-[14px] mb-5 text-left'>Let’s go! Create an account ✨</p>
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

                                        <div className='w-full grid grid-cols-2 gap-4 mb-7'>
                                            <Input
                                                label="First Name"
                                                {...register('firstName')}
                                                type="text"
                                                variant="outline"
                                                placeholder='enter your first name'
                                                error={errors.firstName?.message!}
                                            />

                                            <Input
                                                label="Last Name"
                                                {...register('lastName')}
                                                type="text"
                                                variant="outline"
                                                placeholder='enter your last name'
                                                error={errors.lastName?.message!}
                                            />
                                        </div>

                                        <Input
                                            label="Email"
                                            {...register('email')}
                                            type="email"
                                            variant="outline"
                                            className="mb-5"
                                            placeholder='enter your email'
                                            error={errors.email?.message!}
                                        />

                                        <PasswordInput
                                            label="Password"
                                            {...register('password')}
                                            error={errors.password?.message!}
                                            variant="outline"
                                            placeholder='enter your password'
                                            className="mb-5"
                                        />

                                        <div className='w-full grid lg:grid-cols-3 grid-cols-2 gap-2'>
                                            <div className='flex gap-2 rounded-full bg-[#F8FAFC] p-2 items-center max-sm:col-span-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#94a3b8" className="w-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg> 
                                                <span className='text-[11px] text-blue-gray min-w-[120px]'>At least 5 characters</span>
                                            </div>
                                            <div className='flex gap-2 rounded-full bg-[#F8FAFC] items-center p-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#94a3b8" className="w-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg> 
                                                <span className='text-[11px] text-blue-gray min-w-[70px]'>1 lowercase</span>
                                            </div>
                                            <div className='flex gap-2 rounded-full bg-[#F8FAFC] items-center p-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#94a3b8" className="w-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg> 
                                                <span className='text-[11px] text-blue-gray min-w-[70px]'>1 uppercase</span>
                                            </div>
                                            <div className='flex gap-2 rounded-full bg-[#F8FAFC] items-center p-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#94a3b8" className="w-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg> 
                                                <span className='text-[11px] text-blue-gray min-w-[70px]'>1 number</span>
                                            </div>
                                            <div className='flex gap-2 rounded-full bg-[#F8FAFC] items-center p-2 max-sm:col-span-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#94a3b8" className="w-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg> 
                                                <span className='text-[11px] text-blue-gray min-w-[120px]'>1 special character</span>
                                            </div>
                                        </div>

                                        <Button
                                            className="h-14 w-full mt-8 text-white !font-[400] rounded-lg"
                                            loading={loading || !errors}
                                            disabled={loading}
                                        >
                                            {loading ? "Loading..." : "Sign Up"}
                                        </Button>

                                </form>
                            </div>
                        </div>
                        <p className='mt-7 mb-10 text text-[#475569] lg:text-[14px] text-[13px]'>Already have an account? <a href={ROUTES.LOGIN} className='text-primary font-[600]'>Login</a></p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default SignUp;