import React, { useState } from 'react';
import MainScreen from './Components/MainScreen';
import Menu from './Components/Menu';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='App'>
      <MainScreen setShowMenu={setShowMenu} />
      <Menu setShowMenu={setShowMenu} showMenu={showMenu} />
    </div>
  );
}

export default App;
