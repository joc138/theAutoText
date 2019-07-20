import React from 'react'
import { Text, View, Button } from 'react-native';
const HomeScreen = ( {navigation }) => (
	<View>
		<Text> Home Screen </Text>	
		<Button onPress={() => navigation.navigate('Set')} title="click me" />
	</View>
	
)
export default HomeScreen
