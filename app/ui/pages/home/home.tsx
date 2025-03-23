import type { Route } from "./+types/home";
import { NavLink } from "react-router";
import globalStyles from "../../styles/global.module.css";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Conoce a los candidatos a la Elección del Poder Judicial" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return (
		<div className={globalStyles.bodyContainer}>
			<div className={globalStyles.container}>
				<h1 className={globalStyles.title}>
					Conoce a los candidatos a la Elección del Poder Judicial 2025
				</h1>
				<p className={globalStyles.highlight}>Que es?</p>
				<p className={globalStyles.regularText}>
					El Proceso Electoral Judicial es el primero que se celebra en México,
					en el que se elegirán los cargos de Ministras y Ministros de la
					Suprema Corte de Justicia de la Nación (SCJN), las Magistraturas de
					las Salas Superior y Regionales del Tribunal Electoral del Poder
					Judicial de la Federación (TEPJF), las personas integrantes del
					Tribunal de Disciplina Judicial y Magistraturas de Circuito y Personas
					Juzgadoras de Distrito.
				</p>
				<p className={globalStyles.highlight}>Cuando?</p>
				<p> 1 de junio de 2025 (Votación de 8:00 a 18:00 horas)</p>
				<p className={globalStyles.highlight}>Cargos a elegir</p>
				<div className={globalStyles.cardsContainer}>
					<NavLink to="/suprema-corte">
						<div className={globalStyles.card}>
							<p>
								Ministras y Ministros de la Suprema Corte de Justicia de la
								Nación (SCJN)
							</p>
							<p className={globalStyles.highlight}>9 Cargos</p>
						</div>
					</NavLink>
					<NavLink to="/sala-superior-tribunal-electoral">
						<div className={globalStyles.card}>
							<p>
								Magistraturas de las Sala Superior del Tribunal Electoral del
								Poder Judicial de la Federación (TEPJF)
							</p>
							<p className={globalStyles.highlight}>2 Cargos</p>
						</div>
					</NavLink>
					<NavLink to="/salas-regionales-tribunal-electoral">
						<div className={globalStyles.card}>
							<p>
								Magistraturas de las Salas Regionales del Tribunal Electoral del
								Poder Judicial de la Federación (TEPJF)
							</p>
							<p className={globalStyles.highlight}>15 Cargos</p>
						</div>
					</NavLink>
					<NavLink to="/tribunal-disciplina">
						<div className={globalStyles.card}>
							<p>Personas integrantes del Tribunal de Disciplina Judicial</p>
							<p className={globalStyles.highlight}>5 Cargos</p>
						</div>
					</NavLink>

					<NavLink to="/magistraturas-circuito">
						<div className={globalStyles.card}>
							<p>Magistraturas de Circuito</p>
							<p className={globalStyles.highlight}>464 Cargos</p>
						</div>
					</NavLink>
					<NavLink to="/jugados-distrito">
						<div className={globalStyles.card}>
							<p>Personas Juzgadoras de Distrito</p>
							<p className={globalStyles.highlight}>386 cargos</p>
						</div>
					</NavLink>
				</div>
			</div>
		</div>
	);
}
