/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  StatusBar,
} from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import setTextScreen from './screens/setTextScreen';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
/*
const HomeScreen = () => (
      	<View style={styles.container}>
		<TouchableHighlight style={styles.button} underlayColor= '#f5f'>
		  <Text style={styles.buttonText}>+</Text>
		</TouchableHighlight>
	</View>

)
*/
const App = createStackNavigator({
	  Home: {
	  	screen: HomeScreen,
		navigationOptions: {
			headerTitle: 'Home'
		}
	  },
	  Set: {
	  	screen: setTextScreen,
		navigationOptions: {
			headerTitle: 'Set Text'
		}
	  }
	/**
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>*/ 
	
});

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

  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {
     flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#abcdef',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default createAppContainer(App);
