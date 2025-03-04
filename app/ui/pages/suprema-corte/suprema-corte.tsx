import styles from "./suprema-corte.module.css";
import { NavLink } from "react-router";

const SupremaCorte = () => {
	return (
		<div className={styles.body}>
			<div className={styles.container}>
				<div className={styles.titleContainer}>
					<NavLink to="/" end>
						<span className={`material-symbols-outlined ${styles.backButton}`}>
							arrow_back
						</span>
					</NavLink>
					<h1 className={styles.title}>Suprema Corte</h1>
				</div>
			</div>
		</div>
	);
};

export default SupremaCorte;
