import {
	CandidateTypeEnum,
	type ICandidateType,
} from "~/domain/candidate/candidate.type";

const getCandidatureTitle = (candidatureType: ICandidateType): string => {
	switch (candidatureType) {
		case CandidateTypeEnum.JUGADOS_DISTRITO:
			return "Jugados Distrito";
		case CandidateTypeEnum.MAGISTRATURAS_CIRCUITO:
			return "Magistraturas Circuito";
		case CandidateTypeEnum.SALA_SUPERIOR_TRIBUNAL_ELECTORAL:
			return "Sala Superior Tribunal Electoral";
		case CandidateTypeEnum.SALAS_REGIONALES_TRIBUNAL_ELECTORAL:
			return "Salas Regionais Tribunal Electoral";
		case CandidateTypeEnum.SUPREMA_CORTE:
			return "Suprema Corte";
		case CandidateTypeEnum.TRIBUNAL_DISCIPLINA:
			return "Tribunal Disciplina";
		default:
			throw new Error("Invalid candidature type");
	}
};

export { getCandidatureTitle };
