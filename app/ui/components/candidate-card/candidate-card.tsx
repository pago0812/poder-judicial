import type { ICandidate } from "~/domain/candidate/candidate.type";
import style from "./candidate-card.module.css";

interface CandidateCardProps {
	candidate: ICandidate;
}

const CandidateCard = ({ candidate }: CandidateCardProps) => {
	return (
		<div className={style.card}>
			<p className={style.cardTitle}>{candidate.name}</p>
			<img
				className={style.cardImage}
				src={candidate.photo_url}
				alt={candidate.name}
			/>
		</div>
	);
};

export { CandidateCard };
