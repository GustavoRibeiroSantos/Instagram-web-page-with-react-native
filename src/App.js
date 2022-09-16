import logo from './logo.svg';
import './App.css';
import React from 'react';
import Narbar from './components/Narbar';
import Stories from './components/Stories';
import Feed from './components/Feed';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <div>
          <Narbar />
        </div>
        <div>
          <main>
            <div><Stories /></div>
            <div ><Feed /></div>
            <div ><Feed /></div>
            <div ><Feed /></div>
          </main>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;
