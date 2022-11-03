import React from "react";

export const GridContainer = ({ children, className }: any) => {
	return <div className={"grid " + className}>{children}</div>;
};
