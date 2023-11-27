import styled from "styled-components";

export const Backdrop = styled.div`
	top: 0%;
	left: 0;
	z-index: 4;
	width: 100%;
	height: 100%;
	position: fixed;
	justify-content: center;
	@keyframes smoothEffect {
		from {
			background-color: #ffffff00;
		}
		to {
			background-color: #0000007a;
		}
	}
	&.show-modal {
		display: flex;
		animation-duration: 0.5s;
		animation-name: smoothEffect;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}
	&.close-modal {
		display: none;
	}
`;

export const Box = styled.div`
	width: 100%;
	display: flex;
	min-height: 30rem;
	margin-top: 10rem;
	height: fit-content;
	flex-direction: row;
	border-radius: 0.4rem;
	box-sizing: border-box;
	@keyframes smoothBoxEffect {
		from {
			background-color: #ffffff00;
		}
		to {
			background-color: ${(props) => props.theme.secondary};
		}
	}
	&.show-box-modal {
		display: flex;
		animation-duration: 0.5s;
		animation-name: smoothBoxEffect;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}
	&.close-box-modal {
		display: none;
	}
	@media screen and (max-width: 672px) {
		& {
			max-width: 90%;
			margin-top: 6rem;
			min-height: 40rem;
			flex-direction: column;
		}
	}
	@media screen and (max-width: 870px) and (min-width: 672px) {
		& {
			max-width: 80%;
		}
	}
	@media screen and (max-width: 991px) and (min-width: 870px) {
		& {
			max-width: 70%;
		}
	}
	@media screen and (min-width: 992px) and (max-width: 1199px) {
		& {
			max-width: 60%;
		}
	}
	@media screen and (min-width: 1200px) {
		& {
			max-width: 40%;
		}
	}
`;

export const LeftSide = styled.div`
	width: 100%;
	display: flex;
	max-width: 30%;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	border-top-left-radius: 0.4rem;
	border-bottom-left-radius: 0.4rem;
	background-color: ${(props) => props.theme.primary};

	@media screen and (min-width: 1200px) and (max-width: 1450px) {
		max-width: 40%;
	}

	@media screen and (max-width: 672px) {
		max-width: 100%;
		min-height: 14rem;
	}
`;

export const RightSide = styled.div`
	flex: 1;
	padding: 1.5rem 2rem;
	box-sizing: border-box;
	background-color: #ffffff;
	border-top-right-radius: 0.4rem;
	border-bottom-right-radius: 0.4rem;
`;

export const Header = styled.div`
	display: flex;
	font-size: 1.6rem;
	align-items: center;
	font-family: "Poppins", sans-serif;
	margin-bottom: 1.5rem;
	justify-content: space-between;

	@media screen and (max-width: 671px) {
		& {
			display: none;
		}
	}
`;

export const HeaderMobile = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 0.5rem 1rem;
	box-sizing: border-box;
	justify-content: space-between;
	@media screen and (min-width: 672px) {
		& {
			display: none;
		}
	}
`;

export const TitleMobile = styled.h3`
	margin: 0;
	width: 100%;
	color: #ffffff;
	font-size: 1.6rem;
	text-align: center;
	font-family: "Poppins", sans-serif;
`;

export const ContainerImg = styled.div`
	flex: 1;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ImgPokemon = styled.img`
	width: 86%;
	height: auto;

	@media screen and (max-width: 672px) {
		width: 10rem;
		height: auto;
	}
`;

export const List = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
`;

export const Item = styled.div`
	color: #fff;
	min-width: 6rem;
	font-weight: 500;
	margin: 0 0.5rem 1rem 0;
	font-size: 0.9rem;
	text-align: center;
	line-height: 1.8rem;
	letter-spacing: 0.1rem;
	border-radius: 0.04rem;
	box-sizing: border-box;
	font-family: sans-serif;
	font-family: "Poppins", sans-serif;
	background-color: ${(props) => props.theme.primary};

	&:first-child {
		margin-left: 0;
	}

	&:last-child {
		margin-right: 0;
	}
`;

export const ContainerRow = styled.div`
	display: flex;
	margin-bottom: 1rem;
	flex-direction: row;
`;

export const ContainerColumn = styled.div`
	display: flex;
	margin-bottom: 1rem;
	flex-direction: column;
`;

export const Specify = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 2rem;

	&:first-child {
		margin-left: 0;
	}

	&:last-child {
		margin-right: 0;
	}
`;

export const TitleLabel = styled.label`
	color: #7a7d80;
	font-weight: 700;
	margin: 0 0 0.4rem 0;
`;

export const SpecifyValue = styled.label`
	color: #2f3133;
	font-weight: 600;
	font-size: 0.96rem;
	font-family: cursive;
`;

export const Stats = styled.div`
	display: flex;
	width: fit-content;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

export const StatsName = styled.label`
	margin: 0.3rem 0 0 0;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Row = styled.div`
	flex: 1;
	display: flex;
	align-items: flex-end;
`;

export const ColValue = styled.div<{ value: number }>`
	width: 2.4rem;
	max-height: 10rem;
	background-color: ${(props) => props.theme.primary};
	height: ${(props) => `${(props.value * 10) / 100}rem`};
`;
