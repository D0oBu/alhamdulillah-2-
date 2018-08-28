import React from 'react';
import { StyleSheet, Text, View , Image  } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Eka Setiyanto</Text>
        <Text>18</Text>
        <Text>XI RPL 3</Text>
         <Image 
       style={{width: 350, height: 350}}
       resizeMode="contain"
       source={{ uri: 'https://scontent.fcgk6-1.fna.fbcdn.net/v/t1.0-9/40053586_233452617337573_5487203324916662272_n.jpg?_nc_cat=0&_nc_eui2=AeG7KfyNagBYuSOY0EY7XtUwIsnj4XDTo1NiAV7erlxYlB82bEjICQHROzSymZmqg6nPjqOHr69UDO6WobUlx8fLbBoBrhVreCyN12zgEmp3Yw&oh=769accbeeffc8b43c3c2afa9e866d4b5&oe=5C009BD7' }}
    />
    <Text style={styles.welcome} numberOfLines={1} onLongPress={() => alert('longPress')}>
     Press Cmd+R to reload,{'\n'}
     Cmd+D or shake for dev menu
    </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
