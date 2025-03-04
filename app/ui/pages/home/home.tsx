import type { Route } from "./+types/home";
import { NavLink } from "react-router";
import styles from "./home.module.css";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Conoce a los candidatos a la Elección del Poder Judicial" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return (
		<div className={styles.body}>
			<div className={styles.container}>
				<h1 className={styles.title}>
					Conoce a los candidatos a la Elección del Poder Judicial 2025
				</h1>
				<p className={styles.question}>Que es?</p>
				<p className={styles.anwser}>
					El Proceso Electoral Judicial es el primero que se celebra en México,
					en el que se elegirán los cargos de Ministras y Ministros de la
					Suprema Corte de Justicia de la Nación (SCJN), las Magistraturas de
					las Salas Superior y Regionales del Tribunal Electoral del Poder
					Judicial de la Federación (TEPJF), las personas integrantes del
					Tribunal de Disciplina Judicial y Magistraturas de Circuito y Personas
					Juzgadoras de Distrito.
				</p>
				<p className={styles.question}>Cuando?</p>
				<p> 1 de junio de 2025 (Votación de 8:00 a 18:00 horas)</p>
				<p className={styles.question}>Cargos a elegir</p>
				<div className={styles.cardContainer}>
					<NavLink to="/suprema-corte">
						<div className={styles.card}>
							<p>
								Ministras y Ministros de la Suprema Corte de Justicia de la
								Nación (SCJN)
							</p>
							<p className={styles.question}>9 Cargos</p>
						</div>
					</NavLink>
					<NavLink to="/sala-superior-tribunal-electoral" end>
						<div className={styles.card}>
							<p>
								Magistraturas de las Salas Superior del Tribunal Electoral del
								Poder Judicial de la Federación (TEPJF)
							</p>
							<p>2 Cargos</p>
						</div>
					</NavLink>
					<div className={styles.card}>
						<p>
							Magistraturas de las Salas Regionales del Tribunal Electoral del
							Poder Judicial de la Federación (TEPJF)
						</p>
						<p>15 Cargos</p>
					</div>
					<div className={styles.card}>
						<p>Personas integrantes del Tribunal de Disciplina Judicial</p>
						<p>5 Cargos</p>
					</div>
					<div className={styles.card}>
						<p>Magistraturas de Circuito</p>
						<p>464 Cargos</p>
					</div>
					<div className={styles.card}>
						<p>Personas Juzgadoras de Distrito</p>
						<p>386 cargos</p>
					</div>
				</div>
			</div>
		</div>
	);
}
