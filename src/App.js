import React from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'../img/donatepls.jpg'} className="App-logo" alt="" />
        <p>
          Đô nết để ủng hộ nhóm nhé ❤️
        </p>
        <div className="App-link">
          <a
            className="App-link1"
            href="./img/tusenavoicenhat.mp4"
            target="_blank"
            rel="noopener noreferrer"
          >
            寄付する
          </a>
          <a
            className="App-link2"
            href="./img/tusenacute.mp4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;