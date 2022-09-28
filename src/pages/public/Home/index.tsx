import HeaderPage from "../../../components/HeaderPage";
import SearchBar from "../../../components/SearchBar";
import { AsideInfo, Container } from "./styles";
import React, { useEffect, useState } from "react";
import ListPokemon from "../../../components/ListPokemons";

const HomePage: React.FC = () => {
	const [pokemons, setPokemons] = useState<any>({});
	return (
		<Container>
			<HeaderPage />
			<AsideInfo>
				<SearchBar
					getData={(pokemons) => {
						setPokemons(pokemons);
					}}
				/>
			</AsideInfo>
			<ListPokemon pokemons={pokemons} />
		</Container>
	);
};

export default HomePage;
