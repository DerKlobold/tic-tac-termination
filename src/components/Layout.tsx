import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export const Layout: React.FC = ({ children }) => {
	const { toggleColorMode } = useColorMode();
	const oppositeColorModeName = useColorModeValue("dark", "light");
	const ColorModeIcon = useColorModeValue(FaMoon, FaSun);

	const lineColor = useColorModeValue("gray.300", "gray.700");

	return (
		<Box height="100%" minHeight="100vh" textAlign="center" position="absolute" width="100%">
			<Box
				paddingBottom={4}
				paddingTop={2}
				minHeight="4rem"
				paddingX={2}
				borderBottomWidth="1px"
				borderBottomColor={lineColor}
			>
				<Heading position="absolute" left={0} right={0} width="100%">
					Tic-Tac-Termination
				</Heading>
				<Flex justifyContent="flex-end">
					<IconButton
						size="md"
						fontSize="lg"
						aria-label={`Switch to ${oppositeColorModeName} mode`}
						variant="ghost"
						color="current"
						ml={{ base: "0", md: "3" }}
						onClick={toggleColorMode}
						icon={<ColorModeIcon />}
					/>
				</Flex>
			</Box>
			<Box
				height="calc(100% - 7rem)"
				display="flex"
				alignItems="center"
				justifyContent="center"
				flexDirection="column"
			>
				{children}
			</Box>
			<Box
				minHeight="3rem"
				display="flex"
				justifyContent="center"
				alignItems="flex-end"
				paddingBottom={2}
			>
				<Text>&copy; tobold 2021</Text>
			</Box>
		</Box>
	);
};
