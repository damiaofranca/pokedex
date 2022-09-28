import React, { useEffect, useState } from "react";
import { Container, Search } from "./styles";
import api from "../../api";

const SearchBar: React.FC<{ getData: (data: any) => void }> = ({ getData }) => {
	const [searchText, setSearchText] = useState<string>("");
	const fetchPokemon = async (name: string) => {
		try {
			const { data } = await api.get<any[]>(`/pokemon/${name}`, {
				params: {
					limit: 500,
				},
			});
			getData(
				searchText.length >= 3
					? { results: [{ ...data, url: (data as any).id }] }
					: data
			);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (searchText?.length > 3) {
			const delay = setTimeout(
				() => fetchPokemon(searchText.toLowerCase()),
				800
			);
			return () => clearTimeout(delay);
		} else if (searchText.length === 0) {
			fetchPokemon("");
		}
	}, [searchText]);

	return (
		<Container>
			<Search
				type="text"
				placeholder="Type something."
				value={searchText}
				onChange={(event) => setSearchText(event.target.value)}
			/>
		</Container>
	);
};

export default SearchBar;
