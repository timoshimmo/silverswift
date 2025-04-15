import { useState } from 'react';
import { silverswidtLogo } from '../../lib/images';
//import { ROUTES } from '../../lib/route-links';
import {
    Typography,
  } from "@material-tailwind/react";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Alert from '../../components/forms/alert';
import Input from '../../components/forms/input';
import Button from '../../components/forms/button';
import { ic_x } from '../../lib/images';
import { ic_facebook } from '../../lib/images';
import { ic_instagram } from '../../lib/images';
import { ic_linkedin } from '../../lib/images';

type FormValues = {
    email: string;
}

const subscribeSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required('Email is required'),
  });


  const defaultValues = {
    email: "",
  };

const Footer = () => {

    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const {
        register,
        handleSubmit,
    
        formState: { errors },
      } = useForm<FormValues>({
        defaultValues,
        resolver: yupResolver(subscribeSchema),
      });


      function onSubmit({ email }: FormValues) {

        if(!loading) {
            console.log(email);
            setLoading(true);

            window.setTimeout(() => {
                setLoading(false);
            }, 4000);
        }
        
         /* if(!loading) {

            setLoading(true);
  
  
            const obj = {
                email: email,
            };
  
            console.log(obj);
  
            window.setTimeout(() => {
                setLoading(false);
              }, 1000);
  
           
          SERVICES.post(`admins/register`, obj)
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

    return (
        <section className='w-full lg:pt-20 pt-10 pb-10 border-t border-[#E4E7EC] lg:px-20 px-5'>
            <div className='max-sm:hidden grid grid-cols-3 pb-5'>
                <div className='w-full'>
                    <div className='w-full flex gap-4 items-center'>
                        <Typography
                            as="a"
                            href="#"
                            className="cursor-pointer font-medium"
                        >
                            <img
                                src={silverswidtLogo}
                                alt=""
                                title="Logo"
                                className='w-16'
                            />
                        </Typography>
                        <h4 className='text-primary font-bold text-[20px]'>SilverSwift Ventures</h4>
                    </div>
                    <p className='text-[#344054] text-[14px] font-normal text-left my-8'>Be the first to receive all the recent updates, articles, and valuable materials.</p>
                    
                    
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

                        <div className='w-full flex gap-3 items-center'>

                            <Input
                                label=""
                                {...register('email')}
                                type="email"
                                variant="solid"
                                className="w-full rounded-lg"
                                placeholder='Email address'
                                error={errors.email?.message!}
                            />

                            <Button
                                className="bg-primary text-white text-[13px] w-1/3 rounded-lg"
                                loading={loading || !errors}
                                disabled={loading}
                            >
                                {loading ? "Loading..." : "Subscribe"}
                            </Button>

                        </div>
                    </form>
                    
                </div>
                <div className='w-full flex justify-center'>
                    <div>
                        <h6 className="text-[#98A2B3] text-[14px] text-left mb-6 font-semibold">Company</h6>
                        <ul>
                            <li className="mb-4"><a href="/" className="text-[#667185] text-[15px] font-[500] w-full block text-left">FAQs</a></li>
                            <li className="mb-4"><a href="/" className="text-[#667185] text-[15px] font-[500] w-full block text-left">How it works</a></li>
                            <li className="mb-4"><a href="/" className="text-[#667185] text-[15px] font-[500] w-full block text-left">Gallery</a></li>
                        </ul>
                    </div>     
                </div>
                    
                <div className='w-full'>
                    <div className='w-full flex justify-end gap-4 items-center'>
                        <span className='text-[#464649] text-[14px] font-normal'>Follow Us</span>
                        <div className='flex gap-2'>
                            <Typography
                                as="a"
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                                className="cursor-pointer font-medium"
                            >
                                <img
                                    src={ic_facebook}
                                    alt=""
                                    title="Logo"
                                    className='w-7'
                                />
                            </Typography>
                            <Typography
                                as="a"
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                                className="cursor-pointer font-medium"
                            >
                                <img
                                    src={ic_x}
                                    alt=""
                                    title="Logo"
                                    className='w-7'
                                />
                            </Typography>
                            <Typography
                                as="a"
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                                className="cursor-pointer font-medium"
                            >
                                <img
                                    src={ic_instagram}
                                    alt=""
                                    title="Logo"
                                    className='w-7'
                                />
                            </Typography>
                            <Typography
                                as="a"
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                                className="cursor-pointer font-medium"
                            >
                                <img
                                    src={ic_linkedin}
                                    alt=""
                                    title="Logo"
                                    className='w-7'
                                />
                            </Typography>
                        </div>
                    </div>
                    <div className='w-full flex justify-end gap-4 items-center mt-5'>
                        <span className='text-[15px] text-[#464649]'>
                            Contact us 
                        </span>
                        <Typography
                                as="a"
                                href="mailto:info@silverswift.com"
                                target="_blank"
                                rel="noreferrer"
                                className="cursor-pointer font-medium text-[15px] text-[#464649]" 
                            >
                               info@silverswift.com
                        </Typography>
                    </div>
                </div>
            </div>
            <div className='max-sm:hidden w-full flex justify-between border-t border-[#E4E7EC] pt-10'>
                <div className='flex gap-10'>
                    <Typography
                            as="a"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="cursor-pointer font-[400] text-[15px] text-[#464649]" 
                        >
                            Privacy Policy
                    </Typography>
                    <Typography
                            as="a"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="cursor-pointer font-[400] text-[15px] text-[#464649]" 
                        >
                            Terms of Use
                    </Typography>
                </div>
                <div className='flex justify-end'>
                    <p className='text-[14px] text-[#464649]'>Designed by INEDGE. © 2025 All Rights Reserved.</p>
                </div>
            </div>

            <div className='lg:hidden pb-5'>
                <Typography
                    as="a"
                    href="#"
                    className="cursor-pointer font-medium"
                >
                    <img
                        src={silverswidtLogo}
                        alt=""
                        title="Logo"
                        className='w-9'
                    />
                </Typography>
                <div className='grid grid-cols-3 mt-4'> 
                    <div className='col-span-2'>
                        <div className='w-full flex gap-2 items-center'>
                            <span className='text-[#464649] xs:text-[12px] text-[13px] font-normal'>Follow Us</span>
                            <div className='flex gap-2'>
                                <Typography
                                    as="a"
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="cursor-pointer font-medium"
                                >
                                    <img
                                        src={ic_facebook}
                                        alt=""
                                        title="Logo"
                                        className='w-6'
                                    />
                                </Typography>
                                <Typography
                                    as="a"
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="cursor-pointer font-medium"
                                >
                                    <img
                                        src={ic_x}
                                        alt=""
                                        title="Logo"
                                        className='w-6'
                                    />
                                </Typography>
                                <Typography
                                    as="a"
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="cursor-pointer font-medium"
                                >
                                    <img
                                        src={ic_instagram}
                                        alt=""
                                        title="Logo"
                                        className='w-6'
                                    />
                                </Typography>
                                <Typography
                                    as="a"
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="cursor-pointer font-medium"
                                >
                                    <img
                                        src={ic_linkedin}
                                        alt=""
                                        title="Logo"
                                        className='w-6'
                                    />
                                </Typography>
                            </div>
                        </div>

                        <div className='w-full flex gap-4 items-center mt-3'>
                            <span className='xs:text-[12px] text-[13px] text-[#464649]'>
                                Contact us
                            </span>
                            <Typography
                                    as="a"
                                    href="mailto:info@silverswift.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="cursor-pointer font-medium xs:text-[12px] text-[13px] text-[#464649]" 
                                >
                                info@silverswift.com
                            </Typography>
                        </div>
                    </div>
                    <div className='col-span-1 text-end'>
                        <Typography
                                as="a"
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                                className="cursor-pointer font-[400] text-[13px] text-[#464649]" 
                            >
                                Privacy Policy
                        </Typography>
                        <Typography
                                as="a"
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                                className="cursor-pointer font-[400] text-[13px] text-[#464649] mt-3" 
                            >
                                Terms of Use
                        </Typography>
                    </div>
                </div>
                <div className='flex justify-center pt-10'>
                    <p className='text-[12px] text-[#464649]'>Designed by INEDGE. © 2025 All Rights Reserved.</p>
                </div>   
               
            </div>
        </section>
    );


};

export default Footer;