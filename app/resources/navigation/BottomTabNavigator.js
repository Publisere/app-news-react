import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

//import Home from "./Home";
//import News from "./News";
import NewsListScreen from '../screens/NewsListScreen';
import NewsItemScreen from '../screens/NewsItemScreen';

const TabNavigator = createBottomTabNavigator({
	Home: {
		screen: NewsListScreen,
		navigationOptions: {
			title: "Home",
		},
	},
	News: {
		screen: NewsItemScreen,
		navigationOptions: {
			title: "News",
		},
	},
});

export default createAppContainer(TabNavigator);