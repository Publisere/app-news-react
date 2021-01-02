import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

export default class Splash extends React.Component {

	goToScreen(routeName) {
		const resetAction = StackActions.reset({
			index: 0,
			key: null,
			actions: [NavigationActions.navigate({ routeName: routeName })],
		});
		this.props.navigation.dispatch(resetAction);
	}

	componentDidMount(){
		setTimeout( () => {
			//this.goToScreen('Home')
			this.goToScreen('Root')
		}, 2000, this)
	}

	render(){
		return (
			<View style={styles.container}>
				<Image source={{uri: 'https://i.imgur.com/r0jUwOD.png'}} style={{width: 250, height: 250}} />
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#33B747',
		alignItems: 'center',
		justifyContent: 'center'
	},
});