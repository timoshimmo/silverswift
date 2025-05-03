import { useEffect, useState } from 'react';
import { ssvTransparentLogo } from '../../lib/images';
import {
    Navbar,
    Typography,
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

    return (
        <Navbar className={openNav ? "sticky top-0 z-10 h-screen lg:h-max max-w-full px-5 py-2 lg:px-20 lg:py-3 border-0 rounded-none bg-opacity-1 bg-[#FFFFFF] lg:shadow-[0_5px_30px_rgba(0,0,0,0.21)] shadow-none"
            :
            "sticky top-0 z-10 h-max max-w-full px-5 py-2 lg:px-20 lg:py-3 border-0 bg-[#FFFFFF] lg:shadow-md shadow-none rounded-none bg-opacity-1"}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Typography
                        as="a"
                        href={ROUTES.INDEX}
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        <img
                            src={ssvTransparentLogo}
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