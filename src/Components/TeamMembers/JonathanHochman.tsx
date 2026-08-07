import { BiographyView } from "../BiographyView";
import type { TeamMember } from "./TeamMember";
import { TeamPhotoPaths } from "./TeamPhotoPaths";

const JonathanHochmanBiography = () => (
	<BiographyView>
		<p>
Jonathan Hochman, PhD, is a computer scientist and consulting and testifying expert specializing in software engineering, internet technologies, cybersecurity, digital identity, data privacy, e-commerce, digital advertising, search engine optimization (SEO), and pay-per-click advertising (PPC).
		</p><p>
Since 2007, Jonathan has been retained by plaintiffs and defendants in hundreds of matters involving patents, trademarks, copyrights, trade secrets, contracts, defamation, online reputation, unfair competition, and fraud. He has testified in 24 trials and 76 depositions, including proceedings in U.S. federal and state courts, arbitrations, the Federal Court of Canada, and the District Court of Israel.
		</p><p>
Jonathan earned his PhD in Computer Science from Yale University, where he is a Research Associate and has taught courses in cybersecurity, digital identity, privacy, and secure software development. He is also a named inventor on three U.S. patents and was a co-founder of CodeGuard, a website-security company acquired by Sectigo.
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
