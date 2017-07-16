import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './signup.styles';

export default class SignUp extends Component {
  static navigationOptions = {
    title: 'Sign Up',
    cardStyle: {
      backgroundColor: 'transparent'
    },
    headerStyle: {
        backgroundColor: 'transparent',
        position: 'absolute',
        height: 50,
        top: 0,
        left: 0,
        right: 0,
      },
      headerTintColor: 'white'
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
        <View style={styles.image1}>
          <Image source={require('../../../assets/signupbg.jpg')}
            style={styles.bgImage}
          >
            <Image
              source={require('../../../assets/logo.png')}
              style={styles.bgImage1}
              resizeMode='contain'
            />
          </Image>
        </View>
        <View style={styles.image2}>
          <Image source={require('../../../assets/signup.png')}
            style={styles.curve}
          >
            <View style={styles.formContainer}>

              <View style={styles.userContainer}>
                <View style={styles.userIcon}>
                  <Icon name='ios-person-outline' size={20} color='#cfc391' />
                </View>
                <View style={styles.input}>
                  <TextInput
                    placeholder='Username'
                    placeholderTextColor='#cfc391'
                    style={{width: 170}}
                  />
                </View>

              </View>


              <View style={styles.mailContainer}>
                <View style={styles.mailIcon}>
                  <Icon name='ios-mail-outline' size={20} color='#cfc391' />
                </View>
                <View style={styles.input}>
                  <TextInput
                    placeholder='Email'
                    placeholderTextColor='#cfc391'
                    style={{width: 170}}
                  />
                </View>
              </View>

              <View style={styles.passContainer}>
                <View style={styles.passIcon}>
                  <Icon name='ios-lock-outline' size={20} color='#cfc391' />
                </View>
                <View style={styles.input}>
                  <TextInput
                    placeholder='Password'
                    placeholderTextColor='#cfc391'
                    style={{width: 170}}
                  />
                </View>
              </View>

              <View style={styles.nullContainer}>
                <View style={styles.nullIcon}></View>
              </View>

                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={{color: '#9d3e46'}}>Sign up</Text>
                </TouchableOpacity>

            </View>
          </Image>
        </View>
        </View>

    );
  }
}
