import React, { useState } from 'react';
import Register from './controller/register';
import Authenticate from './controller/authenticate';

function App() {
  const [showRegister, setShowRegister] = useState(false);
  const [showAuthenticate, setShowAuthenticate] = useState(false);

  return (
    <div>
      <h1>Welcome to Event Manager</h1>
      <button onClick={() => { setShowRegister(true); setShowAuthenticate(false); }}>Click to Register</button>
      <button onClick={() => { setShowAuthenticate(true); setShowRegister(false); }}>Click Here to Verify</button>

      {showRegister && <Register />}
      {showAuthenticate && <Authenticate />}
    </div>
  );
}

export default App;
