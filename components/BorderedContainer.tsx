import React from "react";

export const BorderedContainer = ({ children, className }: any) => {
	return (
		<div
			className={
				className + " border-4 rounded-lg flex justify-center items-center"
			}
		>
			{children}
		</div>
	);
};
