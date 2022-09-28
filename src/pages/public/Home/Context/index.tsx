import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, WhiteTheme } from "./globalStyles";

interface Theme {
	themeSchema: "white" | "dark";
	setTheme: (theme: "white" | "dark") => void;
}

export const ThemeContext = createContext<Theme>({} as Theme);

const ThemeGlobalProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [themeSchema, setThemeSchema] = useState<"white" | "dark">("white");

	const setTheme = (theme: "white" | "dark") => {
		setThemeSchema(theme);
	};

	return (
		<ThemeProvider theme={themeSchema === "white" ? WhiteTheme : DarkTheme}>
			<ThemeContext.Provider
				value={{
					setTheme,
					themeSchema,
				}}
			>
				{children}
			</ThemeContext.Provider>
		</ThemeProvider>
	);
};

export default ThemeGlobalProvider;
