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

const HeaderSimple = () => {

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
                </div>
            </div>
        </Navbar>

    );
};

export default HeaderSimple;