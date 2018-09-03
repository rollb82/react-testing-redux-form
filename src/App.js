import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer as FormReducer } from 'redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import FormContainer from './formTest/FormContainer';

import logo from './logo.svg';
import './styles/index.css';

import customerActivityReducer from './formTest/reducer';

const reducers = combineReducers({
  form: FormReducer,
  customerActivityReducer
});

const store = createStore(
  reducers
  , applyMiddleware(thunk, logger));



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="container">
            <div className="row">
              <FormContainer />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
