import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  StatusBar 
} from 'react-native';

export default class Logo extends React.Component{
	render () {
		return (
			<View style={styles.container}>
				<Image style={{width: 100, height: 100}}
          			source={require('../Image/ee.png')}/>
          		<Text style={styles.logoText}>Welcome To My app.</Text>	
          	</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  logoText: {
  	marginVertical:15,
  	fontSize:18,
  	color:'rgba(255, 255, 255, 0.7)'
  }
});
