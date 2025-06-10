import Footer from '../layouts/generic/footer';
import Header from '../layouts/generic/header';
import Subscribe from '../layouts/generic/subscribe';
import { banner_about } from '../lib/images';
import { ic_community_empowerment } from '../lib/images';
import { ic_financial_inclusion } from '../lib/images';
import { ic_innovation_simplicity } from '../lib/images';
import { ic_intergrity_accountability } from '../lib/images';
import { ic_sustainability_growth } from '../lib/images';
import { ic_trust_transparency } from '../lib/images';
import { team1 } from '../lib/images';
import { team2 } from '../lib/images';
import { team3 } from '../lib/images';

const About = () => {   

    return (
        <div className="w-full justify-start items-center bg-white">
            <Header/>
            <main className="w-full block">
                <section className='w-full px-5 lg:px-20 py-10 lg:py-20'>
                    <div className='w-full text-center'>
                        <h1 className='lg:w-2/3 w-full text-secondary mx-auto mb-3 lg:mb-0 lg:font-bold font-semibold text-center lg:text-[40px] text-[24px]'>Bridging Food Scarcity and Financial Dependence</h1>
                    </div>
                    <div className='w-full flex justify-center mt-10'>
                        <img className='w-full rounded-lg' src={banner_about} alt="Banner"/>
                    </div>
                </section>
                <section className='pt-20 pb-10 lg:px-20 px-5'>
                    <h4 className='lg:text-[30px] text-[22px] font-semibold text-secondary mb-3'>SLIVERSWIFT VENTURES</h4>
                    <p className='lg:w-2/4 w-full text-blue-gray text-center lg:text-[17px] text-[14px] mx-auto mb-8 italic'>…Feast your senses, Elevate family needs</p>
                    <div className='w-full pb-10 lg:pt-10 pt-0'>
                        <p className='text-blue-gray text-[15px] text-left mb-5'><span className='text-primary font-semibold'>SILVERSWIFT VENTURES</span> is a savings and food network marketing and distribution organization, a gateway to ensure your household food security and financial stability. We provide a wonderful prospect to greatly support your home needs for food supply. SilverSwift Ventures is duly registered with the Corporate Affairs Commission (CAC), Nigeria.</p>
                        <p className='text-blue-gray text-[15px] text-left mb-5'>At SilverSwift, we envision a future where everyone has access to an affordable, sustainable system, and imbibe the culture of savings and investments.</p>
                        <p className='text-blue-gray text-[15px] text-left'>Our business activities span across several sectors, including agricultural food storage, production, and packaging, distributorship, sales, and collaborations on projects. We aim to continually expand our business horizons.</p>
                    </div>
                    <div className='w-full pb-3'>
                        <div className='mb-5'>
                            <h4 className='lg:text-[25px] text-[20px] text-secondary text-left font-[600]'>Our Mission</h4>
                            <p className='text-blue-gray text-[15px] text-left mb-5'>To empower individuals and communities by providing them with opportunities to achieve food and financial independence to have an improved quality of life.</p>
                        </div>
                    </div>
                    <div className='w-full pb-3'>
                        <div className='mb-5'>
                            <h4 className='lg:text-[25px] text-[20px] text-secondary text-left font-[600]'>Our Vision</h4>
                            <p className='text-blue-gray text-[15px] text-left mb-5'>To be a leading food marketing organization that transforms the way people think about and consume their savings and convert into investments.</p>
                        </div>
                    </div>
                    <div className='w-full pb-3'>
                        <div className='mb-5'>
                            <h4 className='lg:text-[25px] text-[20px] text-secondary text-left font-[600]'>Our Values</h4>
                            <p className='text-blue-gray text-[15px] text-left mb-5'>These are the core values at the heart of the engine that drives everything that we believe in: Commitment, Integrity and Passion</p>
                        </div>
                    </div>
                    <div className='w-full py-5 grid grid-cols-3 gap-5 mt-5'>
                        <div className='max-sm:col-span-3 p-5 h-[250px] max-sm:p-3 rounded border border-[#E4E7EC]'>   
                            <img 
                                src={ic_community_empowerment}
                                alt='Community Empowerment Icon'
                                className='w-10'
                            />
                            <p className='text-secondary text-[16px] font-[500] text-left my-3'>Community Empowerment</p>
                            <span className='block text-blue-gray lg:text-[14px] text-[13px] font-[400] text-left'>We believe in the power of collective saving. By working together, we strengthen our community and enable everyone to achieve their financial goals, no matter how big or small.</span>
                        </div>


                        <div className='max-sm:col-span-3 p-5 h-[250px] max-sm:p-3 rounded border border-[#E4E7EC]'>
                            <img 
                                src={ic_trust_transparency}
                                alt='Trust & Transparency Icon'
                                className='w-10'
                            />
                            <p className='text-secondary text-[16px] font-[500] text-left my-3'>Trust & Transparency</p>
                            <span className='block text-blue-gray lg:text-[14px] text-[13px] font-[400] text-left'>Trust is at the heart of everything we do. We are committed to being transparent in all our processes, ensuring our users feel confident and secure in their savings journey.</span>
                        </div>

                        <div className='max-sm:col-span-3 p-5 h-[250px] max-sm:p-3 rounded border border-[#E4E7EC]'>
                            <img 
                                src={ic_financial_inclusion}
                                alt='Financial Inclusion Icon'
                                className='w-10'
                            />
                            <p className='text-secondary text-[16px] font-[500] text-left my-3'>Financial Inclusion</p>
                            <span className='block text-blue-gray lg:text-[14px] text-[13px] font-[400] text-left'>Everyone deserves access to financial opportunities. We strive to make saving accessible and inclusive, providing tools and resources for individuals from all walks of life to build a secure financial future.</span>
                        </div>

                        <div className='max-sm:col-span-3 p-5 h-[250px] max-sm:p-3 rounded border border-[#E4E7EC]'>
                            <img 
                                src={ic_innovation_simplicity}
                                alt='Innovation & Simplicity Icon'
                                className='w-10'
                            />
                            <p className='text-secondary text-[16px] font-[500] text-left my-3'>Innovation & Simplicity</p>
                            <span className='block text-blue-gray lg:text-[14px] text-[13px] font-[400] text-left'>We embrace innovation to create simple, user-friendly solutions that make saving easier, smarter, and more effective for all our users.</span>
                        </div>

                        <div className='max-sm:col-span-3 p-5 h-[250px] max-sm:p-3 rounded border border-[#E4E7EC]'>
                            <img 
                                src={ic_intergrity_accountability}
                                alt='Integrity & Accountability Icon'
                                className='w-10'
                            />
                            <p className='text-secondary text-[16px] font-[500] text-left my-3'>Integrity & Accountability</p>
                            <span className='block text-blue-gray lg:text-[14px] text-[13px] font-[400] text-left'>We operate with the highest level of integrity and take full responsibility for our services. Our commitment to accountability ensures that we always deliver on our promises and maintain the trust of our users.</span>
                        </div>

                        <div className='max-sm:col-span-3 p-5 h-[250px] max-sm:p-3 rounded border border-[#E4E7EC]'>
                            <img 
                                src={ic_sustainability_growth}
                                alt='Sustainability & Growth Icon'
                                className='w-10'
                            />
                            <p className='text-secondary text-[16px] font-[500] text-left my-3'>Sustainability & Growth</p>
                            <span className='block text-blue-gray lg:text-[14px] text-[13px] font-[400] text-left'>We are dedicated to helping our users grow their savings in a sustainable way. By promoting long-term financial growth and stability, we contribute to a more prosperous future for everyone.</span>
                        </div> 
                    </div>
                </section>
                <section className='pt-20 pb-10 lg:px-20 px-5'>
                    <div className='mb-5'>
                        <h4 className='lg:text-[30px] text-[22px] font-semibold text-secondary mb-3'>Meet Our Executive Team</h4>
                    </div>
                    <div className='w-full py-5 lg:grid lg:grid-cols-3 lg:gap-5'>
                        <div className='max-sm:mb-10'>
                            <img 
                                src={team1}
                                alt='Team member 1'
                                className='rounded-lg border-b-4 border-primary'
                            />
                            <p className='text-secondary text-[16px] font-[500] text-left mb-3 mt-7'>Lady Chinonye</p>
                            <span className='block text-blue-gray lg:text-[14px] text-[13px] font-[400] text-left'>CEO & Founder</span>
                        </div>
                        <div className='max-sm:mb-10'>
                            <img 
                                src={team2}
                                alt='Team member 2'
                                className='rounded-lg border-b-4 border-primary'
                            />
                            <p className='text-secondary text-[16px] font-[500] text-left mb-3 mt-7'>Mrs. Chinelo</p>
                            <span className='block text-blue-gray lg:text-[14px] text-[13px] font-[400] text-left'>Chief Financial Officer (CFO)</span>
                        </div>
                        <div className='max-sm:mb-10'>
                            <img 
                                src={team3}
                                alt='Team member 3'
                                className='rounded-lg border-b-4 border-primary'
                            />
                            <p className='text-secondary text-[16px] font-[500] text-left mb-3 mt-7'>Mrs. Chibuzor</p>
                            <span className='block text-blue-gray lg:text-[14px] text-[13px] font-[400] text-left'>Head of Operations</span>
                        </div>
                    </div>
                </section>
               <Subscribe />
               <Footer />
            </main>
            
        </div>
    );
};

export default About;