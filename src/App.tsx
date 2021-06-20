import React, { useState } from 'react';
import MainScreen from '@app/Components/MainScreen';
import Menu from '@app/Components/Menu';

const App: React.FunctionComponent = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='App'>
      <MainScreen setShowMenu={setShowMenu} />
      <Menu setShowMenu={setShowMenu} showMenu={showMenu} />
    </div>
  );
}

export default App;
