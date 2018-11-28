import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';

import { Navi } from '../components/Navi';

// React router documentation for testing
// https://reacttraining.com/react-router/web/guides/testing

describe('<Navi />', () => {
	// TODO: Update to work with redux store https://redux.js.org/recipes/writingtests
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Router initialEntries={['/']}>
				<Navi />
			</Router>,
			div
		);
	});
});
