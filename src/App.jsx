import React, { useState } from "react";
import MainScreen from "./Components/MainScreen";
import Menu from "./Components/Menu";
import { Container, CssBaseline } from '@material-ui/core';

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="App">
        <MainScreen setShowMenu={setShowMenu} />
        <Menu setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
    </Container>
  );
}
