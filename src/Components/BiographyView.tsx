import type { PropsWithChildren } from "react";


export const BiographyView = (props: PropsWithChildren) => {
	return (
		<div className="bio">
			{props.children}
		</div>
	);
};
