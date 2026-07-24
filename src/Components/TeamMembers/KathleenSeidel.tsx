import { BiographyView } from "../BiographyView";
import type { TeamMember } from "./TeamMember";
import { TeamPhotoPaths } from "./TeamPhotoPaths";

const KathleenSeidelBiography = () => (
	<BiographyView>
		<p>
			At times a children's librarian, website developer, and proprietor of Neurodiversity.com, Kathleen Seidel currently provides research services to Computer Science Experts, LLC. Kathleen's activism against pseudoscientific autism causation hypotheses and treatments was the subject of a chapter in Dr. Paul Offit's 2008 book <cite>Autism's False Prophets</cite>, was praised by Dr. Simon Baron-Cohen in the British Medical Journal, and is described in her 2019 account, &ldquo;Neurodiversity.com: A Decade of Advocacy.&rdquo; She is co-author, with security technologist Bruce Schneier, of the 2016 paper, &ldquo;A Worldwide Survey of Encryption Products,&rdquo; and with historian David Perry, of the 2017 &ldquo;Ruderman White Paper on Media Coverage of the Murder of People with Disabilities by Their Caregivers.&rdquo; The award-winning author Andrew Solomon described her as &ldquo;a brilliant diaskeuast&rdquo; with a &ldquo;meticulous intelligence, bracing precision, passion for accuracy, and sense of justice,&rdquo; and Bruce Schneier praised her as &ldquo;the best researcher I have ever found.&rdquo; Kathleen received her Bachelor of Arts degree in English Literature and Book Arts from U.C. Santa Cruz in 1977, and her Master of Library Science from Columbia University in 1978.
		</p>
	</BiographyView>
);

export const KathleenSeidel: TeamMember = {
	name: "Kathleen Seidel",
	role: "Staff",
	photoPath: TeamPhotoPaths.KathleenSeidel,
	biography: KathleenSeidelBiography,
};
