import { BiographyView } from "../BiographyView";
import type { TeamMember } from "./TeamMember";
import { TeamPhotoPaths } from "./TeamPhotoPaths";


export const ErinWalkBiography = () => (
	<BiographyView>
		<p>
			Erin Walk is a computational social scientist specializing in digital communication, social media, and the empirical study of online behavior. Her work combines large-scale platform data, survey research, experiments, and computational methods to examine how people interact with digital technologies, how information spreads online, and how platform design shapes communication and public discourse.
</p><p>
			Erin's experience spans academia and industry, including technology policy at Cloudflare and research on political communication and digital information ecosystems at the University of Pennsylvania. She earned her Ph.D. in Social and Engineering Systems from the Massachusetts Institute of Technology and her bachelor's degree in Mechanical Engineering from Harvard University.
		</p>
	</BiographyView>
);

export const ErinWalk: TeamMember = {
	name: "Erin Walk",
	role: "Consulting Expert",
	photoPath: TeamPhotoPaths.ErinWalk,
	biography: ErinWalkBiography,
};
