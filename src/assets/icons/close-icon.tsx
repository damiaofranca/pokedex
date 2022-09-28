import React from "react";
import styled from "styled-components";

const Path = styled.path`
	fill: ${(props) => props.theme.inverse};
`;

interface CloseProps {
	onClick: () => void;
}

const CloseIcon: React.FC<CloseProps> = ({ onClick }) => {
	return (
		<svg
			width="31"
			height="31"
			fill="none"
			onClick={onClick}
			viewBox="0 0 31 31"
			style={{ cursor: "pointer" }}
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path d="M15.6785 2.724C22.591 2.724 28.1785 8.3115 28.1785 15.224C28.1785 22.1365 22.591 27.724 15.6785 27.724C8.76597 27.724 3.17847 22.1365 3.17847 15.224C3.17847 8.3115 8.76597 2.724 15.6785 2.724ZM20.166 8.974L15.6785 13.4615L11.191 8.974L9.42847 10.7365L13.916 15.224L9.42847 19.7115L11.191 21.474L15.6785 16.9865L20.166 21.474L21.9285 19.7115L17.441 15.224L21.9285 10.7365L20.166 8.974Z" />
		</svg>
	);
};

export default CloseIcon;
