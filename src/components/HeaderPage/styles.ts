import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	padding: 0 2rem;
	min-height: 3.4rem;
	align-items: center;
	justify-content: space-between;
	background-color: ${(props) => props.theme.header.bg};
	box-shadow: 0px 2px 5px 0px ${(props) => props.theme.header.shadow};
`;

export const Logo = styled.img`
	width: auto;
	height: 2.4rem;
`;
