import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'

import reducers from './reducers'
import LoginForm from './components/LoginForm'
import Router from './Router'

class App extends Component {
    componentDidMount() {
        // Initialize Firebase using single quotes
        const config = {
            apiKey: 'AIzaSyAhs4iL_-a_3TexUcVEJdjHdlcsbJFpr78',
            authDomain: 'atafsmanager.firebaseapp.com',
            databaseURL: 'https://atafsmanager.firebaseio.com',
            projectId: 'atafsmanager',
            storageBucket: 'atafsmanager.appspot.com',
            messagingSenderId: '823521182885'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App