import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  StatusBar 
} from 'react-native';
import Logo from '../Component/Logo';
import Form from '../Component/Form';

export default class Signup extends React.Component{
    render() {
      return (
          <View style={styles.container}>
          <Logo/>
          <Form type="Siginup"/>
          <View style={styles.signupTextCon}>
              <Text style={styles.signupText}>Already have an account?</Text>
              <Text style={styles.signupButton}>Sign in</Text>
          </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a237e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTextCon: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
    color:'rgba(255, 255, 255, 0.6)',
    fontSize: 16
  },
  signupButton: {
    color:'#e91e63',
    fontSize:16,
    fontWeight:'500'
  }
});


