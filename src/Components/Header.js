import React from 'react';
import { Link as link, withRouter } from 'react-router-dom';

import styled from 'styled-components';

const HeaderBlock = styled.header`
	color: white;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	padding: 0px 10px;
	background-color: rgba(20, 20, 20, 0.8);
	z-index: 10;
	box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
const List = styled.ul`
	display: flex;
`;
const Item = styled.li`
	width: 50px;
	height: 50px;
	text-align: center;
	border-bottom: 3px solid
		${(props) => (props.current ? '#3498db' : 'transparent')};
	transition: border-bottom 0.4s ease-in-out;
`;
const Link = styled(link)`
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Header = ({ location: { pathname } }) => {
	return (
		<HeaderBlock>
			<List>
				<Item current={pathname === '/'}>
					<Link to="/">MOVIES</Link>
				</Item>
				<Item current={pathname === '/tv'}>
					<Link to="/tv">TV</Link>
				</Item>
				<Item current={pathname === '/search'}>
					<Link to="/search">SEARCH</Link>
				</Item>
			</List>
		</HeaderBlock>
	);
};

export default withRouter(Header);
