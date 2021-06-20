import React from 'react';
import { makeStyles } from '@material-ui/core';
import GoogleLoginButton from 'src/Components/provider-login-button/GoogleLoginButton';
import FacebookLoginButton from 'src/Components/provider-login-button/FacebookLoginButton';
import AppleLoginButton from 'src/Components/provider-login-button/AppleLoginButton';

const styles = makeStyles({
  pane: {
    padding: '80px 30px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
  },
  paneItem: {
    'marginBottom': '20px',

    '&:last-child': {
      marginBottom: 0,
    },
  },
});

interface INotLoggedInViewProps {
  setIsLoggedIn: (loginState: boolean) => void;
}

const LoginPane: React.FunctionComponent<INotLoggedInViewProps> = ({
  setIsLoggedIn,
}) => {
  const classes = styles();

  return (
    <div className={classes.pane}>
      <div className={classes.paneItem}>
        <GoogleLoginButton setIsLoggedIn={setIsLoggedIn} />
      </div>

      <div className={classes.paneItem}>
        <FacebookLoginButton setIsLoggedIn={setIsLoggedIn} />
      </div>

      <div className={classes.paneItem}>
        <AppleLoginButton setIsLoggedIn={setIsLoggedIn} />
      </div>
    </div>
  );
};

export default LoginPane;
