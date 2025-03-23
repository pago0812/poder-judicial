import { CandidateLocalRepository } from "~/adapter/local/candidate/candidate.repository";
import type { IFindAllCandidatesCase } from "./find-all-candidates.type";
import type { IFindAllRequest } from "~/domain/candidate/candidate.repository";

const FindAllCandidates = (): IFindAllCandidatesCase => {
	const candidateLocalRepository = CandidateLocalRepository();

	const findAllCandidates = (request: IFindAllRequest) => {
		return candidateLocalRepository.findAll(request);
	};

	return { findAllCandidates } as IFindAllCandidatesCase;
};

export { FindAllCandidates };
