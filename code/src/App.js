import React from 'react';

import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Header title="Homepage" />
      <Menu>
        <ul>Homepage</ul>
        <ul>Projects</ul>
        <ul>Login</ul>
      </Menu>
    </>
  );
}

export default App;