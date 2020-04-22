import React from 'react';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';
import Error from '../../Components/Error';
import Poster from '../../Components/Poster';

const Container = styled.div`
	padding: 0px 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) => {
	return loading ? (
		<Loader />
	) : (
		<Container>
			{topRated && topRated.length > 0 && (
				<Section title={'Top Rated Shows'}>
					{topRated.map((show) => (
						<Poster key={show.id} {...show} />
					))}
				</Section>
			)}
			{popular && popular.length > 0 && (
				<Section title={'Popular Shows'}>
					{popular.map((show) => (
						<Poster key={show.id} {...show} />
					))}
				</Section>
			)}
			{airingToday && airingToday.length > 0 && (
				<Section title={'Airing Today Shows'}>
					{airingToday.map((show) => (
						<Poster key={show.id} {...show} />
					))}
				</Section>
			)}
			{error && <Error text={error} />}
		</Container>
	);
};

export default TVPresenter;
