import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LanguageContext from './LanguageContext';
import Welcome from './Welcome';

class App extends Component {
  state = {
    language: 'en'
  }

  toggleLanguage = () => {
    this.setState({language: this.state.language === 'en' ? 'gr' : 'en'})
  }

  render() {
    return (
      <div className="App">
        <LanguageContext.Provider value={{language: this.state.language}}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            <button type='button' onClick={this.toggleLanguage}>Change language</button>
          </p>
          <Welcome />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
