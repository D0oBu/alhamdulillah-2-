import React from 'react';
import {Text} from	'react-native';

class Judul extends React.Component{
	render(){
		return ( 
			<Text style = {salon.judul}>Biodata : </Text>
			)
	}
}

const salon = {
	judul: {
		color: "#0055a4",
		fontSize: 75,
		fontWeight:'bold'
	}

}

export default Judul;