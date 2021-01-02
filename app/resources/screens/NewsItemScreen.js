import React from 'react';
import { StyleSheet, Text, View, Platform, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';

const NewsItemScreen = props => {

	const articleUrl = props.navigation.getParam('articleUrl');

	const article = useSelector(state => state.news.articles.find(article => article.url === articleUrl));

	return (
		<View>
			<View>
				<Text>{article.title}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create ({
});

export default NewsItemScreen;