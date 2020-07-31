import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../store/reducers/rootReducers';
import thunk from 'redux-thunk';

import Routes from './Routes';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
