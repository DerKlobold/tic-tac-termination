import React from "react";
import { FieldState, Value } from "../game-state";
import { Column, Row, Highlight } from "./Layout";
import { SquareProps, Square } from "./Square";
import { Box } from './Box';

export type FieldProps = {
    field: FieldState,
    state: Value,
    active: boolean,
    onClick: (square: number) => void
}

export function Field({ field, state, active, onClick }: FieldProps) {
    const createProps = (square: number): SquareProps => {
      return {
        value: field.state[square],
        onClick: () => onClick(square),
      };
    };

    return (
      <Highlight isActive={active}>
        <Box>
          <Column gap={0}>
            <Row gap={0}>
              <Square {...createProps(0)} />
              <Square {...createProps(1)} />
              <Square {...createProps(2)} />
            </Row>
            <Row gap={0}>
              <Square {...createProps(3)} />
              <Square {...createProps(4)} />
              <Square {...createProps(5)} />
            </Row>
            <Row gap={0}>
             <Square {...createProps(6)} />
             <Square {...createProps(7)} />
             <Square {...createProps(8)} />
            </Row>
         </Column>
        </Box>
      </Highlight>
    );
  }
  