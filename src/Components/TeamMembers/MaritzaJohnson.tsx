import { BiographyView } from "../BiographyView";
import type { TeamMember } from "./TeamMember";
import { TeamPhotoPaths } from "./TeamPhotoPaths";

const MaritzaJohnsonBiography = () => (
	<BiographyView>
		<p>
			Maritza Johnson conducts research on human-centered security and privacy, studying how people understand and make decisions about their digital privacy and how systems can be designed to serve them better. Her work spans usable privacy settings, social network privacy, smartphone permissions, and the privacy expectations people bring to connected devices in their homes. She has examined why online privacy controls so often fail the people who rely on them.
		</p>
		<p>
			Maritza was the founding director of the Center for Digital Civil Society at the University of San Diego, where she also created an AI Ethics course for the Master of Science in Applied Artificial Intelligence program. Previously, she was a user experience researcher at Google, a technical privacy manager at Facebook, a researcher at the International Computer Science Institute affiliated with UC Berkeley, and a lecturer at UC Berkeley's School of Information. She is a contributor to "Toward Trustworthy AI Development: Mechanisms for Supporting Verifiable Claims" and has served on the National Academy of Sciences Forum on Cyber Resilience.
		</p>
		<p>
			Maritza received her Ph.D. and M.S. in Computer Science from Columbia University and her B.A. in Computer Science from the University of San Diego. Her research on the failure of online social network privacy settings won the Future of Privacy Forum's Privacy Papers for Policy Makers Award in 2011.
		</p>
	</BiographyView>
);

export const MaritzaJohnson: TeamMember = {
	name: "Maritza Johnson",
	role: "Testifying Expert",
	photoPath: TeamPhotoPaths.MaritzaJohnson,
	biography: MaritzaJohnsonBiography,
};
