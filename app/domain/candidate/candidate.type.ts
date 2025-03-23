interface AcademicBackground {
	academic_level: string;
	career: string;
	study_center: string;
}

interface ProfessionalExperience {
	position: string;
	institution?: string;
	department?: string;
	specialization?: string[];
	start_date: string;
	end_date: string;
}

interface Contribution {
	type: string;
	details: string[];
}

interface Candidacy {
	position: string;
	election: string;
	source: string;
	interview: string;
}

interface ICandidate {
	academic_background: AcademicBackground[];
	age: string;
	candidacy: Candidacy;
	contributions: Contribution[];
	name: string;
	photo_url: string;
	professional_experience: ProfessionalExperience[];
	type: ICandidateType;
}

type ICandidateType = `${CandidateTypeEnum}`;

enum CandidateTypeEnum {
	JUGADOS_DISTRITO = "jugados-distrito",
	MAGISTRATURAS_CIRCUITO = "magistraturas-circuito",
	SALA_SUPERIOR_TRIBUNAL_ELECTORAL = "sala-superior-tribunal-electoral",
	SALAS_REGIONALES_TRIBUNAL_ELECTORAL = "salas-regionales-tribunal-electoral",
	SUPREMA_CORTE = "suprema-corte",
	TRIBUNAL_DISCIPLINA = "tribunal-disciplina",
}

export type { ICandidate, ICandidateType };
export { CandidateTypeEnum };
