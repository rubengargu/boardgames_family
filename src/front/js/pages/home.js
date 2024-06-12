import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="inicio">
		
	<h1>Somos la Barna Batch!</h1>
	<p>Somos un grupo de jugadores de Barcelona que gracias a eventos varios nos hemos ido uniendo con un objetivo</p>
	<h2>Disfrutar de este juego!</h2>


		</div>
	);
};
