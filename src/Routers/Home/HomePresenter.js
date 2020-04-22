import React from 'react';

import styled from 'styled-components';
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';
import Error from '../../Components/Error';
import Poster from '../../Components/Poster';

const Container = styled.div`
	padding: 0px 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => {
	return loading ? (
		<Loader />
	) : (
		<Container>
			{nowPlaying && nowPlaying.length > 0 && (
				<Section title={'Now Playing'}>
					{nowPlaying.map((movie) => (
						<Poster key={movie.id} {...movie} isMovie={true} />
					))}
				</Section>
			)}
			{upcoming && upcoming.length > 0 && (
				<Section title={'Upcoming Playing'}>
					{upcoming.map((movie) => (
						<Poster key={movie.id} {...movie} isMovie={true} />
					))}
				</Section>
			)}
			{popular && popular.length > 0 && (
				<Section title={'Popular Playing'}>
					{popular.map((movie) => (
						<Poster key={movie.id} {...movie} isMovie={true} />
					))}
				</Section>
			)}
			{error && <Error text={error} />}
		</Container>
	);
};

export default HomePresenter;
