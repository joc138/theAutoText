import React from 'react';
import DatePicker from 'react-native-datepicker';
import { Text, TextInput, View } from 'react-native';


this.state = {date:"15-05-1969"}
const setTextScreen = () => (
	<View>
		<Text>Set Text</Text>
		<DatePicker
		 style={{width: 200}}
		 date={this.state.date}
		 mode="date"
		 placeholder="select date"
		 format="DD-MM-YYYY"
		 minDate="01-01-2019"
		 maxDate="01-01-2069"
		 confirmBtnText="Confirm"
		 cancekBtnText="Cancel"
		 onDateChange={(date) => {this.setState({date: date})}}	
		/>		 
		<TextInput 
		 multiline = {true}
		 style={{height: 40,borderColor: 'gray', borderWidth: 1}}
		 numberOfLines = {4}
		 onChangeText={(text) => this.setState({text})}
		 value={this.state.text}
		/>
	</View>
	
);
export default setTextScreen
