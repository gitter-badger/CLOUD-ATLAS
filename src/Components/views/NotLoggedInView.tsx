import React from 'react';
import { Container } from '@material-ui/core';
import LoginPane from 'src/Components/views/not-logged-in/LoginPane';

interface INotLoggedInViewProps {
  setIsLoggedIn: (loginState: boolean) => void;
}

const NotLoggedInView: React.FunctionComponent<INotLoggedInViewProps> = ({
  setIsLoggedIn,
}) => {
  return (
    <Container>
      <LoginPane setIsLoggedIn={setIsLoggedIn} />
    </Container>
  );
};

export default NotLoggedInView;
