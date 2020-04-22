import React from 'react';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import Section from '../../Components/Section';
import Error from '../../Components/Error';
import Poster from '../../Components/Poster';

const Container = styled.div`
	padding: 0px 20px;
`;
const Form = styled.form`
	margin-bottom: 55px;
	width: 100%;
`;
const Input = styled.input`
	all: unset;
	font-size: 2rem;
	width: 100%;
`;

const SearchPresenter = ({
	movieResult,
	tvResult,
	searchTerm,
	error,
	loading,
	handleSubmit,
	onChangeTerm,
}) => {
	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<Input
					placeholder="Search Movie or TV Shows.... "
					value={searchTerm}
					onChange={onChangeTerm}
				/>
			</Form>
			{loading ? (
				<Loader />
			) : (
				<>
					{movieResult && movieResult.length > 0 && (
						<Section title={'Movie Results'}>
							{movieResult.map((movie) => (
								<Poster key={movie.id} {...movie} isMovie={true} />
							))}
						</Section>
					)}
					{tvResult && tvResult.length > 0 && (
						<Section title={'Shows Results'}>
							{tvResult.map((show) => (
								<Poster key={show.id} {...show} />
							))}
						</Section>
					)}
				</>
			)}
			{error && <Error text={error} />}
		</Container>
	);
};

export default SearchPresenter;
