import React from "react";
import MenuIconClose from './menu/MenuIconClose';

const Menu = ({ showMenu, setShowMenu }) => {
  return (
    <div className={`menu full ${showMenu ? "show" : "hide"}`}>
      <MenuIconClose setShowMenu={setShowMenu} />
    </div>
  );
};

export default Menu;
