import React from "react";
import { BorderedContainer } from "./BorderedContainer";
import { GridContainer } from "./GridContainer";
import { GridItem } from "./GridItem";

export const PokemonTeamBuilder = () => {
	return (
		<>
			<BorderedContainer className="w-[80vw] h-[80vh] border-teal-800">
				<GridContainer className="gap-2 grid-flow-col grid-rows-3 md:grid-rows-2 min-h-[85%] w-[80%]">
					<GridItem>
						<BorderedContainer className="w-9/12 min-h-[70%]">
							1
						</BorderedContainer>
					</GridItem>
					<GridItem>
						<BorderedContainer className="w-9/12 min-h-[70%]">
							1
						</BorderedContainer>
					</GridItem>
					<GridItem>
						<BorderedContainer className="w-9/12 min-h-[70%]">
							1
						</BorderedContainer>
					</GridItem>
					<GridItem>
						<BorderedContainer className="w-9/12 min-h-[70%]">
							1
						</BorderedContainer>
					</GridItem>
					<GridItem>
						<BorderedContainer className="w-9/12 min-h-[70%]">
							1
						</BorderedContainer>
					</GridItem>
					<GridItem>
						<BorderedContainer className="w-9/12 min-h-[70%]">
							1
						</BorderedContainer>
					</GridItem>
				</GridContainer>
			</BorderedContainer>
		</>
	);
};
