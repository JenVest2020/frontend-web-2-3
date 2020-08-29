import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { dataReducer } from './components/reducers/dataReducer';
import { fetchReducer } from './components/reducers/fetchReducer';
import { combineReducers } from 'redux';
import './index.css';
import App from './App';

const rootReducer = combineReducers({ dataReducer, fetchReducer })

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
