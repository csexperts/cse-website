import { removeAllSpaces } from "../Utilities/removeAllSpaces";
import { TeamMember } from "./TeamMembers/TeamMember";
import { TeamMembers } from "./TeamMembers";

export const TeamMemberView = (teamMember: TeamMember) => (
	<div id={removeAllSpaces(teamMember.name)} className="expert">
		<img src={teamMember.photoPath}/>
		<h3>{teamMember.name}</h3>
		<div className="roles">{teamMember.role}</div>
		{teamMember.biography()}
	</div>
)

export const TeamMembersListView = () => {
	return (
		<>
			{TeamMembers.map((teamMember) => 
				(<TeamMemberView key={teamMember.name} {...teamMember} />)
			)}
		</>
	);
};

export const OurTeamView = () => (<>
	<h1>Our Team</h1>
	<section className="testifying-experts">
		<TeamMembersListView />
	</section>
</>);