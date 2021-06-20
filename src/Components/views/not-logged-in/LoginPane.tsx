import React from 'react';
import LoginProviderButton from 'src/Components/provider-login-button/LoginProviderButton';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
  pane: {
    margin: '20px',
  },
  paneItem: {
    margin: '10px',
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
