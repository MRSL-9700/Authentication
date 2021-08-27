import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';
import {Buton, Input, Spinner} from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  onButonClicked = () => {
    const {email, password} = this.state;
    if (email !== '') {
      if (password !== '') {
        //alert('Okey');
        //firebase.auth().signInWithEmailAndPassword(email, password)
        this.onClicks.apply(this);

        setTimeout(() => {
          firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
              firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFailed.bind(this));
            });
        }, 4000);
      } else {
        console.error('Please enter your password');
      }
    } else {
      console.error('Please enter your email');
    }
  };

  onClicks = () => {
    console.log('onButonClicked');
    this.setState({error: '', loading: true});
    console.log(this.state);
  };

  onLoginSuccess = () => {
    this.setState({
      email: '',
      password: '',
      error: false,
      loading: false,
    });
    console.log('onLoginSuccess');
    console.log(this.state);
  };
  onLoginFailed = () => {
    this.setState({
      error: true,
      loading: false,
    });
    console.log('onLoginFailed');
    console.log(this.state);
  };

  render() {
    const {FormWrapper, InfoLabel} = Form;

    const {error, loading} = this.state;
    const errorMsg = error ? (
      <Text style={InfoLabel}>Authentication Failed !</Text>
    ) : null;
    const loginButton = loading ? (
      <Spinner />
    ) : (
      <Buton title="Login" onPress={this.onButonClicked} />
    );

    return (
      <View style={FormWrapper}>
        <Input
          label="Email"
          placeholder="Enter Email"
          keyboardType="email-address"
          onChangeText={text => {
            this.setState({
              email: text,
            });
            console.log(this.state.email);
          }}
          value={this.state.email}
          /*
          mrsl@udemy.com
          &&&
          test@udemy.com
          */
        />
        <Input
          label="Password"
          placeholder="Enter Password"
          secureTextEntry
          onChangeText={text => {
            this.setState({
              password: text,
            });
            console.log(this.state.password);
          }}
          value={this.state.password}
        />
        {errorMsg}
        {loginButton}
      </View>
    );
  }
}

const Form = StyleSheet.create({
  FormWrapper: {
    width: 'auto',
    height: 300,
    margin: 30,
    flexDirection: 'column',
    alignItems: 'center',
  },
  InputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 0.6,
    borderBottomWidth: 0.4,
    borderColor: 'black',
  },
  InputLabel: {
    width: 80,
    marginRight: 7,
    textAlign: 'left',
  },
  InputStyle: {
    width: 175,
  },
  InfoLabel: {
    color: 'red',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  Hide: {
    display: 'none',
  },
  Show: {
    display: 'flex',
  },
});

export default LoginForm;
