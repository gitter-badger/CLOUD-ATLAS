import React from "react";

interface IMenuIconCloseProps {
  setShowMenu: (state: boolean) => void;
}

const MenuIconClose: React.FunctionComponent<IMenuIconCloseProps> = ({ setShowMenu }) => {
  return (
    <div className="menuIcon close" onClick={() => setShowMenu(false)}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L21 21M21 1L1 21" stroke="white" />
      </svg>
    </div>
  );
};

export default MenuIconClose;
