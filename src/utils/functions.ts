export const getIdFromPokemon = (url: string) => {
	var link = url.replace(/\/$/, "");
	return link.split("/")[link.split("/").length - 1];
};
