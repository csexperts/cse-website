import { BiographyView } from "../BiographyView";
import type { TeamMember } from "./TeamMember";
import { TeamPhotoPaths } from "./TeamPhotoPaths";

const JosephBonneauBiography = () => (
	<BiographyView>
		<p>
			Joseph Bonneau is a researcher focused on computer security, applied cryptography, decentralized systems and blockchains. His research has spanned a broad range of topics from human behavior to theoretical results in cryptography. He has pioneered multiple new applications of cryptography, including the academic study of blockchain systems, cryptographic approaches to transparency, and cryptographically verifiable lotteries. His technical expertise includes cryptocurrencies, encrypted messaging tools, TLS and encryption on the web. He's also a co-author of a popular, freely available textbook _Bitcoin and Cryptocurrency Technologies_.
		</p><p>
			Joseph (Joe) is currently an Associate Professor of Computer Science at the Courant Institute, New York University. Previously, he has taught at Stanford, Princeton and the University of Melbourne. He served as a Research Partner at Andreessen-Horowitz (2022-2025), a Technology Fellow at the Electronic Frontier Foundation (2015-2017) and a research scientist at Google (2012-2013). He received a Ph.D. in Computer Science from the University of Cambridge in 2012, and B.S. and M.S. degrees in Computer Science from Stanford University in 2006 and 2007.
		</p>
	</BiographyView>
);

export const JosephBonneau: TeamMember = {
	name: "Joseph Bonneau",
	role: "Testifying Expert",
	photoPath: TeamPhotoPaths.JosephBonneau,
	biography: JosephBonneauBiography,
};
