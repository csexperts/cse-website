import { BiographyView } from "../BiographyView";
import type { TeamMember } from "./TeamMember";
import { TeamPhotoPaths } from "./TeamPhotoPaths";

const SergeEgelmanBiography = () => (
	<BiographyView>
		<p>
			Serge Egelman conducts research to protect consumers and help people make more informed online privacy and security decisions. His work has touched on topics such as security warnings, authentication, and the privacy of data on mobile devices and within mobile applications. Serge's research findings have led to congressional testimony, spawned numerous lawsuits and regulatory actions, and been featured in the New York Times, Washington Post, Wall Street Journal, Wired, CNET, NBC, and CBS.
		</p><p>
			Serge is the Research Director of the Usable Security and Privacy group at the International Computer Science Institute (ICSI), an independent research institute affiliated with UC Berkeley, and Chief Scientist at AppCensus, Inc., a startup performing on-demand privacy analysis of mobile apps for developers, regulators, and watchdog groups.
			He received his PhD from Carnegie Mellon University and his Bachelors from the University of Virginia.
			He has been recognized with the Caspar Bowden Award for Outstanding Research in Privacy Enhancing Technologies, the USENIX Security Distinguished Paper Award, the Spanish Data Protection Authority's Emilio Aced Personal Data Protection Research Award, the CNIL-INRIA Privacy Research Award, and the Carnegie Mellon University CyLab Distinguished Alumni Award.
		</p>
	</BiographyView>
);

export const SergeEgelman: TeamMember = {
	name: "Serge Egelman",
	role: "Testifying Expert",
	photoPath: TeamPhotoPaths.SergeEgelman,
	biography: SergeEgelmanBiography,
};
