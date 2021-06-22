import React from 'react';
import MenuIconOpen from 'src/Components/menu/MenuIconOpen';
import NotLoggedInView from 'src/Components/views/NotLoggedInView';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';
import { DefaultTheme } from '@material-ui/styles';
import LoggedInView from 'src/Components/views/LoggedInView';

interface IMainScreenProps {
  setShowMenu: (state: boolean) => void;
  setIsLoggedIn: (loginState: boolean) => void;
  isLoggedIn: boolean;
}

const styles = makeStyles<DefaultTheme, { isSmallDevice: boolean }>({
  mainScreen: ({ isSmallDevice }) => ({
    backgroundColor: isSmallDevice ? '#ffffff' : '#000000',
  }),
});

const MainScreen: React.FunctionComponent<IMainScreenProps> = ({
  setShowMenu,
  setIsLoggedIn,
  isLoggedIn,
}) => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(
    `(max-width: ${theme.breakpoints.values.md}px)`
  );

  const classes = styles({ isSmallDevice });

  return (
    <div className={`mainScreen full ${classes.mainScreen}`}>
      {!isLoggedIn && <NotLoggedInView setIsLoggedIn={setIsLoggedIn} />}

      {isLoggedIn && (
        <>
          <LoggedInView />
          <MenuIconOpen setShowMenu={setShowMenu} />
        </>
      )}
    </div>
  );
};

export default MainScreen;
