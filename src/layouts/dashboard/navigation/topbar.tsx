import { useState, useEffect } from 'react';
import TopMenu from './topmenu';


const Topbar = () => {

  let title = '';

  if (typeof localStorage !== 'undefined') {
      const mTitle = localStorage.getItem('globalTitle');
      if(mTitle !== null) {
        title = mTitle;
      }
      else {
        title = 'Dashboard';
      }
  }

  let fullName = 'Jimmy Francis';
  if (typeof localStorage !== 'undefined') {
      const user = localStorage.getItem('userFullName');
      if(user !== null) {
        fullName = user;
      }
  }

  return (
    <div className="w-full flex justify-between px-8">
      <span className="text-body font-bold text-[28px]">{title}</span>
      <div className="flex flex-end items-center">
        <TopMenu username={fullName} />
      </div>
    </div>
  );
};

export default Topbar;
