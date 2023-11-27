import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Search = styled.input`
	width: 80%;
	border: none;
	font-size: 1rem;
	padding: 0.3rem 0.6rem;
	transition: all 0.2s ease;
	background-color: transparent;
	font-family: "Poppins", sans-serif;
	color: ${(props) => props.theme.inverse};
	border-bottom: 1px solid ${(props) => props.theme.border};
	&:focus {
		outline: none;
		border-bottom: 1px solid ${(props) => props.theme.inverse};

		&::placeholder {
			color: ${(props) => props.theme.inverse};
		}
	}
`;
