import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
//import { ContactUs } from './contactus';
import { auth } from './Auth';
import { user } from './Users';
import { fxhistory } from './Fxhistory';
import { fx } from './Fx';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Register } from './Register';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth: auth, 
            user: user,
            fxhistory: fxhistory,
            fx: fx,
            ...createForms({
                feedback:  Register
            }) 
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}