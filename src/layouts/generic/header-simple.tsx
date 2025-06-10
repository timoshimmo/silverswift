import { useEffect, useState } from 'react';
import { ssvTransparentLogo } from '../../lib/images';
import {
    Navbar,
    Typography,
  } from "@material-tailwind/react";
  import { ROUTES } from '../../lib/route-links';

const HeaderSimple = () => {

  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

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
            </div>
        </Navbar>

    );
};

export default HeaderSimple;