import React from 'react';
import SidebarNav from './sidebar-nav';
import { ROUTES } from '../../../lib/route-links';
import { ssvTransparentLogo } from '../../../lib/images';
import {
    Typography,
  } from "@material-tailwind/react";
import { ic_sidemenu_dashboard } from '../../../lib/images';
import { ic_sidemenu_profile } from '../../../lib/images';
import { ic_sidemenu_payment } from '../../../lib/images';
import { ic_sidemenu_investment } from '../../../lib/images';


const Sidebar = () => {

  let dynamicMenu: any = [];
  let code = '';
  if (typeof localStorage !== 'undefined') {
      const mCode = localStorage.getItem('permissionCode');
      if(mCode !== null) {
        code = mCode;
      }
  }

  /*
  case "7":
    dynamicMenu = globalSettings.assetSideMenu;
    break;
  case "5":
    dynamicMenu = globalSettings.teamSideMenu;
    break;
  */

  switch (code) {
      case "1":
        dynamicMenu = { href: ROUTES.INDEX, label: 'Dashboard', icon: ic_sidemenu_dashboard };
        break;
      case "2":
        dynamicMenu = { href: ROUTES.INDEX, label: 'My Profile', icon: ic_sidemenu_profile };
        break;
      case "3":
          dynamicMenu = { href: ROUTES.INDEX, label: 'Payment Details', icon: ic_sidemenu_payment };
        break;
      case "4":
          dynamicMenu = { href: ROUTES.INDEX, label: 'Investment', icon: ic_sidemenu_investment };
        break;
  }

  return (
    <div className="w-full h-full px-4 flex flex-col">
      <div className="flex justify-center items-center h-20 mt-2">
         <Typography
                    as="a"
                    href="/"
                    className="mr-4 cursor-pointer py-1.5 font-medium"
                >
                    <img
                        src={ssvTransparentLogo}
                        alt=""
                        title="Logo"
                        className='h-6 lg:h-8'
                    />
                </Typography>
      </div>
      <SidebarNav menus={dynamicMenu} />
    </div>
  );
};

export default Sidebar;
