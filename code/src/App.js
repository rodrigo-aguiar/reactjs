import React, { useState, useEffect } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpg';

import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(['Project 1', 'Project 2']);
  }, []);

  function handleAddProject() {
    setProjects([...projects, `New project ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Projects" />

      <img width={300} src={backgroundImage} alt="background image"/>
      
      <Menu>
        <ul>
          {projects.map(project => <li key={project}>{project}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
      </Menu>
    </>
  );
}

export default App;