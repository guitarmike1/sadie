import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'


import players from './players'
import { createReactPlayer } from './ReactPlayer'

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));
// const store = createStore(rootReducer);

// Fall back to FilePlayer if nothing else can play the URL
const fallback = players[players.length - 1]



console.log('index - state',store.getState())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

export default createReactPlayer(players, fallback)
