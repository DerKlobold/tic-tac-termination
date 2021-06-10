import * as React from "react";
import styled from "styled-components";

import { Value } from "../game-state";

export type SquareProps = {
	value: Value;
	onClick: () => void;
};

export function Square(props: SquareProps) {
	return <StyledSquare onClick={props.onClick}>{props.value}</StyledSquare>;
}

export const StyledSquare = styled.button`
	width: 40px;
	height: 40px;
	background: white;
	border: 1px solid #333333;
	padding: 0;
	font-size: 24px;
	font-weight: bold;
`;
