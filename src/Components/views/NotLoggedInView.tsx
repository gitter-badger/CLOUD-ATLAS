import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LoginPane from 'src/Components/views/not-logged-in/LoginPane';
import GlobeImage from './not-logged-in/globe.png';

const styles = makeStyles({
  root: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    position: 'relative',
  },
  imagePane: {
    flex: '1',
    display: 'flex',
  },
  globeImage: {
    width: 'auto',
    maxHeight: 'calc(100vh - 30px)',
    maxWidth: 'calc(100vw - 30px)',
    padding: '15px',
    margin: 'auto',
  },
  loginPane: {
    flex: '0',
    padding: '0 15px 15px 15px',
  },
  loginPaneLargeScreen: {
    position: 'absolute',
    right: '40px',
    top: '50%',
    transform: 'translate(0, -50%)',
  },
});

interface INotLoggedInViewProps {
  setIsLoggedIn: (loginState: boolean) => void;
}

const NotLoggedInView: React.FunctionComponent<INotLoggedInViewProps> = ({
  setIsLoggedIn,
}) => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(
    `(max-width: ${theme.breakpoints.values.md}px)`
  );

  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.imagePane}>
        <img src={GlobeImage} className={classes.globeImage} />
      </div>
      <div
        className={
          isSmallDevice ? classes.loginPane : classes.loginPaneLargeScreen
        }
      >
        <LoginPane setIsLoggedIn={setIsLoggedIn} />
      </div>
    </div>
  );
};

export default NotLoggedInView;
