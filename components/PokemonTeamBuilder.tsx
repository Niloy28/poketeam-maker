import React from "react";
import Icon from "supercons";
import { BorderedContainer } from "./BorderedContainer";
import { GridContainer } from "./GridContainer";
import { GridItem } from "./GridItem";

export const PokemonTeamBuilder = () => {
	const items = [1, 2, 3, 4, 5, 6];

	return (
		<>
			<BorderedContainer className="w-[80vw] h-[80vh] border-teal-800">
				<GridContainer className="gap-2 grid-flow-col grid-rows-3 md:grid-rows-2 min-h-[85%] w-[80%]">
					{items.map((i) => {
						return (
							<GridItem key={i}>
								<BorderedContainer className="w-11/12 min-h-[70%] btn">
									<Icon glyph="plus" size={64} />
								</BorderedContainer>
							</GridItem>
						);
						{
							console.log(i);
						}
					})}
				</GridContainer>
			</BorderedContainer>
		</>
	);
};
