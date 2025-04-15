import { useEffect, useState } from 'react';
import { silverswidtLogo } from '../../lib/images';
import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Collapse
  } from "@material-tailwind/react";
  import { ROUTES } from '../../lib/route-links';

const Header = () => {

    //box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.11);

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
                <div className="flex items-center gap-4">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        <img
                            src={silverswidtLogo}
                            alt=""
                            title="Logo"
                            className='w-10 lg:w-14'
                        />
                    </Typography>
                    <div className="ml-16 hidden lg:block">{navList}</div>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center gap-x-6">
                        <Button
                            variant="text"
                            size="sm"
                            className="hidden lg:inline-block rounded-lg text-secondary"
                        >
                            <span className="text-[13px]">Login</span>
                        </Button>
                        <Button
                            variant="gradient"
                            size="sm"
                            className="hidden lg:inline-block rounded-lg bg-primary p-3 text-[#FFFFFF]"
                        >
                            <span className="text-[13px]">Get Started</span>
                        </Button>
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
                    <Button fullWidth variant="text" size="sm" className="py-3 rounded-lg border border-primary bg-[#FFFFFF] text-secondary text-[13px] font-[400]">
                        <span>Login</span>
                    </Button>
                    <Button fullWidth variant="gradient" size="sm" className="py-3 rounded-lg bg-primary text-[#FFFFFF] text-[13px] font-[400]">
                        <span>Get Started</span>
                    </Button>
                </div>
            </Collapse>
        </Navbar>
            
        

    );
};

export default Header;