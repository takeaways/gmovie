import React, { useState, useEffect } from 'react';
import HomePresenter from './HomePresenter';
import { moviesApi } from '../../api';

const HomeContainer = () => {
	const [nowPlaying, setNowPlaying] = useState([]);
	const [upcoming, setUpcoming] = useState([]);
	const [popular, setPopular] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		try {
			(async () => {
				const {
					data: { results: results1 },
				} = await moviesApi.nowPlaying();
				setNowPlaying(results1);
				const {
					data: { results: results2 },
				} = await moviesApi.upcoming();
				setUpcoming(results2);
				const {
					data: { results: results3 },
				} = await moviesApi.popular();
				setPopular(results3);
			})();
		} catch (error) {
			setError("Cant't find Movies information.");
		} finally {
			setLoading(false);
		}
	}, []);

	return (
		<HomePresenter
			nowPlaying={nowPlaying}
			upcoming={upcoming}
			popular={popular}
			error={error}
			loading={loading}
		/>
	);
};

export default HomeContainer;
