import { ThemeContext } from "../../pages/public/Home/Context";
import React, { useContext } from "react";
import { Container, SwitchSchema } from "./styles";

export const SwitchTheme: React.FC<any> = () => {
	const { themeSchema, setTheme } = useContext(ThemeContext);
	return (
		<Container>
			<SwitchSchema
				className={themeSchema === "white" ? "light" : "dark"}
				onClick={() => setTheme(themeSchema === "white" ? "dark" : "white")}
			>
				<div className="circle"></div>
			</SwitchSchema>
		</Container>
	);
};

export default SwitchTheme;
