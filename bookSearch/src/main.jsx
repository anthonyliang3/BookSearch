import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import booksReducer from './redux/reducer'
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(booksReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
