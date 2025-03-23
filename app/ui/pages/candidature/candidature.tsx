import { Fragment } from "react";
import { NavLink } from "react-router";
import type { Route } from "./+types/candidature";

import { FindAllCandidates } from "~/use-cases/candidate/find-all-candidates.case";
import { CandidateCard } from "~/ui/components/candidate-card/candidate-card";
import globalStyles from "../../styles/global.module.css";
import type { ICandidateType } from "~/domain/candidate/candidate.type";
import { getCandidatureTitle } from "~/utils/maps";

export async function loader({ params }: Route.LoaderArgs) {
	const { candidature } = params;

	return await FindAllCandidates().findAllCandidates({
		type: candidature as ICandidateType,
	});
}

const Candidature = ({
	loaderData: candidates,
	params,
}: Route.ComponentProps) => {
	const { candidature } = params;
	return (
		<div className={globalStyles.bodyContainer}>
			<div className={globalStyles.container}>
				<div className={globalStyles.titleContainer}>
					<NavLink to="/" end>
						<span
							className={`material-symbols-outlined ${globalStyles.backButton}`}
						>
							arrow_back
						</span>
					</NavLink>
					<h1 className={globalStyles.title}>
						{getCandidatureTitle(candidature as ICandidateType)}
					</h1>
				</div>
				<div className={globalStyles.candidateCardsContainer}>
					{candidates.map((candidate) => (
						<Fragment key={candidate.name}>
							<CandidateCard candidate={candidate} />
						</Fragment>
					))}
				</div>
			</div>
		</div>
	);
};

export default Candidature;
