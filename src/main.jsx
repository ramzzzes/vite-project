import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import { BrowserRouter } from "react-router";
import { BrowserRouter } from "react-router-dom";
import allReducers from './Reducers/index.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const box = createStore(allReducers)
  
createRoot(document.getElementById('root')).render(
    <Provider store={box}>
        <App />
    </Provider>
)
