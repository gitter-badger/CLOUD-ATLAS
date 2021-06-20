import React from 'react';
import MenuIconOpen from './menu/MenuIconOpen';

const MainScreen = ({ setShowMenu }) => {
  return (
    <div className='mainScreen full'>
      <MenuIconOpen setShowMenu={setShowMenu} />
    </div>
  );
};

export default MainScreen;
