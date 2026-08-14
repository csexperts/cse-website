import { BiographyView } from "../BiographyView";
import type { TeamMember } from "./TeamMember";
import { TeamPhotoPaths } from "./TeamPhotoPaths";

const PatrickZimmermanBiography = () => (
	<BiographyView>
		<p>
			Patrick Zimmerman is a digital historian and ethnographer, data scientist, and web developer. As an independent consultant since 2017, Patrick has provided technical analysis for expert-witness reports on internet privacy and consumer data confidentiality since 2022, including several brought against major technology companies.
		</p>
		<p>
			He currently serves as Vice President and Secretary of the Center for Equitable Policy in a Changing World. His recent projects include mapping climate risk in Seattle, an analysis of environmental and economic factors driving displacement in Puget Sound, an ongoing study mapping wildfire smoke and regional air quality, and a teaching tool examining how competing policy priorities reshape school district boundaries in Seattle Public Schools. His earlier scholarship on regionalism, linguistic politics, and online political organization formed the basis of his book, <cite>Faer Asturies: La política llingüística y la construcción frustrada del nacionalismu asturianu</cite>. Patrick received his PhD from Carnegie Mellon University, and his Bachelor’s from the University of Pennsylvania.
		</p>
	</BiographyView>
);

export const PatrickZimmerman: TeamMember = {
	name: "Patrick Zimmerman",
	role: "Staff",
	photoPath: TeamPhotoPaths.PatrickZimmerman,
	biography: PatrickZimmermanBiography,
};
