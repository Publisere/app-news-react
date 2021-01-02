import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
//import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
//import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import Splash from '../screens/Splash';
import TabNavigator from "./BottomTabNavigator";
//import NewsListScreen from '../screens/NewsListScreen';
//import NewsItemScreen from '../screens/NewsItemScreen';

const AppNavigator = createStackNavigator({
	Splash: {
		screen: Splash,
		navigationOptions: {
			headerShown: false,
		},
	},
	Root: {
		screen: TabNavigator,
		navigationOptions: {
			headerShown: false,
		},
	},
},
	{
		initialRouteName: "Splash",
	}
);
export default createAppContainer(AppNavigator);