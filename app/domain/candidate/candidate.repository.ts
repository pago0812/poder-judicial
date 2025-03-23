import type { ICandidate, ICandidateType } from "./candidate.type";

interface IFindAllRequest {
	type: ICandidateType;
}

interface ICandidateRepository {
	findAll(request: IFindAllRequest): Promise<ICandidate[]>;
}

export type { ICandidateRepository, IFindAllRequest };
