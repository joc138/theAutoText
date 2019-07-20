import React from 'react'
import { Text, View, Button, StyleSheet, TouchableHighlight } from 'react-native';
const HomeScreen = ( {navigation }) => (
      	<View style={styles.container}>
		<TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Set')} underlayColor= '#f5f'>
		  <Text style={styles.buttonText}>+</Text>
		</TouchableHighlight>
	</View>
	
)
const styles = StyleSheet.create({
	button: {
		position: 'absolute',
		bottom: 30,
		right: 30,
		width: 90,
		height: 90,
		alignItems: 'center',
		backgroundColor: '#05a5d1',
		borderRadius: 175,
	},
	buttonText: {
		fontSize: 90,
		flex: 1,
		bottom: 15,
		justifyContent: 'center',
		alignItems: 'center',
		color: 'white',
	},
  	container: {
     		flex: 1,
    		justifyContent: 'center',
  		alignItems: 'center',
   		 backgroundColor: '#abcdef',
  	},
});
export default HomeScreen
