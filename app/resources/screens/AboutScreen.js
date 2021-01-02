import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

const AboutScreen = props => {
	return (
		<View style={styles.container}>
			<Text>About Us</Text>
		</View>
	)
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AboutScreen;