import React, { useState, useEffect, useRef } from 'react';
import DetailPresender from './DetailPresender';
import { moviesApi } from '../../api';

const DetailContainer = ({
	match: {
		params: { id },
	},
	history: { push },
	location: { pathname },
}) => {
	const [result, setResult] = useState(null);

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const isMovie = useState(pathname.includes('/movie/'));

	useEffect(() => {
		setLoading(true);
		const parsedId = parseInt(id);
		if (isNaN(parsedId)) return push('/');
		try {
			(async () => {
				let resultData = '';
				if (isMovie) {
					const { data } = await moviesApi.movieDetail(parsedId);
					resultData = data;
				} else {
					const { data } = await moviesApi.movieDetail(parsedId);
					resultData = data;
				}
				setResult(resultData);
			})();
		} catch {
			setError("Can't find anythings..");
		} finally {
			setLoading(false);
		}
	}, [isMovie, id, push]);

	return <DetailPresender result={result} error={error} loading={loading} />;
};

export default DetailContainer;
