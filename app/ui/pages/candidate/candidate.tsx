import type { Route } from "./+types/candidate";

const Candidate = ({ params }: Route.ComponentProps) => {
	return (
		<div>
			<h1>Candidate {params.candidate}</h1>
		</div>
	);
};

export default Candidate;
