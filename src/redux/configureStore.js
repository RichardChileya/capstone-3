import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const store = configureStore({ }, applyMiddleware(thunk));

export default store;
