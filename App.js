import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';

import AppNavigator from './app/resources/navigation/AppNavigator';
import ReduxStore from './app/resources/redux/ReduxStore';

export default function App() {
	return (
		<Provider store={ReduxStore}>
			<AppNavigator />
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
