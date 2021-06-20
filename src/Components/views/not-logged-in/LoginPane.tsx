import React from 'react';
import LoginProviderButton from 'src/Components/provider-login-button/LoginProviderButton';
import { makeStyles } from '@material-ui/core';

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
        <LoginProviderButton
          loginProvider="google"
          onLogin={() => setIsLoggedIn(true)}
        />
      </div>

      <div className={classes.paneItem}>
        <LoginProviderButton
          loginProvider="facebook"
          onLogin={() => setIsLoggedIn(true)}
        />
      </div>

      <div className={classes.paneItem}>
        <LoginProviderButton
          loginProvider="apple"
          onLogin={() => setIsLoggedIn(true)}
        />
      </div>
    </div>
  );
};

export default LoginPane;
