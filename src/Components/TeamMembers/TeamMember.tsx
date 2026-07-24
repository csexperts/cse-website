import type { JSX } from "react";

export const RolesOrderedByPriority = [
	"Testifying Expert",
	"Consulting Expert",
	"Staff",
];

export type Role = typeof RolesOrderedByPriority[number];

export const roleToPriority: Record<Role, number> = RolesOrderedByPriority.reduce((acc, role, index) => {
	acc[role] = index;
	return acc;
}, {} as Record<Role, number>);

export interface TeamMember {
	name: string;
	role: Role;
	areasOfExpertise?: string[];
	photoPath?: string;
	biography: () => JSX.Element;
}
