import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAHV2zu5dn1BCQf11hciBqzbv9w3HV_a40",
      authDomain: "first-react-native-4ab37.firebaseapp.com",
      databaseURL: "https://first-react-native-4ab37.firebaseio.com",
      projectId: "first-react-native-4ab37",
      storageBucket: "first-react-native-4ab37.appspot.com",
      messagingSenderId: "415318520177"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
