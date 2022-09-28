import styled from "styled-components";

export const Container = styled.div`
	width: 55px;
	height: 30px;
`;

export const SwitchSchema = styled.div`
	width: 55px;
	height: 30px;
	border: none;
	display: flex;
	cursor: pointer;
	overflow: hidden;
	position: absolute;
	border-radius: 25px;
	align-items: center;
	justify-content: left;
	background-color: white;
	& > .circle {
		position: absolute;
		height: 20px;
		width: 20px;
		background-color: rgba(0, 0, 0, 0.01);
		border-radius: 50%;
		transition: translate 0.25s;
		margin-left: 5px;

		&:before {
			content: "";
			transition: transform 0.5s;
			position: absolute;
			height: 55%;
			width: 55%;
			border-radius: 50%;
			background-color: white;
			transform: translate(-100%, -100%);
		}
	}

	&.light {
		& > .circle {
			background-color: #ffcc01;
			&:before {
				transform: translate(-100%, -100%);
			}
		}
	}

	&.dark {
		& > .circle {
			translate: calc(100% + 5px);
			background-color: black;

			&:before {
				transform: translate(0%, 0%);
			}
		}
	}
`;
