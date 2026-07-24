import { BiographyView } from "../BiographyView";
import type { TeamMember } from "./TeamMember";
import { TeamPhotoPaths } from "./TeamPhotoPaths";


export const SaraLazarusBiography = () => (
	<BiographyView>
		<p>
			Sara Lazarus is a security practitioner whose experience spans incident response, security operations, and the design and assessment of enterprise security programs. Her hands-on work covers breach investigation and response, security operations center leadership, corporate IT security, and compliance across frameworks such as SOC 2, ISO 27001, NIST 800-53, and CMMC.
		</p>
		<p>
			Sara is the founder of Faded Jeans Technology LLC, where she helps companies build and strengthen security programs that can withstand both compliance audits and real-world threat actors. Before founding her firm, she led Incident Response and SecOps teams, including building a 24x7 Security Operations Center and incident response team responsible for Salesforce's GovCloud environments. She later served as the first Head of Security and IT at a high-growth fintech, where she built its security, DevOps, and corporate IT functions from the ground up. Sara holds an MBA from The Wharton School with a concentration in Entrepreneurship and Innovation.
		</p>
	</BiographyView>
);

export const SaraLazarus: TeamMember = {
	name: "Sara Lazarus",
	role: "Staff",
	photoPath: TeamPhotoPaths.SaraLazarus,
	biography: SaraLazarusBiography,
};
