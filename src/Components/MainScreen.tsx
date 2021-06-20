import React from 'react';
import MenuIconOpen from 'src/Components/menu/MenuIconOpen';
import NotLoggedInView from 'src/Components/views/NotLoggedInView';

interface IMainScreenProps {
  setShowMenu: (state: boolean) => void;
  setIsLoggedIn: (loginState: boolean) => void;
  isLoggedIn: boolean;
}

const MainScreen: React.FunctionComponent<IMainScreenProps> = ({
  setShowMenu,
  setIsLoggedIn,
  isLoggedIn,
}) => {
  return (
    <div className="mainScreen full">
      <MenuIconOpen setShowMenu={setShowMenu} />

      {!isLoggedIn && <NotLoggedInView setIsLoggedIn={setIsLoggedIn} />}
    </div>
  );
};

export default MainScreen;
