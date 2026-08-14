import { BiographyView } from "../BiographyView";
import type { TeamMember } from "./TeamMember";
import { TeamPhotoPaths } from "./TeamPhotoPaths";

const NewTeamMemberBiography = () => (
	<BiographyView>
	</BiographyView>
);

export const NewTeamMember: TeamMember = {
	name: "FIXME",
	role: "Testifying Expert",
//	photoPath: TeamPhotoPaths.NewTeamMember,
	biography: NewTeamMemberBiography,
};
