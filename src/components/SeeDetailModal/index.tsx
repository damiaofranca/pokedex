import React, { useEffect, useState } from "react";
import api from "../../api";
import CloseIcon from "../../assets/icons/close-icon";
import { getIdFromPokemon } from "../../utils/functions";
import { Pokedex } from "../../utils/interfaces";
import {
	Backdrop,
	Box,
	Column,
	ColValue,
	ContainerColumn,
	ContainerImg,
	ContainerRow,
	Header,
	HeaderMobile,
	ImgPokemon,
	Item,
	LeftSide,
	List,
	RightSide,
	Row,
	Specify,
	SpecifyValue,
	Stats,
	StatsName,
	TitleLabel,
	TitleMobile,
} from "./styles";

interface ModalProps {
	pokemon: any;
	isVisible: boolean;
	onClose: () => void;
}

const SeeDetailModal: React.FC<ModalProps> = ({
	onClose,
	isVisible,
	pokemon,
}) => {
	const [data, setData] = useState<Pokedex | null>(null);
	const fetchPokemonDetails = async (url: string) => {
		try {
			const { data } = await api.get<Pokedex>(url);
			setData(data);
		} catch (error) {
			console.log(error);
		}
	};

	const dividerNumber = (num: number) => num / 10;

	useEffect(() => {
		if (isVisible) {
			fetchPokemonDetails(
				typeof pokemon.url === "string"
					? pokemon.url
					: `https://pokeapi.co/api/v2/pokemon/${pokemon.url}/`
			);
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}
	}, [isVisible]);
	return (
		<>
			{data ? (
				<Backdrop className={isVisible ? "show-modal" : "close-modal"}>
					<Box className={isVisible ? "show-box-modal" : "close-box-modal"}>
						<LeftSide>
							<HeaderMobile>
								<TitleMobile>{data.name}</TitleMobile>
								<CloseIcon onClick={onClose} />
							</HeaderMobile>
							<ContainerImg>
								<ImgPokemon
									src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
										typeof pokemon.url === "string"
											? getIdFromPokemon(pokemon.url)
											: pokemon.url
									}.png`}
									alt={pokemon.name}
								/>
							</ContainerImg>
						</LeftSide>
						<RightSide>
							<Header>
								{data.name}
								<CloseIcon onClick={onClose} />
							</Header>
							<List>
								{data.types.map((type) => (
									<Item key={type.type.name}>{type.type.name}</Item>
								))}
							</List>
							<ContainerRow>
								<Specify>
									<TitleLabel>Peso</TitleLabel>
									<SpecifyValue>{`${dividerNumber(
										data.weight
									)}Kg`}</SpecifyValue>
								</Specify>
								<Specify>
									<TitleLabel>Altura</TitleLabel>
									<SpecifyValue>{`${dividerNumber(
										data.height
									)}Kg`}</SpecifyValue>
								</Specify>
							</ContainerRow>
							<ContainerColumn>
								<TitleLabel>Abilidades</TitleLabel>
								<List>
									{data.abilities.map((abilitie) => (
										<Item key={abilitie.ability.name}>
											{abilitie.ability.name}
										</Item>
									))}
								</List>
							</ContainerColumn>
							<Column style={{ height: "13rem" }}>
								<TitleLabel>Estatística</TitleLabel>
								<Row>
									<Column
										style={{
											flex: 1,
											display: "flex",
											justifyContent: "flex-end",
										}}
									>
										<Stats>
											<ColValue
												color="#3ffd2e"
												title={`${data.stats[0].base_stat}%`}
												value={data.stats[0].base_stat}
											/>
											<StatsName>HP</StatsName>
										</Stats>
									</Column>
									<Column
										style={{
											flex: 1,
											display: "flex",
											justifyContent: "flex-end",
										}}
									>
										<Stats>
											<ColValue
												color="#ff4e2f"
												title={`${data.stats[1].base_stat}%`}
												value={data.stats[1].base_stat}
											/>
											<StatsName>Ataque</StatsName>
										</Stats>
									</Column>
									<Column
										style={{
											flex: 1,
											display: "flex",
											justifyContent: "flex-end",
										}}
									>
										<Stats>
											<ColValue
												color="#2f39ff"
												title={`${data.stats[2].base_stat}%`}
												value={data.stats[2].base_stat}
											/>
											<StatsName>Defesa</StatsName>
										</Stats>
									</Column>
									<Column
										style={{
											flex: 1,
											display: "flex",
											justifyContent: "flex-end",
										}}
									>
										<Stats>
											<ColValue
												color="#ff932d"
												title={`${data.stats[5].base_stat}%`}
												value={data.stats[5].base_stat}
											/>
											<StatsName>Velocidade</StatsName>
										</Stats>
									</Column>
								</Row>
							</Column>
						</RightSide>
					</Box>
				</Backdrop>
			) : null}
		</>
	);
};

export default SeeDetailModal;
