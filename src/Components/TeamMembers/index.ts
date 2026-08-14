import { BruceSchneier } from "./BruceSchneier";
import { SergeEgelman } from "./SergeEgelman";
import { StuartSchechter } from "./StuartSchechter";
import { JonathanHochman } from "./JonathanHochman";
import { KathleenSeidel } from "./KathleenSeidel";
import { SaraLazarus } from "./SaraLazarus";
import { MaritzaJohnson } from "./MaritzaJohnson";
import { roleToPriority } from "./TeamMember";
import { JosephBonneau } from "./Joseph Bonneau";
import { JackyMallet } from "./JackyMallet";
import { PatrickZimmerman } from "./PatrickZimmerman";
import { SamSchreiber } from "./SamSchreiber";

export const TeamMembers = [
	BruceSchneier,
	SergeEgelman,
	StuartSchechter,
	JonathanHochman,
	KathleenSeidel,
	SaraLazarus,
	MaritzaJohnson,
	JosephBonneau,
	PatrickZimmerman,
	JackyMallet,
	SamSchreiber,
].sort( (a, b) => {
	if (a.role !== b.role) return roleToPriority[a.role] - roleToPriority[b.role];
	return a.name.localeCompare(b.name);
});