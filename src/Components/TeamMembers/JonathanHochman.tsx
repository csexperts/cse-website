import { BiographyView } from "../BiographyView";
import type { TeamMember } from "./TeamMember";
import { TeamPhotoPaths } from "./TeamPhotoPaths";

const JonathanHochmanBiography = () => (
	<BiographyView>
		<p>
			Jonathan Hochman, PhD serves as consulting and testifying expert for cases related to Internet marketing, Internet security, privacy, e-commerce, website development, digital forensics, and search engine optimization (SEO), as well as pay-per-click (PPC), mobile, and digital advertising. He has provided expert witness services since 2007 to plaintiffs and defendants alike for disputes involving trademarks, patents, trade secrets, copyrights, contracts, defamation and online reputation, unfair competition, conspiracy and fraud.
		</p>
		<p>
			Jonathan has testified at 24 trials and 66 depositions and has served as an expert in hundreds of cases. He has served clients located in the United States, United Kingdom, Canada, Australia, Israel, Ukraine, and Romania. Upon receiving his PhD from Yale University he was invited to join the faculty as a lecturer.
		</p>
	</BiographyView>
);

export const JonathanHochman: TeamMember = {
	name: "Jonathan Hochman",
	role: "Testifying Expert",
	areasOfExpertise: [
		"Marketing technology",
		"Security",
		"Privacy",
	],
	photoPath: TeamPhotoPaths.JonathanHochman,
	biography: JonathanHochmanBiography,
};
