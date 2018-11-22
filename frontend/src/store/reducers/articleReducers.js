import {
	ADD_ARTICLE,
	DELETE_ARTICLE,
	FETCH_ARTICLE_DATA,
	ARTICLE_DATA_FETCHED,
	ARTICLE_ERROR
} from '../actions';

const initialState = {
	articles: [],
	articleStatus: {
		fetching: false,
		success: false,
		error: ''
	}
};

const articleReducers = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ARTICLE_DATA:
			return { ...state, fetching: true };
		case ARTICLE_ERROR:
			return { ...state, error: 'Error' + action.err };
		case ARTICLE_DATA_FETCHED:
			return { ...state, articles: action.payload, fetching: false };

		case ADD_ARTICLE:
			const articleAdded = { ...action.payload };
			return {
				// not sure if this should be returned
				articles: [
					...state.articles,
					{
						...articleAdded
					}
				],
				fetching: false
			};

		case DELETE_ARTICLE:
			const articleDeleted = { ...action.payload };
			return {
				// not sure if this should be returned
				articles: [
					...state.articles,
					{
						...articleDeleted
					}
				],
				fetching: false
			};
		//////
		default:
			return state;
	}
};

export default articleReducers;
