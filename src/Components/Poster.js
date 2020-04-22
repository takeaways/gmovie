import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
	font-size: 12px;
`;
const Rating = styled.span`
	bottom: 5px;
	right: 5px;
	position: absolute;
	opacity: 0;
`;

const Image = styled.div`
	height: 180px;
	background-size: cover;
	border-radius: 5px;

	background-position: center center;
	transition: opacity 0.2s ease-in-out;
	background-image: url(${(props) =>
		`https://image.tmdb.org/t/p/w300/` + props.bgUrl});
`;
const ImageContainer = styled.div`
	margin-bottom: 5px;
	position: relative;
	&:hover {
		${Image} {
			opacity: 0.3;
		}
		${Rating} {
			opacity: 1;
		}
	}
`;

const Title = styled.span`
	display: block;
	font-size: 12px;
	margin-bottom: 2px;
`;
const Year = styled.span`
	font-size: 10px;
	color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({
	id,
	vote_average,
	poster_path,
	original_title,
	release_date,
	first_air_date, // show
	original_name, // show
	isMovie = false,
}) => {
	return (
		<Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
			<Container>
				<ImageContainer>
					<Image bgUrl={poster_path} />
					<Rating>{vote_average}/10</Rating>
				</ImageContainer>
				<Title>{original_title || original_name}</Title>
				<Year>
					{release_date
						? release_date.substring(0, 4)
						: first_air_date.substring(0, 4)}
				</Year>
			</Container>
		</Link>
	);
};

export default Poster;
