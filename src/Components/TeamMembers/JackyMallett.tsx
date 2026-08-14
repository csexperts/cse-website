import { BiographyView } from "../BiographyView";
import type { TeamMember } from "./TeamMember";
import { TeamPhotoPaths } from "./TeamPhotoPaths";

const JackyMallettBiography = () => (
	<BiographyView>
		<p>
			Jacky Mallett's research focuses on cyber defence, networks, distributed systems, and cryptocurrencies.  Her research looks at the behaviour and constraints on complex networked systems, with applications in computer and economic systems. She has identified several feedback loops in banking regulation, including the Asset Backed Security loophole which lay behind the 2008 crisis. She is also the author of Threadneedle, the first computer simulation to accurately reproduce the behaviour of the fractional reserve banking system using double entry bookkeeping.					
		</p>
		<p>
			Jacky is currently an Assistant Professor of Computer Science at Reykjavik University in Iceland, and Director of the Frostbyte Cybersecurity Research group there, which focuses on practical cyber  defence for small countries. She teaches courses in Cyber Defence, Computer Networks, Industrial Control Security and Financial Analysis and Simulation. Previously she worked developing consumer networking solutions at Sony Research (Belgium), as a developer for High Frequency Trading company, Madison Tyler, and as a Manager at Nortel Networks in the X.25 and Frame Relay division. She served on the Supervisory Board of the Icelandic Central Bank by appointment of the Icelandic Parliament.	
		</p>
	</BiographyView>
);

export const JackyMallett: TeamMember = {
	name: "Jacky Mallett",
	role: "Consulting Expert",
	photoPath: TeamPhotoPaths.JackyMallett,
	biography: JackyMallettBiography,
};
