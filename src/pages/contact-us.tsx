import { useState } from 'react';
import Footer from '../layouts/generic/footer';
import Header from '../layouts/generic/header';
import Subscribe from '../layouts/generic/subscribe';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from '../components/forms/input';
import Alert from '../components/forms/alert';
import Button from '../components/forms/button';
import TextArea from '../components/forms/text-area';
import { ic_phone } from '../lib/images';
import { ic_mail } from '../lib/images';
import { ic_location } from '../lib/images';
import Checkbox from '../components/forms/checkbox';
//import { ROUTES } from '../lib/route-links';

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    policy: boolean;
  }

  const contactSchema = yup.object().shape({
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
    message: yup.string().required('Message is required')
      .min(10, 'Message must be at least 10 characters long'),
    policy: yup.boolean().required("The privacy policy must be checked.")
          .oneOf([true], "The privacy policy must be agreed to."),
  });

  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    policy: false
  };

const ContactUs = () => {   

    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const {
      register,
      handleSubmit,
  
      formState: { errors },
    } = useForm<FormValues>({
      defaultValues,
      resolver: yupResolver(contactSchema),
    });

    function onSubmit({ firstName, lastName, email, message }: FormValues) {

      if(!loading) {

          setLoading(true);

          const obj = {
              firstName: firstName,
              lastName: lastName,
              email: email,
              message: message
          };


          console.log(obj);

          window.setTimeout(() => {
              setLoading(false);
          }, 4000);
            
            
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
  }

    return (
        <div className="w-full justify-start items-center bg-white">
            <Header/>
            <main className="w-full block">
                <section className='w-full px-5 lg:px-20 pt-10 pb-10 lg:pt-20'>
                    <div className='w-full text-center'>
                        <h1 className='w-full text-secondary mb-3 lg:mb-0 lg:font-bold font-semibold lg:text-[40px] text-[25px] text-left'>Get In Touch With Us</h1>
                        <p className='w-full text-blue-gray lg:text-[17px] text-[14px] mb-8 mt-2 text-left'>Have questions or need assistance? We're here to help!</p>
                    </div>
                </section>
                <section className='w-full px-5 lg:px-20 pb-10'>
                    <div className='w-full grid grid-cols-2 gap-10'>
                      <div className='w-full p-8 max-sm:order-2 max-sm:col-span-full bg-[#F9F9F9] rounded-lg'>
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
                                   label='First Name'
                                    {...register('firstName')}
                                    type="text"
                                    variant="solid"
                                    placeholder='enter your first name'
                                    className="lg:mb-0 mb-5 w-full rounded-lg max-sm:col-span-full"
                                    error={errors.firstName?.message!}
                                  />

                                  <Input
                                    label='Last Name'
                                    {...register('lastName')}
                                    type="text"
                                    variant="solid"
                                    placeholder='enter your last name'
                                    className="lg:mb-0 mb-5 w-full rounded-lg max-sm:col-span-full"
                                    error={errors.lastName?.message!}
                                  />

                            </div>

                                <Input
                                    label='Email'
                                    {...register('email')}
                                    type="email"
                                    variant="solid"
                                    className="mb-7 w-full"
                                    placeholder='you@email.com'
                                    error={errors.email?.message!}
                                />

                            <TextArea
                              label='Message'
                              {...register('message')}
                              variant="solid"
                              placeholder='enter your message'
                              className="mb-7 w-full"
                              error={errors.message?.message!}
                            />

                            <Checkbox {...register('policy')} label='You agree to our friendly privacy policy'/>

                            <Button
                                className="bg-primary border-primary text-white text-[13px] w-full rounded-lg h-14 mt-10"
                                loading={loading || !errors}
                                disabled={loading}
                            >
                                {loading ? "Loading..." : "Send Message"}
                            </Button>
                              
                          </form>
                      </div>
                      <div className='w-full lg:px-14 grid grid-cols-2 gap-x-12 max-sm:col-span-full max-sm:order-1 lg:h-[400px]'>
                          <div className='w-full max-sm:col-span-full max-sm:mb-10'>
                            <img 
                                  src={ic_mail}
                                  alt='Mail Icon'
                                  className='w-5 mb-2'
                              />
                              <h4 className='text-[22px] text-secondary font-[500] text-left'>EMAIL</h4>
                              <p className='w-full text-blue-gray lg:text-[13px] text-[12px] text-left my-3'>Our friendly team is here to help</p>
                              <span className='w-full text-[#141413] lg:text-[13px] text-[12px] text-left block'>info.silverswift@gmail.com</span>
                          </div>

                          <div className='w-full max-sm:col-span-full max-sm:mb-10'>
                              <img 
                                  src={ic_phone}
                                  alt='Phone Icon'
                                  className='w-5 mb-2'
                              />
                              <h4 className='text-[22px] text-secondary font-[500] text-left'>PHONE</h4>
                              <p className='w-full text-blue-gray lg:text-[13px] text-[12px] text-left my-3'>Mon -Fri from 8am to 5pm</p>
                              <p className='w-full text-[#141413] lg:text-[13px] text-[12px] text-left font-[600]'>Lagos Line: <span className='font-[400]'>08033559965, 08063855414</span><br />Port Harcourt Line: <span className='font-[400]'>09048413640</span></p>
                          </div>
                          <div className='w-full max-sm:col-span-full'>
                              <img 
                                  src={ic_location}
                                  alt='Location Icon'
                                  className='w-5 mb-2'
                              />
                              <h4 className='text-[22px] text-secondary font-[500] text-left'>OFFICE</h4>
                              <p className='w-full text-blue-gray lg:text-[13px] text-[12px] text-left my-3'>Come say hello at our office HQ.</p>
                              <span className='w-full text-[#141413] lg:text-[13px] text-[12px] text-left block'>Shop 3 Praise Plaza opp. Fidelity bank Igando/Ikotun road, Lagos State.</span>
                          </div>
                      </div>
                    </div>
                </section>
                
               <Subscribe />
               <Footer />
            </main>
        </div>
    );
};

export default ContactUs;