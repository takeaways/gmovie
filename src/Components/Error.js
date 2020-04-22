import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Text = styled.span`
	color: #e74c3c;
	font-size: 3rem;
	font-weight: 600;
`;

const Error = ({ text }) => {
	return (
		<Container>
			<Text>{text}</Text>
		</Container>
	);
};

export default Error;
