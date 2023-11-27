import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 1rem 2rem;
`;

export const CardBox = styled.div`
	display: flex;
	min-height: 24rem;
	margin-bottom: 2rem;
	width: 33.3333333333%;
	justify-content: center;

	@media screen and (min-width: 581px) and (max-width: 840px) {
		width: 50%;
	}

	@media screen and (max-width: 580px) {
		width: 100%;
	}
`;

export const Card = styled.div`
	width: 56%;
	display: flex;
	align-items: center;
	border-radius: 0.4rem;
	flex-direction: column;
	box-sizing: border-box;
	padding: 1rem 0 2rem 0;
	border: 1px solid ${(props) => props.theme.border};
	background-color: ${(props) => props.theme.primary};

	@media screen and (min-width: 1101px) and (max-width: 1450px) {
		width: 70%;
	}

	@media screen and (max-width: 1100px) {
		width: 86%;
	}
`;

export const ImgPokemon = styled.img`
	width: auto;
	height: 12rem;
`;

export const NamePokemon = styled.h3`
	color: #ffffff;
	font-size: 24px;
	font-weight: 700;
	margin: 0 0 auto 0;
	font-family: "Poppins", sans-serif;
`;

export const SeeMore = styled.button`
	width: 88%;
	height: 3rem;
	border: none;
	color: #ebf2fa;
	cursor: pointer;
	font-weight: 700;
	font-size: 1.1rem;
	border-radius: 0.17rem;
	background-color: #ffb301;
	font-family: "Poppins", sans-serif;
	&:hover {
		background-color: #efa800;
	}
`;
