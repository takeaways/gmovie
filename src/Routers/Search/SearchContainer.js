import SearchPresenter from './SearchPresenter';

import React, { useState, useCallback, useEffect } from 'react';
import { moviesApi, tvApi } from '../../api';

const SearchContainer = () => {
	const [movieResult, setMovieResults] = useState(null);
	const [tvResult, setTvResults] = useState(null);
	const [searchTerm, setSearchTerm] = useState('');
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleSubmit = useCallback(
		(e) => {
			e.preventDefault();
			searchByTurm(searchTerm);
		},
		[searchTerm]
	);

	const onChangeTerm = useCallback((e) => setSearchTerm(e.target.value), []);

	const searchByTurm = useCallback(async () => {
		try {
			setLoading(true);
			const {
				data: { results: result1 },
			} = await moviesApi.search(searchTerm);
			setMovieResults(result1);
			const {
				data: { results: result2 },
			} = await tvApi.search(searchTerm);
			setTvResults(result2);
			if (result1.length === 0 && result2.length === 0) {
				throw Error();
			}
		} catch (error) {
			setError("Can't find results.");
		} finally {
			setLoading(false);
		}
	}, [searchTerm]);

	return (
		<SearchPresenter
			movieResult={movieResult}
			tvResult={tvResult}
			searchTerm={searchTerm}
			error={error}
			loading={loading}
			handleSubmit={handleSubmit}
			onChangeTerm={onChangeTerm}
		/>
	);
};

export default SearchContainer;
