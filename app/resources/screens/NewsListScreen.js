import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as NewsAction from '../redux/actions/NewsAction';

import Card from '../components/Card';

const NewsListScreen = props => {
	
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(NewsAction.fetchArticles())
	}, [dispatch]);

	const articles = useSelector(state => state.news.articles);
	console.log(articles);	
	
	return (
		<FlatList
			data={articles}
			keyExtractor={item => item.url}
			renderItem={({item}) => (
				<Card navigation={props.navigation}
					title={item.title}
					description={item.description}
					image={item.urlToImage}
					url={item.url}
				/>
			)}
		/>
	)
}

const styles = StyleSheet.create ({
});

export default NewsListScreen;