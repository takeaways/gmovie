import React from 'react';
import styled from 'styled-components';

const LoaderBlock = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
  justify-content: center;
  font-size:4rem;
  align-items:center;
`;

const Loader = () => {
	return <LoaderBlock>Loading........</LoaderBlock>;
};

export default Loader;
