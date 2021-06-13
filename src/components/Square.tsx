import { Button } from "@chakra-ui/button";
import * as React from "react";

import { Value } from "../game-state";

export type SquareProps = {
	value: Value;
	onClick: () => void;
};

export const Square: React.FC<SquareProps> = ({ value, onClick }) => {
	return (
		<Button
			onClick={onClick}
			variant="outline"
			borderRadius="0"
			borderColor="gray.700"
			width="40px"
			height="40px"
			fontSize="3xl"
			margin="-2px"
			sx={{
				":focus": {
					boxShadow: `0 0 0 2px rgba(251, 255, 0, 0.575)`,
					zIndex: 10,
				},
			}}
		>
			{value}
		</Button>
	);
};
// 	return <StyledSquare onClick={props.onClick}>{props.value}</StyledSquare>;
// }

// export const StyledSquare = styled.button`
// 	width: 40px;
// 	height: 40px;
// 	background: white;
// 	border: 1px solid #333333;
// 	padding: 0;
// 	font-size: 24px;
// 	font-weight: bold;
// `;
