import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension'; 


//khởi tạo store
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  //truyền store là một global để app sử dụng
  <Provider store={store}>
    <App />
  </Provider>,
  
  document.getElementById('root')
);

