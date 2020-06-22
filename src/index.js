import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'


import players from './players'
import { createReactPlayer } from './ReactPlayer'

// Fall back to FilePlayer if nothing else can play the URL
const fallback = players[players.length - 1]



const store = createStore(rootReducer);
console.log('index - state',store.getState())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

export default createReactPlayer(players, fallback)
