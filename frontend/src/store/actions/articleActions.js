import axios from 'axios';
export const ADD_ARTICLE = 'ADD_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const FETCH_DATA = 'FETCH_DATA';
export const DATA_FETCHED = 'DATA_FETCHED';
export const ERROR = 'ERROR';

export const addArticle = article => {
	return dispatch => {
		dispatch({ type: FETCH_DATA });
		axios
			.post(
				'https://anywhere-reader-test.herokuapp.com/api/users/{id}/articles',
				article
			)
			.then(response =>
				dispatch({
					type: ADD_ARTICLE,
					payload: {
						//the payload you're giving the API to populate the new article, will likely just be the article url that's fed to the scraper
					}
				})
			)
			.then(
				// Re-GET all the articles, with the newly added one included
				axios
					.get(
						'https://anywhere-reader-test.herokuapp.com/api/users/{id}/articles'
					)
					.then(response =>
						dispatch({ type: DATA_FETCHED, payload: response.data })
					)
			)
			.catch(err => dispatch({ type: ERROR, err }));
	};
};

export const deleteArticle = article => {
	return dispatch => {
		dispatch({ type: FETCH_DATA });
		axios
			.delete(
				'https://anywhere-reader-test.herokuapp.com/api/users/{id}/articles',
				article
			)
			.then(response =>
				dispatch({
					type: DELETE_ARTICLE,
					payload: {
						//the payload you're giving the API to delete the article
					}
				})
			)
			.then(
				// Re-GET all the articles of that user to confirm the deleted article isnt there
				axios
					.get(
						'https://anywhere-reader-test.herokuapp.com/api/users/{id}/articles'
					)
					.then(response =>
						dispatch({ type: DATA_FETCHED, payload: response.data })
					)
			)
			.catch(err => dispatch({ type: ERROR, err }));
	};
};