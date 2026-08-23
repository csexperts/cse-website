import { BiographyView } from "../BiographyView";
import type { TeamMember } from "./TeamMember";
import { TeamPhotoPaths } from "./TeamPhotoPaths";

const SamSchreiberBiography = () => (
	<BiographyView>
		<p>
			Sam Schreiber is a former engineering executive with more than 25 years of experience in fintech, cybersecurity, enterprise software, and production operations. He has led engineering organizations responsible for mission-critical payment systems, application security, audit compliance, DevOps, and large-scale software delivery at companies including Finastra, D+H, Eden, and BankServ.
		</p>
		<p>
			Drawing on decades of executive leadership, engineering experience, project management and writing background, Sam provides technical consulting and expert support in litigation involving software development, security, enterprise systems, and engineering best practices, translating complex technical concepts into clear, well-supported analyses. Sam is currently a Partner at Hochman Consultants.		
		</p>
	</BiographyView>
);

export const SamSchreiber: TeamMember = {
	name: "Sam Schreiber",
	role: "Consulting Expert",
	photoPath: TeamPhotoPaths.SamSchreiber,
	biography: SamSchreiberBiography,
};
