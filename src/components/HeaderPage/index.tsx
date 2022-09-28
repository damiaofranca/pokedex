import PokemonIcon from "../../assets/icons/pokemon-logo.svg";
import { Container, Logo } from "./styles";
import SwitchTheme from "../SwitchTheme";
import React from "react";

const HeaderPage: React.FC = () => {
	return (
		<Container>
			<Logo src={PokemonIcon} alt={"Logo do Pokemon"} />
			<SwitchTheme />
		</Container>
	);
};

export default HeaderPage;
