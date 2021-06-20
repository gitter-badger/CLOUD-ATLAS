import React from 'react';
import MenuIconOpen from '@app/Components/menu/MenuIconOpen';

interface IMainScreenProps {
  setShowMenu: (state: boolean) => void;
}

const MainScreen: React.FunctionComponent<IMainScreenProps> = ({ setShowMenu }) => {
  return (
    <div className='mainScreen full'>
      <MenuIconOpen setShowMenu={setShowMenu} />
    </div>
  );
};

export default MainScreen;
