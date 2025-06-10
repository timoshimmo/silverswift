import React from 'react';
import { NavLink as RouterLink, useNavigate } from 'react-router-dom';
import withRouter from '../../../components/common/withRouter';
import { ROUTES } from '../../../lib/route-links';
import { ic_sidemenu_help } from '../../../lib/images';
import { ic_sidemenu_logout } from '../../../lib/images';

type SidebarNavProps = {
  menus?: any;
};

const SidebarNav: React.FC<SidebarNavProps> = ({menus}) => {

  const history = useNavigate();

  let fullName = '';
  if (typeof localStorage !== 'undefined') {
      const user = localStorage.getItem('userFullName');
      if(user !== null) {
        fullName = user;
      }
  }

  const logOut = () => {
    /*if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('userFullName');
      localStorage.removeItem('discoId');
      localStorage.removeItem('token');
      localStorage.removeItem('userid');
    } */
    history(ROUTES.INDEX);
  }

  const handleChangeTitle = (title: string) => {
    localStorage.setItem('globalTitle', title);
  }

  return (
    <div className="w-full h-100 flex justify-between">
      <div className="w-full">
        <ul className="w-full">
          {menus.map((item: any, idx:number) => (
            <li className="py-1" key={idx}>
              <RouterLink
                to={item.href}
                onClick={()=>handleChangeTitle(item.label)}
                className='flex border-l-4 border-transparent py-3 px-4 font-semibold text-sm text-light transition-colors hover:bg-accent-hover focus:bg-accent-hover'
              >
                {item.icon && <img className="mr-4" src={item.icon} alt='logo'/>}
                {item.label}
              </RouterLink>
            </li>
          ))}
        </ul>
      </div>
      <div className='w-full flex-col justify-end'>
        <RouterLink
                to={ROUTES.INDEX}
                className='flex border-l-4 border-transparent py-3 px-4 font-semibold text-sm text-light transition-colors hover:bg-accent-hover focus:bg-accent-hover'
              >
                <img className="mr-4" src={ic_sidemenu_help} alt='help icon'/>
                Help
          </RouterLink>
          <RouterLink
                to={ROUTES.INDEX}
                onClick={logOut}
                className='flex border-l-4 border-transparent py-3 px-4 font-semibold text-sm text-light transition-colors hover:bg-accent-hover focus:bg-accent-hover'
              >
                <img className="mr-4" src={ic_sidemenu_logout} alt='logout icon'/>
                Logout
          </RouterLink>
      </div>
    </div>
  );
};

export default withRouter(SidebarNav);
