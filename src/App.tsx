import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/public/Home";
import ThemeGlobalProvider from "./pages/public/Home/Context";

function App() {
	return (
		<ThemeGlobalProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</BrowserRouter>
		</ThemeGlobalProvider>
	);
}

export default App;
