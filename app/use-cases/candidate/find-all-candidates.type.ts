import type { IFindAllRequest } from "~/domain/candidate/candidate.repository";
import type { ICandidate } from "~/domain/candidate/candidate.type";

interface IFindAllCandidatesCase {
	findAllCandidates(request: IFindAllRequest): Promise<ICandidate[]>;
}

export type { IFindAllCandidatesCase };
