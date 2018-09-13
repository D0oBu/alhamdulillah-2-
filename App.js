import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  StatusBar 
} from 'react-native';

import Login from './Screen/Login';
import Signup from './Screen/Signup';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
              backgroundColor="#000051"
               barStyle="light-content"
       />
        <Signup/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a237e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
