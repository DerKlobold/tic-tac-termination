import { Box } from "@chakra-ui/layout";
import React from "react";

type HighlightProps = {
	isActive: boolean;
};

export const Highlight: React.FC<HighlightProps> = ({ isActive, children }) => (
	<Box boxShadow={isActive ? "outline" : "none"}>{children}</Box>
);
// 	padding: 2px;
// 	background: ${(props) => (props.isActive ? "aquamarine" : "white")};
