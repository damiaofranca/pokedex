import styled from "styled-components";

export const Container = styled.div`
	min-height: 100vh;
	transition: all 0.2s ease;
	background-color: ${(props) => props.theme.background};
`;

export const AsideInfo = styled.aside`
	margin-top: 2rem;
`;
