import React, { useEffect, useState } from "react";
import { getIdFromPokemon } from "../../utils/functions";
import SeeDetailModal from "../SeeDetailModal";
import SeeDetailModalBySearch from "../SeeDetailModalBySearch";
import {
	Card,
	CardBox,
	Container,
	ImgPokemon,
	NamePokemon,
	SeeMore,
} from "./styles";

interface Test {
	name: string;
	url: string | number;
}

interface PokemonList {
	results: Test[];
}

const ListPokemon: React.FC<{
	pokemons: PokemonList;
}> = ({ pokemons }) => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [pokemonSelected, setPokemonSelected] = useState<any>({});
	return (
		<Container>
			{pokemons.results
				? pokemons.results.map((value, idx: number) => (
						<CardBox key={idx}>
							<Card>
								<ImgPokemon
									src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
										typeof value.url === "string"
											? getIdFromPokemon(value.url)
											: value.url
									}.png`}
								/>
								<NamePokemon>{value.name}</NamePokemon>
								<SeeMore
									onClick={() => {
										setIsVisible(true);
										setPokemonSelected(value);
									}}
								>
									Ver mais
								</SeeMore>
							</Card>
						</CardBox>
				  ))
				: null}
			{!pokemons.results && !pokemons ? "Não encontrado" : null}
			<SeeDetailModal
				pokemon={pokemonSelected}
				isVisible={isVisible}
				onClose={() => {
					setIsVisible(false);
				}}
			/>
		</Container>
	);
};

export default ListPokemon;
