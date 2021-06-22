import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { DefaultTheme } from '@material-ui/styles';
import LoginPane from 'src/Components/views/not-logged-in/LoginPane';
import GlobeImage from './not-logged-in/globe.png';

const styles = makeStyles<DefaultTheme, { isSmallDevice: boolean }>({
  root: {
    height: '100%',
    position: 'relative',
  },
  imagePane: ({ isSmallDevice }) => ({
    height: isSmallDevice ? '60vh' : '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: '50px',
  }),
  globeImage: ({ isSmallDevice }) => ({
    width: 'auto',
    height: 'auto',
    maxHeight: isSmallDevice ? '100%' : '80vh',
  }),
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

  const classes = styles({ isSmallDevice });

  return (
    <Grid container={true} spacing={0} classes={{ root: classes.root }}>
      <Grid item={true} xs={12} className={classes.imagePane}>
        <img src={GlobeImage} className={classes.globeImage} />
      </Grid>
      <Grid
        item={true}
        xs={12}
        className={!isSmallDevice ? classes.loginPaneLargeScreen : undefined}
      >
        <LoginPane setIsLoggedIn={setIsLoggedIn} />
      </Grid>
    </Grid>
  );
};

export default NotLoggedInView;
