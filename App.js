import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import firebase from 'firebase';
import Banner from './src/components/banner';
import LoginForm from './src/components/LoginForm';
// eslint-disable-next-line no-unused-vars
import {Buton, Spinner} from './src/components/common';
class App extends Component {
  state = {
    loggenIn: false,
  };

  componentDidMount() {
    // Initialize Firebase
    console.log('--------------------------');
    console.log('onComponentDidMount');
    const firebaseConfig = {
      apiKey: 'AIzaSyDZouMpuHmeqjMwSUEkfYgMCqAH43iGLqs',
      authDomain: 'authentication-f8329.firebaseapp.com',
      projectId: 'authentication-f8329',
      storageBucket: 'authentication-f8329.appspot.com',
      messagingSenderId: '263197619623',
      appId: '1:263197619623:web:c4794152449ca666053282',
      measurementId: 'G-BXET1G15RV',
    };
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(user => {
      const loggenIn = user ? true : false;

      this.setState({
        loggenIn,
      });
    });
  }

  onSignOut() {
    firebase
      .auth()
      .signOut()
      .then(
        this.setState({
          loggenIn: false,
        }),
        console.log(this.state),
      )
      .catch(function (err) {
        console.error(err.message);
      });
  }

  render() {
    const {ContainerStyle} = Styles;
    const Content = this.state.loggenIn ? (
      <Buton title="Logout" onPress={this.onSignOut.bind(this)} />
    ) : (
      <LoginForm />
    );
    return (
      <View style={ContainerStyle}>
        <Banner header="Authentication" />
        {Content}
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  ContainerStyle: {
    flex: 1,
  },
});

export default App;
