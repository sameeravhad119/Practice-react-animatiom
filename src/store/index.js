import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const store = createStore(
    rootReducer,
    {
        product: [{ name: 'iphone' }],
        user: 'Michel'
    },
    window.devToolsExtension && window.devToolsExtension()
);
console.log(store.getState());

export default store;