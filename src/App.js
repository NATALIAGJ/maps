import React from 'react';
import { Provider } from 'react-redux';
import {Moves} from './components/index'
import './App.css';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';



const App = ({ element }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {element}
        <Moves/>
        {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
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
          
        </div> */}
      </PersistGate>
    </Provider>
  );
}

export default App;
