import React from 'react';
import './App.css';
import Header from './components/Header'
import Display from './components/Display';

function App() {
return(
  <div className='main-body'>

    <Header/>
    <div className="App"><Display/></div>
  </div>
)
}

export default App;
