import { useState } from 'react';
import Footer from '../layouts/generic/footer';
import Header from '../layouts/generic/header';
import Subscribe from '../layouts/generic/subscribe';
import Panel from '../components/accordion/panel';
//import { ROUTES } from '../lib/route-links';

const Faqs = () => {   

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

        {
            label: 'How do I start saving?',
            content: 'SILVERSWIFT VENTURES is a savings and food network marketing and distribution organization, a gateway to ensure your household food security and financial stability.',
        },
        {
            label: 'When can I withdraw my savings?',
            content: 'We aim to create a sustainable and empowering network where individuals and families can save, access affordable food supplies, and build long-term financial resilience.',
        },	
        {
            label: 'How does the foodstuff incentive work?',
            content: `Commissions are directly transferred our rider's wallet on successful delivery. Withdrawals only happens at the end of the week`,
        },
        {
            label: 'Is my money safe with SilverSwift Ventures?',
            content: 'At SilverSwift, we envision a future where everyone has access to an affordable, sustainable system, and imbibe the culture of savings and investments.'

        },
        {
            label: 'What steps can I take to resolve the problems?',
            content: 'Write and describe your issue to <a href="mailto:support@silverswift.com" rel="noopener noreferrer" className="text-[#60B5FF] underline">support@silverswift.com</a> or to our <a href="https://chat.whatsapp.com/EsTlRZeZpjx8ntEJ2bdX0k" target="_blank" rel="noopener noreferrer" className="text-[#60B5FF] underline">WhatsApp</a> to lay your complaint (Note, once your issue is resolved, you are expected  to exit the WhatsApp complaint channel immediately. Failure to exit will attract sanctions)',
        },
        {
            label: 'What is the maximum number of accounts I can register in a month?',
            content: 'Up to 1000 accounts. However, Registration up to 50 accounts and above with one phone number or email address requires a 50% lumpsum initial payment , and balance is completed within 7 months.',
        },	

    ];

    const activateTab = (index: number | undefined) => {
        setActiveTab((prevState: number | undefined) => ( prevState === index ? -1 : index));
    }

    return (
        <div className="w-full justify-start items-center bg-white">
            <Header/>
            <main className="w-full block">
                <section className='w-full px-5 lg:px-20 pb-10 pt-10 lg:pt-20'>
                    <div className='w-full text-center'>
                        <h1 className='lg:w-2/3 w-full text-secondary mx-auto mb-3 lg:mb-0 lg:font-bold font-semibold text-center lg:text-[40px] text-[25px]'>Frequently Asked Questions</h1>
                        <p className='lg:w-1/2 w-full text-blue-gray text-center lg:text-[17px] text-[14px] mx-auto mb-8 mt-2'>Get quick answers to questions troubling your mind.</p>
                    </div>
                </section>
                <section className='w-full lg:pt-20 pt-0 pb-10 lg:pb-0 lg:px-20 px-5'>
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
                    </div>
                </section>
               <Subscribe />
               <Footer />
            </main>
            
        </div>
    );
};

export default Faqs;