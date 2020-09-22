import React from "react";

import Goal from "../components/Goal";

import logo from "../assets/images/sfrs_logo.png";

// stylesheets
import "../stylesheets/home.css";

const GOALS = [
	{
		name: "Education",
		desc: "To educate members about the situations and experiences of refugees and asylum seekers in Australia, providing an insight into legal, social, cultural and political issues",
		aos: "fade-right"
	},
	{
		name: "Improvement",
		desc: "To improve the conditions of refugees and asylum seekers in Australia, notably through grassroots movements and community involvement",
		aos: "fade-right"
	},
	{
		name: "Connection",
		desc: "To connect members with larger organisations specialising in refugee issues, facilitating volunteering opportunities in Melbourne",
		aos: "fade-left"
	},
	{
		name: "Communication",
		desc: "To create a community where members feel safe to share experiences and open up discussions with like-minded peers",
		aos: "fade-left"
	}
];

const Home = () => {
	return (
		<div
			id="home-page">

			<section
				id="intro">

				<img
				src={ logo }
				className="logo"
				alt="SFRS main logo"/>

				<div
					className="cta"
					data-aos="fade-in"
					data-aos-duration="1500"
					data-aos-easing="ease-in-out">
					<h1>
						Working towards a more <b>inclusive</b> future.
					</h1>
				</div>

			</section>

			<section
				id="goals">

				<h1
					className="section-heading">
					Our Goals
				</h1>

				<div
					className="goals-container">

					{ GOALS.map((goal, index) => (
						<Goal
							key={ index }
							goal={ goal }/>
					))}
				</div>

			</section>

		</div>
	)
}

export default Home;