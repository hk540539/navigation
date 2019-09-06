import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Routes/Home';
import Index from './Routes/Index';

const AppNavigator = createStackNavigator(
	{
		Home: {
			screen: Home,
			screenTwo: Index
		}
	},
	{
		defaultNavigationOptions: {
			title: 'Welcome',
			headerTintColor: '#fff',
			headerStyle: {
				backgroundColor: '#BA2F16'
			},
			headerTitleStyle: { color: '#FFF' }
		}
	}
);
const App = createAppContainer(AppNavigator);
export default App;
