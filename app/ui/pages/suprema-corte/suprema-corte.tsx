import { NavLink } from "react-router";

import "./suprema-corte.css";

const SupremaCorte = () => {
	return (
		<div className="bodyContainer">
			<div className="container">
				<div className="titleContainer">
					<NavLink to="/" end>
						<span className={`material-symbols-outlined backButton`}>
							arrow_back
						</span>
					</NavLink>
					<h1 className="title">Suprema Corte</h1>
				</div>
			</div>
		</div>
	);
};

export default SupremaCorte;
