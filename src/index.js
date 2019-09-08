import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//#region 
// --- how to crate store,action,reducer ---
// import {createStore} from 'redux';
// let reducer=(state,action)=>{
//     if(action.type==='change State'){
//      return action.payload;
//     }
//     return 'State';
// }
// const store=createStore(reducer);
// console.log(store.getState());
// let action={
//     type:'change State',
//     payload:'New State'
// }
// store.dispatch(action);
// console.log(store.getState());
//#endregion

// --- real world store and reducer ---
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();