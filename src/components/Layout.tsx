import styled from "styled-components";
type LayoutProps = {
  gap: number;
};

export const Row = styled.div<LayoutProps>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap}em;
`;

export const Column = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap}em;
`;

type HighlightProps = {
  isActive: boolean;
};

export const Highlight = styled.section<HighlightProps>`
  padding: 2px;
  background: ${(props) => (props.isActive ? "aquamarine" : "white")};
`;
export const Title = styled.h1`
  font-size: 1.5em;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: italic;
  color: black;
`;
