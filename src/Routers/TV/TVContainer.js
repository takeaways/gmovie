import React, { useState, useEffect } from 'react';
import TVPresenter from './TVPresenter';
import { tvApi } from '../../api';

const TVContainer = () => {
	const [topRated, setTopRated] = useState(null);
	const [popular, setPopular] = useState(null);
	const [airingToday, setAiringToday] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		try {
			(async () => {
				const {
					data: { results: results1 },
				} = await tvApi.topRated();
				setTopRated(results1);
				const {
					data: { results: results2 },
				} = await tvApi.popular();
				setPopular(results2);
				const {
					data: { results: results3 },
				} = await tvApi.airingToday();
				setAiringToday(results3);
			})();
		} catch (error) {
			setError("Cant't find Movies information.");
		} finally {
			setLoading(false);
		}
	}, []);

	return (
		<TVPresenter
			topRated={topRated}
			popular={popular}
			airingToday={airingToday}
			error={error}
			loading={loading}
		/>
	);
};

export default TVContainer;
