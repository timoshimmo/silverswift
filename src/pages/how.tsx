import Footer from '../layouts/generic/footer';
import Header from '../layouts/generic/header';
import Subscribe from '../layouts/generic/subscribe';
//import { ROUTES } from '../lib/route-links';

const HowItWorks = () => {   

    return (
        <div className="w-full justify-start items-center bg-white">
            <Header/>
            <main className="w-full block">
                <section className='w-full px-5 lg:px-20 py-10 lg:py-20'>
                    <div className='w-full text-center'>
                        <h1 className='lg:w-2/3 w-full text-secondary mx-auto mb-3 lg:font-bold font-semibold text-center lg:text-[40px] text-[25px]'>How it works</h1>
                        <p className='lg:w-4/5 w-full text-blue-gray text-center lg:text-[15px] text-[13px] mx-auto mb-8'>We aim to create a sustainable and empowering network where individuals and families can save, access affordable food supplies, and build long-term financial resilience. By combining savings with food distribution, we strive to strengthen communities, enhance livelihoods, and ensure that no one has to worry about their essential needs.</p>
                    </div>
                </section>
                <section className='lg:pb-0 pb-10 lg:px-20 px-5'>
                    <div className='flex lg:gap-5 gap-2 bg-light-gray rounded-lg lg:p-5 p-3'>
                        <p className='text-primary font-[600] text-[10px] lg:text-[14px] lg:py-3 py-2 px-2 lg:px-5 rounded-lg bg-white'>Register Your Account</p>
                        <p className='text-blue-gray font-[400] text-[10px] lg:text-[14px] py-2'>Fund Your Account</p>
                        <p className='text-blue-gray font-[400] text-[10px] lg:text-[14px] py-3 max-sm:hidden'>Activate Fast-Track</p>
                        <p className='text-blue-gray font-[400] text-[10px] lg:text-[14px] py-3 max-sm:hidden'>Withdraw Your Funds</p>
                        <p className='text-blue-gray font-[400] text-[10px] lg:text-[14px] py-3 max-sm:hidden'>Use Multiple Accounts</p>
                    </div>
                    <div className='w-full pt-10 lg:mt-5 grid grid-cols-3 gap-5'>
                        <div className='max-sm:col-span-3 p-5 max-sm:p-3 rounded-md border border-[#E4E7EC]'>   
                            <p className='text-secondary text-[16px] font-[500] text-left my-3'>Access Registration Page</p>
                            <span className='block text-blue-gray lg:text-[14px] text-[13px] font-[400] text-left'>To get started as a new user, kindly click on the Sign Up button on the homepage header navbar section and this will redirect you to the registration page.<br /><br />NB: YOU NEED TO PAY THE SUM OF ₦3,000 FOR REGISTRATION FEE ONCE YOU'RE REDIRECTED TO THE PAYMENT SECTION AFTER A SUCCESSFUL REGISTRATION<br /><br />NB: IF YOU UPLOADED A FAKE PAYMENT PROOF, YOUR ACCOUNT WOULD BE FLAGGED AND WOULD NOT HAVE ACCESS TO LOGIN USING YOUR CREDENTIALS.</span>
                        </div>
                        <div className='max-sm:col-span-3 p-5 max-sm:p-3 rounded-md border border-[#E4E7EC]'>   
                            <p className='text-secondary text-[16px] font-[500] text-left my-3'>Input correct details & Submit</p>
                            <span className='block text-blue-gray lg:text-[14px] text-[13px] font-[400] text-left'>On the registration page, input your correct informations on each provided fields but take note that the referral id field in the registration form page is optional.<br /><br />After a successful registration, you would be redirected to the payment option page where you would have to select your preferred payment option (manual transfer to Noble Merry Bank Account or Automated Online Payment) to pay for the sum of ₦3,000 FOR REGISTRATION FEE.</span>
                        </div>
                        <div className='max-sm:col-span-3 p-5 max-sm:p-3 rounded-md border border-[#E4E7EC]'>   
                            <p className='text-secondary text-[16px] font-[500] text-left my-3'>Account Activation Processes</p>
                            <span className='block text-blue-gray lg:text-[14px] text-[13px] font-[400] text-left'>If you transferred to our bank account manually, you would need to upload a proof of payment and this payment proof would be reviewed and your noble merry member account would be activated within 24-48hrs, that is when you can now have access to login to your dashboard.<br /><br />But if you're using/used the flutterwave online payment gateway option, your noble merry member account would be activated instantly after successful payment and you would be redirected to your noble merry dashboard from the payment gateway.</span>
                        </div>
                    </div>
                </section>
               <Subscribe />
               <Footer />
            </main>
            
        </div>
    );
};

export default HowItWorks;