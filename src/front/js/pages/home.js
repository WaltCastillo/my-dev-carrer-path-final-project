import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import frontEndUrl from "../../img/front-end-main.jpeg";
import backEndUrl from "../../img/back-end.jpg";
import mobileUrl from "../../img/mobile-appp-dev.jpg";
import "../../styles/home.scss";
import "../../styles/hero.scss";
import { Hero } from "../component/hero";
import { Card } from "../component/card";
import { Login } from "../component/login";
import { Breadcrumb } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		fetch("https://www.udemy.com/api-2.0/courses/2337794/")
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setCourse(data.results);
			})
			.catch(error => console.log(error));
	}, []);

	return (
		<div>
			<Hero />
			<div className="row m-5 d-flex justify-content-center">
				<Card
					img={frontEndUrl}
					name="Front-End Developer"
					content="Get started as a front-end web developer. 
                    Add your online courses on HTML, CSS, Javascript, React, Angular, JQuery, and Bootstrap."
				/>
				<Card
					img={backEndUrl}
					name="Back-End Developer"
					content="Get started as a back-end web developer. 
                    Add your online courses on Java, Python, Node, Ruby, .Net, SQL, Apache and IIS Servers."
				/>
				<Card
					img={mobileUrl}
					name="Mobile Developer"
					content="Get started as an Android / Apple app developer. 
                    Add your online courses on Java, React Native, REST."
				/>
			</div>
		</div>
	);
};
