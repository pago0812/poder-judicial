import type {
	ICandidateRepository,
	IFindAllRequest,
} from "~/domain/candidate/candidate.repository";
import { candidates } from "./candidate.data";

const CandidateLocalRepository = (): ICandidateRepository => {
	const findAll = (request: IFindAllRequest) => {
		return Promise.resolve(
			candidates.filter((candidate) => candidate.type === request.type)
		);
	};

	return {
		findAll,
	};
};

export { CandidateLocalRepository };
