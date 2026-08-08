import { BiographyView } from "../BiographyView";
import type { TeamMember } from "./TeamMember";
import { TeamPhotoPaths } from "./TeamPhotoPaths";

const BruceSchneierBiography = () => (
	<BiographyView>
		<p>
			Bruce Schneier is an internationally renowned security technologist, called a security guru by the Economist. His research and expertise includes cryptography, cybersecurity, digital privacy, data integrity, artificial intelligence security and safety, Internet-of-Things security, corporate and government surveillance, digital fraud, blockchain and cryptocurrencies, cybersecurity policy, and the intersection of AI with democracy and governance. He has testified before Congress more than a half dozen times and served as an expert witness on a variety of cases, spanning class-action privacy lawsuits, contract disputes, and patent disputes.
		</p><p>
			Bruce is a Lecturer in Public Policy at the Harvard Kennedy School, and at the Munk School at the University of Toronto. He is the New York Times best-selling author of 14 books&mdash;including <cite>A Hacker's Mind</cite> and <cite>Rewiring Democracy</cite>&mdash;as well as hundreds of articles, essays, and academic papers. His influential newsletter <a href="https://www.schneier.com/crypto-gram/" target="_blank">Crypto-Gram</a> and blog <a href="https://www.schneier.com/" target="_blank">Schneier on Security</a> are read by over 250,000 people. He is a fellow at the Berkman-Klein Center for Internet and Society at Harvard University, a board member of the Electronic Frontier Foundation and AccessNow, and an advisory board member of EPIC and VerifiedVoting.org. He is the Chief of Security Architecture at Inrupt, Inc.
		</p>
	</BiographyView>
);

export const BruceSchneier: TeamMember = {
	name: "Bruce Schneier",
	role: "Testifying Expert",
	photoPath: TeamPhotoPaths.BruceSchneier,
	biography: BruceSchneierBiography,
};
