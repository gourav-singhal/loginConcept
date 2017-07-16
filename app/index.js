
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import {
  StackNavigator,
} from 'react-navigation';

import styles from './index.styles';
import { LandingPage, SignIn, SignUp } from './components/index';

EStyleSheet.build({
  $appThemeColor: '#cfc391',
});

const App = StackNavigator({
  landing: { screen: LandingPage },
  signin: { screen: SignIn },
  signup: { screen: SignUp },
});


const Index = () => (
  <App />
)

export default Index;
