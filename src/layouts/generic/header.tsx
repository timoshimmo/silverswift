import { useEffect, useState } from 'react';
//import { ssvLogo } from '../../lib/images';
import { ssvTransparentLogo } from '../../lib/images';
import {
    Navbar,
    Typography,
    IconButton,
    Collapse
  } from "@material-tailwind/react";
  import { ROUTES } from '../../lib/route-links';

const Header = () => {

  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-10 mb-4 flex flex-col items-center gap-8 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-12">
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-normal"
      >
        <a href={ROUTES.INDEX} className="flex items-center text-secondary">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-normal"
      >
        <a href={ROUTES.ABOUT} className="flex items-center text-secondary">
          About Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-normal"
      >
        <a href={ROUTES.HOW_IT_WORKS} className="flex items-center text-secondary">
          How it works
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-normal"
      >
        <a href={ROUTES.FAQs} className="flex items-center text-secondary">
          FAQs
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-normal"
      >
        <a href={ROUTES.CONTACTUS} className="flex items-center text-secondary">
          Contact Us
        </a>
      </Typography>
    </ul>
  );

    return (
        <Navbar className={openNav ? "sticky top-0 z-10 h-screen lg:h-max max-w-full px-5 py-2 lg:px-20 lg:py-3 border-0 rounded-none bg-opacity-1 bg-[#FFFFFF] lg:shadow-[0_5px_30px_rgba(0,0,0,0.21)] shadow-none"
            :
            "sticky top-0 z-10 h-max max-w-full px-5 py-2 lg:px-20 lg:py-3 border-0 bg-[#FFFFFF] lg:shadow-md shadow-none rounded-none bg-opacity-1"}>
            <div className="flex items-center justify-between">
                
                  
                    <Typography
                          as="a"
                          href={ROUTES.INDEX}
                          className="cursor-pointer py-1.5 font-medium flex items-center gap-4"
                      >
                          <img
                              src={ssvTransparentLogo}
                              alt=""
                              title="Logo"
                              className='w-10 lg:w-14'
                          />
                          <div className='flex flex-col justify-center items-start'>
                              <h4 className='text-primary font-bold text-[20px] leading-none max-sm:hidden'>SilverSwift Ventures</h4>
                              <span className='text-blue-gray text-[10px] max-sm:hidden'><i>Feast your Senses, Elevate family Needs</i></span>
                          </div>
                          
                      </Typography>
                  
                
                <div className="hidden lg:block">{navList}</div>
                <div className="flex items-center">
                    <div className="flex items-center gap-x-10">
                        <Typography
                            as="a"
                            href={ROUTES.LOGIN}
                            className="hidden lg:inline-block rounded-lg text-secondary text-[15px] font-semibold px-2"
                        >
                           Login
                        </Typography>
                        <Typography
                            as="a"
                            href={ROUTES.SIGNUP}
                            className="hidden lg:inline-block rounded-lg text-white text-[15px] font-semibold py-2 px-5 bg-primary"
                        >
                           Get Started
                        </Typography>
                        
                    </div>
                    <IconButton
                        variant="text"
                        className="ic-button ml-auto h-10 w-10 p-2 flex items-center justify-center bg-light-gray text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden rounded-full"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                        >
                        {openNav ? (
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            stroke="#C829A9"
                            strokeWidth={2}
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                            </svg>
                        ) : (
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="#C829A9"
                            strokeWidth={2}
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>
            <Collapse open={openNav} className={openNav ? 'flex flex-col !h-full' : 'flex flex-col'}>
                <div className="block lg:hidden">{navList}</div>
                <div className="lg:hidden w-full flex flex-col grow items-center gap-4 justify-end px-5 mb-20">
                    <Typography
                            as="a"
                            href={ROUTES.LOGIN}
                            className="w-full py-3 rounded-lg border uppercase border-primary bg-[#FFFFFF] text-secondary text-[13px] font-[400]"
                        >
                           LOGIN
                        </Typography>
                        <Typography
                            as="a"
                            href={ROUTES.SIGNUP}
                            className="w-full py-3 rounded-lg bg-primary text-[#FFFFFF] text-[13px] font-[400] uppercase"
                        >
                           GET STARTED
                        </Typography>
                </div>
            </Collapse>
        </Navbar>
    );
};

export default Header;