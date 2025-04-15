import { useState } from 'react';
import Footer from '../layouts/generic/footer';
import Subscribe from '../layouts/generic/subscribe';
import Header from '../layouts/generic/header';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot'; 
import { Carousel, IconButton } from "@material-tailwind/react";
import { homeBanner } from '../lib/images';
import { ic_community_empowerment } from '../lib/images';
import { ic_financial_inclusion } from '../lib/images';
import { ic_innovation_simplicity } from '../lib/images';
import { ic_intergrity_accountability } from '../lib/images';
import { ic_sustainability_growth } from '../lib/images';
import { ic_trust_transparency } from '../lib/images';
import { img_home_how_started } from '../lib/images';
import { ic_rocket } from '../lib/images';
import { img_home_testimonial } from '../lib/images';
import { ic_carousel_arrow_left } from '../lib/images';
import { ic_carousel_arrow_right } from '../lib/images';
import Panel from '../components/accordion/panel';
import { ROUTES } from '../lib/route-links';
//import { ROUTES } from '../lib/route-links';


const Home = () => {

    const [activeTab, setActiveTab] = useState<number | undefined>(-1);

    const panels = [
        {
            label: 'What is SilverSwift Ventures?',
            content: 'SILVERSWIFT VENTURES is a savings and food network marketing and distribution organization, a gateway to ensure your household food security and financial stability.',
        },
        {
            label: 'How does the savings program work?',
            content: 'We aim to create a sustainable and empowering network where individuals and families can save, access affordable food supplies, and build long-term financial resilience.',
        },	
        {
            label: 'What are the benefits of saving with SilverSwift Ventures?',
            content: `Commissions are directly transferred our rider's wallet on successful delivery. Withdrawals only happens at the end of the week`,
        },
        {
            label: 'Who can join SilverSwift Ventures?',
            content: 'At SilverSwift, we envision a future where everyone has access to an affordable, sustainable system, and imbibe the culture of savings and investments.'

        },
    ];

    const activateTab = (index: number | undefined) => {
        setActiveTab((prevState: number | undefined) => ( prevState === index ? -1 : index));
    }


    return (
        <div className="w-full justify-start items-center bg-white">
            <Header/>
            <main className="w-full block">
                <section className='w-full px-5 lg:px-20 py-10 lg:py-20'>
                    <div className='w-full text-center'>
                        <h1 className='lg:w-2/3 w-full text-secondary mx-auto mb-3 lg:mb-0 lg:font-bold font-semibold text-center lg:text-[40px] text-[25px]'>Food Security and Financial Growth in One Solution</h1>
                        <p className='lg:w-1/2 w-full text-blue-gray text-center lg:text-[15px] text-[13px] mx-auto mb-8'>At SilverSwift Ventures, we combine smart savings with food distribution to ensure your home stays stocked and your finances stay strong</p>
                        <div className='w-full flex gap-x-4 justify-center max-sm:flex-col max-sm:items-center mb-10'>
                            <a href={ROUTES.HOW_IT_WORKS} className='lg:w-[160px] w-full rounded-lg border border-primary py-4 px-8 text-primary text-[13px] font-semibold'>How it Works</a>
                            <a href="/" className='lg:w-[160px] w-full rounded-lg bg-primary py-4 px-8 text-[#FFFFFF] text-[13px] font-semibold max-sm:mt-3'>Get Started</a>
                        </div>
                        
                    </div>
                    <div className='w-full flex justify-center mt-10'>
                        <img className='w-full rounded-lg' src={homeBanner} alt="Banner"/>
                    </div>
                </section>

                <section className='max-sm:hidden w-full grid grid-cols-5 divide-x divide-[#FFFFFF] gap-5 px-10 py-6 bg-primary-light'>
                    <div className='py-5 px-4 text-left'>
                        <p className='text-[#FFFFFF] font-[400] text-[12px]'>
                            HOUSE HOLDS
                        </p>
                        <h6 className='text-[#FFFFFF] font-semibold text-[20px]'>
                            50k+
                        </h6>
                    </div>
                    <div className='py-5 px-4 text-left'>
                        <p className='text-[#FFFFFF] font-[400] text-[12px]'>
                            CUSTOMER SATISFACTION
                        </p>
                        <h6 className='text-[#FFFFFF] font-semibold text-[20px]'>
                            100%
                        </h6>
                    </div>
                    <div className='py-5 px-4 text-left'>
                        <p className='text-[#FFFFFF] font-[400] text-[12px]'>
                            SUCCESSFUL SAVINGS
                        </p>
                        <h6 className='text-[#FFFFFF] font-semibold text-[20px]'>
                            90k+
                        </h6>
                    </div>
                    <div className='py-5 px-4 text-left'>
                        <p className='text-[#FFFFFF] font-[400] text-[12px]'>
                            IMPROVED FOOD SECURITY
                        </p>
                        <h6 className='text-[#FFFFFF] font-semibold text-[20px]'>
                            88.95%
                        </h6>
                    </div>
                    <div className='py-5 px-4 text-left'>
                        <p className='text-[#FFFFFF] font-[400] text-[12px]'>
                            COMMUNITY ENGAGEMENT
                        </p>
                        <h6 className='text-[#FFFFFF] font-semibold text-[20px]'>
                            100%
                        </h6>
                    </div>
                </section>

                <section className='lg:hidden w-full py-6 bg-primary'>
                    <div className='grid grid-cols-2 divide-x divide-[#FFFFFF] px-4'>
                        <div className='py-3 px-4 text-left'>
                            <p className='text-[#FFFFFF] font-[400] text-[10px]'>
                                HOUSE HOLDS
                            </p>
                            <h6 className='text-[#FFFFFF] font-semibold text-[18px]'>
                                50k+
                            </h6>
                        </div>
                        <div className='lg:py-5 py-3 px-4 text-left'>
                            <p className='text-[#FFFFFF] font-[400] text-[10px]'>
                                CUSTOMER SATISFACTION
                            </p>
                            <h6 className='text-[#FFFFFF] font-semibold text-[18px]'>
                                100%
                            </h6>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 divide-x divide-[#FFFFFF] px-4 my-3'>
                        <div className='py-5 px-4 text-left'>
                            <p className='text-[#FFFFFF] font-[400] text-[10px]'>
                                SUCCESSFUL SAVINGS
                            </p>
                            <h6 className='text-[#FFFFFF] font-semibold text-[18px]'>
                                90k+
                            </h6>
                        </div>
                        <div className='py-5 px-4 text-left'>
                            <p className='text-[#FFFFFF] font-[400] text-[10px]'>
                                IMPROVED FOOD SECURITY
                            </p>
                            <h6 className='text-[#FFFFFF] font-semibold text-[18px]'>
                                88.95%
                            </h6>
                        </div>   
                    </div>
                    <div className='grid grid-cols-2 divide-x divide-[#FFFFFF] px-4'>
                        <div className='pb-3 px-4 text-left'>
                            <p className='text-[#FFFFFF] font-[400] text-[10px]'>
                                COMMUNITY ENGAGEMENT
                            </p>
                            <h6 className='text-[#FFFFFF] font-semibold text-[18px]'>
                                100%
                            </h6>
                        </div>
                    </div>
                </section>

                <section className='pt-20 pb-10 lg:px-20 px-5'>
                    <h4 className='lg:text-[30px] text-[22px] font-semibold text-secondary mb-3'>Why Choose Us</h4>
                    <p className='lg:w-2/4 w-full text-blue-gray text-center lg:text-[17px] text-[14px] mx-auto mb-8'>SilverSwift Ventures empowers your financial stability and food security with commitment, integrity, and passion for a prosperous future.</p>
                    <div className='w-full py-5 grid grid-cols-3 gap-5'>
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

                <section className='flex lg:justify-between items-center gap-10 max-sm:flex-col pt-20 pb-10 px-20 max-sm:px-5'>
                    <div className='lg:w-1/2 flex justify-end w-full max-sm:justify-center max-sm:order-1'>
                        <img
                            src={img_home_how_started}
                            alt=""
                            className='w-full'
                        />
                    </div>
                    <div className='lg:w-1/2 w-full max-sm:order-2'>
                        <h4 className='lg:text-[30px] text-[22px] font-semibold text-secondary text-left mb-2'>How to Get Started</h4>
                        <p className='lg:text-[17px] text-[14px] text-left text-blue-gray'>Join SilverSwift Ventures in three easy steps</p>
                        <div className='w-full mt-7'>
                            <div className='flex gap-4'>
                                <span className='h-8 w-8 flex justify-center items-center rounded-full bg-primary-gray text-primary font-semibold text-[14px]'>1</span>
                                <p className='w-5/6 lg:text-[14px] text-[13px] text-left text-blue-gray font-[300]'>Pay an initial membership registration sum of ₦5, 000 (NON-REFUNDABLE registration fee of ₦2,000 and savers First 2 weeks' thrift of ₦3,000 )</p>
                            </div>
                        </div>
                        <div className='w-full mt-7'>
                            <div className='flex gap-4'>
                                <span className='h-8 w-8 flex justify-center items-center rounded-full bg-primary-gray text-primary font-semibold text-[14px]'>2</span>
                                <p className='w-5/6 lg:text-[14px] text-[13px] text-left text-blue-gray font-[300]'>Click & fill the google form link <a href="https://forms.gle/dQXgiDAfddTghRrAA" className='text-primary hover:text-primary focus:text-priamry'>https://forms.gle/dQXgiDAfddTghRrAA</a> to register your profile and upload payment receipt.</p>
                            </div>
                        </div>
                        <div className='w-full mt-7'>
                            <div className='flex gap-4'>
                                <span className='h-8 w-8 flex justify-center items-center rounded-full bg-primary-gray text-primary font-semibold text-[14px]'>3</span>
                                <p className='w-5/6 lg:text-[14px] text-[13px] text-left text-blue-gray font-[300]'>Click the WhatsApp link on the google form to join our New Member WhatsApp group</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='w-full pt-20 pb-10 lg:px-20 px-5'>
                    <h4 className='lg:text-[30px] text-[22px] font-semibold text-secondary mb-3'>Benefits to Savers</h4>
                    <p className='lg:w-2/4 w-full text-blue-gray text-center lg:text-[17px] text-[14px] mx-auto mb-8'>Enjoy guaranteed returns, cashback, food rewards, and loyalty perks, all while securing your financial future.</p>
                    <div className='w-full lg:pb-4 flex max-sm:flex-col gap-4'>
                        <div className='w-full lg:p-5 lg:h-[200px] h-[170px] p-3 lg:border-b lg:border-[#E4E7EC]'>   
                            <img 
                                src={ic_rocket}
                                alt='Community Empowerment Icon'
                                className='lg:w-8 w-6'
                            />
                            <p className='text-[#000000] text-[16px] font-[500] text-left my-3'>Guaranteed Returns on Savings</p>
                            <span className='block text-blue-gray lg:text-[14px] text-[13px] font-[400] text-left'>Enjoy reliable and guaranteed returns on your savings, ensuring your financial goals are always within reach.</span>
                        </div>
                        <div className="max-sm:hidden inline-block min-h-[1em] w-0.5 self-stretch bg-[#E4E7EC] mb-4"></div> 
                        <div className='w-full lg:p-5 lg:h-[200px] h-[170px] max-sm:p-3 lg:border-b lg:border-[#E4E7EC]'>   
                            <img 
                                src={ic_rocket}
                                alt='Community Empowerment Icon'
                                className='lg:w-8 w-6'
                            />
                            <p className='text-[#000000] text-[16px] font-[500] text-left my-3'>Foodstuffs Incentives</p>
                            <span className='block text-blue-gray lg:text-[14px] text-[13px] font-[400] text-left'>Access exclusive foodstuff incentives, providing essential supplies for your household while you save.</span>
                        </div> 
                    </div>
                    <div className='w-full flex max-sm:flex-col gap-4'>
                        <div className='w-full lg:p-5 lg:h-[200px] h-[170px] p-3'>   
                            <img 
                                src={ic_rocket}
                                alt='Community Empowerment Icon'
                                className='lg:w-8 w-6'
                            />
                            <p className='text-[#000000] text-[16px] font-[500] text-left my-3'>100% Cashback Incentives</p>
                            <span className='block text-blue-gray lg:text-[14px] text-[13px] font-[400] text-left'>Get rewarded with up to 100% cashback on your savings, boosting your earnings and making your financial journey even more rewarding.</span>
                        </div>
                        <div className="max-sm:hidden inline-block min-h-[1em] w-0.5 self-stretch bg-[#E4E7EC]"></div> 
                        <div className='w-full lg:p-5 lg:h-[200px] h-[170px] p-3'>   
                            <img 
                                src={ic_rocket}
                                alt='Community Empowerment Icon'
                                className='lg:w-8 w-6' 
                            />
                            <p className='text-[#000000] text-[16px] font-[500] text-left my-3'>Assured Service Loyalty</p>
                            <span className='block text-blue-gray lg:text-[14px] text-[13px] font-[400] text-left'>Benefit from our assured loyalty program, ensuring continuous rewards and benefits for your ongoing commitment to SilverSwift Ventures.</span>
                        </div>
                    </div>
                </section>
                <section className='max-sm:hidden w-full pt-20 pb-10 px-20'>
                    <h4 className='text-[30px] font-semibold text-secondary mb-3'>Note to Savers</h4>
                    {/* <Timeline items={items} className='rounded-lg' /> */}
                    <Timeline color="primary" position="alternate" className='!px-20'>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector className="!bg-primary !w-[10px] rounded-t-lg" />
                            </TimelineSeparator>
                            <TimelineContent></TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator className='h-[180px]'>
                                <TimelineDot variant="outlined" style={{ borderColor: "#C829A9", margin: 0, height: 35, width: 35, borderWidth: 10 }}/>
                                <TimelineConnector className="!bg-primary !w-[10px]"/>
                            </TimelineSeparator>
                            <TimelineContent className='flex justify-end'>
                                <div className='w-full lg:w-[350px] lg:py-5 p-3'>   
                                    <img 
                                        src={ic_rocket}
                                        alt='Community Empowerment Icon'
                                        className='lg:w-8 w-6 mb-2' 
                                    />
                                    <span className='block text-[#4D4D4D] lg:text-[14px] text-[13px] font-[400] text-left'>Statutory weekly thrift/payment contribution of ₦1,500 after initial registration.</span>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator className='h-[180px]'>
                                <TimelineDot variant="outlined" style={{ borderColor: "#C829A9", margin: 0, height: 35, width: 35, borderWidth: 10 }} />
                                <TimelineConnector className="!bg-primary !w-[10px]" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className='w-full lg:w-[350px] lg:p-5 p-3'>   
                                    <img 
                                        src={ic_rocket}
                                        alt='Community Empowerment Icon'
                                        className='lg:w-8 w-6 mb-2' 
                                    />
                                    <span className='block text-[#4D4D4D] lg:text-[14px] text-[13px] font-[400] text-left'>The deadline for the weekly thrift/payment is every Saturday by 11:59 pm, failure attracts a 100% penalty (₦1500 extra) for the defaulted week.</span>
                                </div>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator className='h-[180px]'>
                                <TimelineDot variant="outlined" style={{ borderColor: "#C829A9", margin: 0, height: 35, width: 35, borderWidth: 10 }} />
                                <TimelineConnector className="!bg-primary !w-[10px]" />
                            </TimelineSeparator>
                            <TimelineContent className='flex justify-end'>
                                <div className='w-full lg:w-[350px] lg:py-5 p-3'>   
                                    <img 
                                        src={ic_rocket}
                                        alt='Community Empowerment Icon'
                                        className='lg:w-8 w-6 mb-2' 
                                    />
                                    <span className='block text-[#4D4D4D] lg:text-[14px] text-[13px] font-[400] text-left'>Wallet funding (Bulk amount of above ₦1,500 to either to cover for some weeks, month(s) or the entire year.)</span>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator className='h-[180px]'>
                                <TimelineDot variant="outlined" style={{ borderColor: "#C829A9", margin: 0, height: 35, width: 35, borderWidth: 10 }} />
                                <TimelineConnector className="!bg-primary !w-[10px]" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className='w-full lg:w-[350px] lg:p-5 p-3'>   
                                    <img 
                                        src={ic_rocket}
                                        alt='Community Empowerment Icon'
                                        className='lg:w-8 w-6 mb-2' 
                                    />
                                    <span className='block text-[#4D4D4D] lg:text-[14px] text-[13px] font-[300] text-left'>This wallet funding will automatically be deducted and recorded every week for the member till the end of its cover periods.</span>
                                </div>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator className='h-[180px]'>
                                <TimelineDot variant="outlined" style={{ borderColor: "#C829A9", margin: 0, height: 35, width: 35, borderWidth: 10 }} />
                                <TimelineConnector className="!bg-primary !w-[10px]" />
                            </TimelineSeparator>
                            <TimelineContent className='flex justify-end'>
                                <div className='w-full lg:w-[350px] lg:py-5 p-3'>   
                                    <img 
                                        src={ic_rocket}
                                        alt='Community Empowerment Icon'
                                        className='lg:w-8 w-6 mb-2' 
                                    />
                                    <span className='block text-[#4D4D4D] lg:text-[14px] text-[13px] font-[300] text-left'>Existing member weekly payments</span>
                                </div>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator className='h-[180px]'>
                                <TimelineDot variant="outlined" style={{ borderColor: "#C829A9", margin: 0, height: 35, width: 35, borderWidth: 10 }} />
                                <TimelineConnector className="!bg-primary !w-[10px]" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className='w-full lg:w-[350px] lg:p-5 p-3'>   
                                    <img 
                                        src={ic_rocket}
                                        alt='Community Empowerment Icon'
                                        className='lg:w-8 w-6 mb-2' 
                                    />
                                    <span className='block text-[#4D4D4D] lg:text-[14px] text-[13px] font-[300] text-left'>Upload genuine payment proof. Uploading fake payment proof will result in your account being flagged fraudulent</span>
                                </div>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator className='h-[180px]'>
                                <TimelineDot variant="outlined" style={{ borderColor: "#C829A9", margin: 0, height: 35, width: 35, borderWidth: 10 }} />
                                <TimelineConnector className="!bg-primary !w-[10px]" />
                            </TimelineSeparator>
                            <TimelineContent className='flex justify-end'>
                                <div className='w-full lg:w-[350px] lg:py-5 p-3'>   
                                    <img 
                                        src={ic_rocket}
                                        alt='Community Empowerment Icon'
                                        className='lg:w-8 w-6 mb-2' 
                                    />
                                    <span className='block text-[#4D4D4D] lg:text-[14px] text-[13px] font-[300] text-left'>Ensure that you provide accurate information in each field.</span>
                                </div>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator className='h-[180px]'>
                                <TimelineDot variant="outlined" style={{ borderColor: "#C829A9", margin: 0, height: 35, width: 35, borderWidth: 10 }} />
                                <TimelineConnector className="!bg-primary !w-[10px]" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className='w-full lg:w-[350px] lg:p-5 p-3'>   
                                    <img 
                                        src={ic_rocket}
                                        alt='Community Empowerment Icon'
                                        className='lg:w-8 w-6 mb-2' 
                                    />
                                    <span className='block text-[#4D4D4D] lg:text-[14px] text-[13px] font-[300] text-left'>All payments must be made to official Silverswift Vetures Bank account obtained from the office. Any payment to anny other bank is at saver's risk</span>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector className="!bg-primary !w-[10px] rounded-b-lg" />
                            </TimelineSeparator>
                            <TimelineContent></TimelineContent>
                        </TimelineItem>

                    </Timeline> 
                </section>

                <section className='lg:hidden w-full lg:pt-20 pt-10 pb-10'>
                    <h4 className='text-[22px] font-semibold text-secondary mb-5'>Note to Savers</h4>
                    {/* <Timeline items={items} className='rounded-lg' /> */}
                    <Timeline color="primary" className='mobile-timeline'>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector className="!bg-primary !w-[8px] ml-[10px] rounded-t-lg" />
                            </TimelineSeparator>
                            <TimelineContent></TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" style={{ borderColor: "#C829A9", margin: 0, height: 30, width: 30, borderWidth: 10 }}/>
                                <TimelineConnector className="!bg-primary !w-[8px] h-[100px]"/>
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className='w-full'>   
                                    <span className='block text-blue-gray text-[12px] font-[400] text-left'>Statutory weekly thrift/payment contribution of ₦1,500 after initial registration.</span>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" style={{ borderColor: "#C829A9", margin: 0, height: 30, width: 30, borderWidth: 10 }} />
                                <TimelineConnector className="!bg-primary !w-[8px] h-[100px]" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className='w-full'>   
                                    <span className='block text-blue-gray text-[12px] font-[400] text-left'>The deadline for the weekly thrift/payment is every Saturday by 11:59 pm, failure attracts a 100% penalty (₦1500 extra) for the defaulted week.</span>
                                </div>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" style={{ borderColor: "#C829A9", margin: 0, height: 30, width: 30, borderWidth: 10 }} />
                                <TimelineConnector className="!bg-primary !w-[8px] h-[100px]" />
                            </TimelineSeparator>
                            <TimelineContent className='flex justify-end'>
                                <div className='w-full'>   
                                    <span className='block text-blue-gray text-[12px] font-[400] text-left'>Wallet funding (Bulk amount of above ₦1,500 to either to cover for some weeks, month(s) or the entire year.)</span>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" style={{ borderColor: "#C829A9", margin: 0, height: 30, width: 30, borderWidth: 10 }} />
                                <TimelineConnector className="!bg-primary !w-[8px] h-[100px]" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className='w-full'>   
                                    <span className='block text-blue-gray text-[12px] font-[300] text-left'>This wallet funding will automatically be deducted and recorded every week for the member till the end of its cover periods.</span>
                                </div>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" style={{ borderColor: "#C829A9", margin: 0, height: 30, width: 30, borderWidth: 10 }} />
                                <TimelineConnector className="!bg-primary !w-[8px] h-[100px]" />
                            </TimelineSeparator>
                            <TimelineContent className='flex justify-end'>
                                <div className='w-full'>   
                                    <span className='block text-blue-gray text-[12px] font-[300] text-left'>Existing member weekly payments</span>
                                </div>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" style={{ borderColor: "#C829A9", margin: 0, height: 30, width: 30, borderWidth: 10 }} />
                                <TimelineConnector className="!bg-primary !w-[8px] h-[100px]" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className='w-full'>   
                                    <span className='block text-blue-gray text-[12px] font-[300] text-left'>Upload genuine payment proof. Uploading fake payment proof will result in your account being flagged fraudulent</span>
                                </div>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" style={{ borderColor: "#C829A9", margin: 0, height: 30, width: 30, borderWidth: 10 }} />
                                <TimelineConnector className="!bg-primary !w-[8px] h-[100px]" />
                            </TimelineSeparator>
                            <TimelineContent className='flex justify-end'>
                                <div className='w-full'>   
                                    <span className='block text-blue-gray text-[12px] font-[300] text-left'>Ensure that you provide accurate information in each field.</span>
                                </div>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" style={{ borderColor: "#C829A9", margin: 0, height: 30, width: 30, borderWidth: 10 }} />
                                <TimelineConnector className="!bg-primary !w-[8px] h-[100px] rounded-b-lg" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className='w-full'>   
                                    <span className='block text-blue-gray text-[12px] font-[300] text-left'>All payments must be made to official Silverswift Vetures Bank account obtained from the office. Any payment to anny other bank is at saver's risk</span>
                                </div>
                            </TimelineContent>
                        </TimelineItem>

                    </Timeline> 
                </section>

                <section className='w-full lg:pt-20 pt-10 pb-10 px-0'>
                    <div className='grid lg:grid-cols-3 grid-cols-1'>
                        <div className='col-span-1'>
                            <img
                                src={img_home_testimonial}
                                alt=""
                                className='w-full object-cover'
                            />
                        </div>
                        <div className='relative col-span-2 bg-primary lg:py-20 py-10 lg:px-20 px-5'>
                           <Carousel
                                loop={true}
                                autoplay={true}
                                navigation={({ setActiveIndex, activeIndex, length }) => (
                                    <div className="absolute bottom-4 left-2/4 z-50 flex items-center -translate-x-2/4 gap-2">
                                    {new Array(length).fill("").map((_, i) => (
                                        <span
                                        key={i}
                                        className={`block h-1 cursor-pointer rounded-full transition-all content-[''] ${
                                            activeIndex === i ? "w-5 h-5 bg-white" : "w-3 h-3 bg-white/50"
                                        }`}
                                        onClick={() => setActiveIndex(i)}
                                        />
                                    ))}
                                    </div>
                                )}
                                prevArrow={({ handlePrev }) => (
                                    <IconButton
                                        variant="text"
                                        color="white"
                                        size="lg"
                                        onClick={handlePrev}
                                        className="!absolute bottom-2 !left-0 max-sm:w-9 max-sm:h-9 rounded-full border-2 border-white"
                                    >
                                        <img
                                            src={ic_carousel_arrow_left}
                                            alt=""
                                        />
                                    </IconButton>
                                )}

                                nextArrow={({ handleNext }) => (
                                    <IconButton
                                      variant="text"
                                      color="white"
                                      size="lg"
                                      onClick={handleNext}
                                      className="!absolute bottom-2 max-sm:w-9 max-sm:h-9 !right-0 rounded-full border-2 border-white"
                                    >
                                         <img
                                            src={ic_carousel_arrow_right}
                                            alt=""
                                        />
                                    </IconButton>
                                )}
                                className='col-span-2 bg-primary'
                            >
                                <div className='w-full h-full pb-20 lg:pb-0'>
                                    <p className='text-[#FFFFFF] lg:text-[17px] text-[13px] text-left font-[400] mb-3 lg:leading-8 leading-6'>Using SilverSwift Ventures made buying my first business a seamless experience. The secure dealroom, AI-powered matching, and expert support helped me find the right opportunity and navigate the complexities of the transaction with confidence. I couldn't have asked for a better platform to make such a significant decision.</p>
                                    <p className='text-[#FFFFFF] lg:text-[20px] text-[17px] text-left font-semibold'>-Lisa M.</p>
                                    <p className='text-[#FFFFFF] lg:text-[14px] text-[12px] text-left font-[400]'>Lagos, Nigeria</p>
                                </div>
                                <div className='w-full h-full'>
                                    <p className='text-[#FFFFFF] lg:text-[17px] text-[13px] text-left font-[400] mb-3 lg:leading-8 leading-6'>Using SilverSwift Ventures made buying my first business a seamless experience. The secure dealroom, AI-powered matching, and expert support helped me find the right opportunity and navigate the complexities of the transaction with confidence. I couldn't have asked for a better platform to make such a significant decision.</p>
                                    <p className='text-[#FFFFFF] lg:text-[20px] text-[17px] text-left font-semibold'>-Lisa M.</p>
                                    <p className='text-[#FFFFFF] lg:text-[14px] text-[12px] text-left font-[400]'>Lagos, Nigeria</p>
                                </div>
                                <div className='w-full h-full'>
                                    <p className='text-[#FFFFFF] lg:text-[17px] text-[13px] text-left font-[400] mb-3 Lg:leading-8 leading-6'>Using SilverSwift Ventures made buying my first business a seamless experience. The secure dealroom, AI-powered matching, and expert support helped me find the right opportunity and navigate the complexities of the transaction with confidence. I couldn't have asked for a better platform to make such a significant decision.</p>
                                    <p className='text-[#FFFFFF] lg:text-[20px] text-[17px] text-left font-semibold'>-Lisa M.</p>
                                    <p className='text-[#FFFFFF] lg:text-[14px] text-[12px] text-left font-[400]'>Lagos, Nigeria</p>
                                </div> 
                            </Carousel>
                        </div>
                    </div>
                </section>

                <section className='w-full lg:pt-20 pt-10 pb-10 lg:px-20 px-5'>
                    <h4 className='lg:text-[30px] text-[22px] font-semibold text-secondary mb-3'>Frequently Asked Questions</h4>
                    <p className='lg:w-2/4 w-full text-blue-gray text-center lg:text-[17px] text-[14px] mx-auto mb-8'>Find quick answers to common questions about SilverSwift Ventures</p>
                    <div className='w-full max-sm:mt-10 max-sm:order-2'>
                        <div className='accordion' role='tablist'>
                            {panels.map((panel, index) => 
                                <Panel
                                    key={index}
                                    {...panel}
                                    index={index}
                                    activeTab={activeTab}
                                    activateTab={()=> activateTab(index)}
                                />
                            )}

                        </div>
                        <div className='w-full flex gap-x-4 justify-center max-sm:flex-col max-sm:items-center mb-10 mt-5'>
                            <a href={ROUTES.FAQs} className='lg:w-[160px] w-full rounded-lg bg-primary py-4 px-8 text-[#FFFFFF] text-[13px] font-semibold'>See All</a>
                        </div>
                    </div>
                </section>
                <Subscribe />
                <Footer />
            </main>
        </div>
    );
};

export default Home;