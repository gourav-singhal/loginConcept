import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import styles from './landingPage.styles';

export default class LandingPage extends Component {
  static navigationOptions = {
    header : null,
  }

  handleSignInPress = () => {
    const { navigate } = this.props.navigation;
    navigate('signin');
  }

  handleSignUpPress = () => {
    const { navigate } = this.props.navigation;
    navigate('signup');
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../../assets/bg.jpg')}
          style={styles.bgImage}
        />
        <Image source={require('../../../assets/curve1.png')}
          style={styles.curve}
        >
          <View style={styles.textContainer}>
            <TouchableOpacity
              style={styles.text1Container}
              onPress={this.handleSignInPress}
            >
              <Text style={styles.text1}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.text2Container}
              onPress={this.handleSignUpPress}
            >
              <Text style={styles.text2}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </Image>
      </View>
    );
  }
}
