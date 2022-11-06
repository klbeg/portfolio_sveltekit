import type CaseStudy from "src/types/CaseStudy";

const pokedex: CaseStudy = {
	url: "pokedex",
	title: "Pokedex",
	preview: "Pokedex is a Javascript app that utilizes an external API.",
	summary:
		"Pokedex is a small web applicationo that leverages HTML, CSS, and Javascript. It renders data collected from an external API and allows users to learn more about their favorite Pokémon.",
	logo: "",
	purpose:
		"The best way to learn a new programming language is to build a site with it, and that's exactly why I built Pokédex. It allowed me to learn javascript, while laying the foundation to build an API inthe future. Additionally it served as a great way for me to further improve my HTML and CSS skills.",
	objective:
		"The goal of Pokédex was for users to be able to view a list of their favorite Pokémon and learn details about them. It was to include a search field that would allow users to filter the list by name.",
	process: [
		{
			step: "Basic Javascript",
			text: [
				"The first step in this app, was to learn the core concepts of Javascript, like objects, arrays, conditionals and loops. This step was to be the foundation of my future JS skills. I learned to map and filter arrays as use conditionals like if/else. These skills would prove to be absolutely invaluable moving forward.",
				"I honed and leveraged my newly acquired skills, using an IIFE to keep my states safe from accidental changes and used forEach loops to map the temp data I created as a placeholder for what would be data from the API. Although it all felt akward at first, and the amount of code seemed hard to keep track of, very soon, I found myself drunk with the power of Javascript!"
			]
		},
		{
			step: "API interaction",
			text: [
				"Utilizing APIs felt a bit like magic. Target the right data, map it, and BANG, a website full of content that I didn't make. This was my first real introduction to understanding data structures. Learning how to look at an object and target whatever information I wanted was tough, but fun."
			]
		},
		{
			step: "Conclusion",
			text: [
				"My Pokédex app was an absolute blast to make. In the beginning, I was super unfamiliar with Javascript felt fairly alien after my time spent learning HTML and CSS, but the more I worked with it, the more sense it made and the more I bagan to realize how powerful a language it was."
			]
		}
	]
};

export default pokedex;
