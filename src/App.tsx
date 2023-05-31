import logo from './logo.svg';
import './App.css';
import {Message} from './Message.tsx';
import React from 'react';

export const App = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <br />
        <Message data="passing a prop"/>
      
    </div>
    
  </>
  );
}


