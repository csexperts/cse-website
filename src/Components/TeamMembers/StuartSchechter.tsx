import { BiographyView } from "../BiographyView";
import type { TeamMember } from "./TeamMember";
import { TeamPhotoPaths } from "./TeamPhotoPaths";

const StuartSchechterBiography = () => (
	<BiographyView>
		<p>
			Stuart Schechter is a researcher of computer security and privacy, human behavior, and ethics. His research helped debunk such  previously-common practices such as mandatory (e.g., 90-day) password changes, password-complexity policies, security questions (e.g., favorite pet), and site-authentication images. His expertise includes privacy investigations, and he has built software to help track the flow of information from websites to third parties, as well as to analyze exported analytics data and configuration files (e.g., Google Tag Manager containers).
		</p>
		<p>
			Stuart is currently an Associate in the School of Engineering and Applied Sciences at Harvard University. Previously, he was a lecturer at the University of California at Berkeley, a Researcher at Microsoft Research (2007-2016), and a member of the technical staff at MIT Lincoln Laboratory (2004-2007). He received his Ph.D. in Computer Science from Harvard University In 2004, and his Bachelors of Science in Computer and Information Science (BSCIS) from The Ohio State University in 1996.
		</p>
	</BiographyView>
);

export const StuartSchechter: TeamMember = {
	name: "Stuart Schechter",
	role: "Testifying Expert",
	photoPath: TeamPhotoPaths.StuartSchechter,
	biography: StuartSchechterBiography,
};
