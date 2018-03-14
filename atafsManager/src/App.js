import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'

import reducers from './reducers'
import LoginForm from './components/LoginForm'

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
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        )
    }
}

export default App