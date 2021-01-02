export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const ADD_FAVORITES = 'ADD_FAVORITES';

export const fetchArticles = () => {
    return async dispatch => {

        const response = await fetch('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a3fbcc11e54044668f58e4f191d9b4a0');

        const responseData = await response.json();

        dispatch({
            type: FETCH_ARTICLES,
            payload: responseData.articles
        });
    }
}