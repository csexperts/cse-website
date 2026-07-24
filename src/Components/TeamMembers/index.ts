import { BruceSchneier } from "./BruceSchneier";
import { SergeEgelman } from "./SergeEgelman";
import { StuartSchechter } from "./StuartSchechter";
import { JonathanHochman } from "./JonathanHochman";
import { KathleenSeidel } from "./KathleenSeidel";
import { SaraLazarus } from "./SaraLazarus";
import { MaritzaJohnson } from "./MaritzaJohnson";
import { roleToPriority } from "./TeamMember";

export const TeamMembers = [
	BruceSchneier,
	SergeEgelman,
	StuartSchechter,
	JonathanHochman,
	KathleenSeidel,
	SaraLazarus,
	MaritzaJohnson,
].sort( (a, b) => {
	if (a.role !== b.role) return roleToPriority[a.role] - roleToPriority[b.role];
	return a.name.localeCompare(b.name);
});