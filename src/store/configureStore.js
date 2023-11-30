// import { createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";

//Substitute the above using redux toolkit
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
// import reducer from "./bugs";
import reducer from './reducer'
import logger from './middleware/logger';
import toast from './middleware/toast';
import func from './middleware/func';
import api from './middleware/api';
//createStore: is takes three argument
// const store = createStore( reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

  
// export default function configureStore ()
// {
//     const store = createStore(reducer, devToolsEnhancer({ trace: true })); // createStore is higher order function b/c it
//     //takes function as an argument. devToolsEnhancer({trace: true}):returns store enhancer to tracing enable
//     //window.__REDUX_DEVTOOLS_EXTENSION__(): this function is return a new function called a store enhancer. store enhancer function is used to enhance store
//     return store;
// };

 
export default function () {
    return configureStore({
      reducer,
      //...getDefaultMiddleware()
      middleware: [ ...getDefaultMiddleware(),
        logger( { destination: "console" } ),
        toast,
         api] // the middleware is implemente with sequence before reache to the root reducer
    });
}

