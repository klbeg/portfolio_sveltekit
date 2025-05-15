import type CaseStudy from "src/types/CaseStudy"

const portfolio: CaseStudy = {
	url: "portfolio",
	title: "Portfolio - SvelteKit",
	preview:
		"A serverless SvelteKit app that serves as an introduction and contact point as well as somewhere to show off my work.",
	summary:
		"A serverless TypeScript Application that uses Tailwind to streamline component styling.  It utilizes file based routing to inject desriptions into components resulting in minimal code for repetetive content.",
	logo: "",
	purpose:
		"This was an opportunity to learn a framework I'd heard a lot of positive things about in SvelteKit and to refine my TypeScript skills.",
	objective:
		"Create a portfolio application using SvelteKit and TypeScript so I could show off my projects and continue to refine and expand my skillset.",
	process: [
		{
			step: "Learning SvelteKit",
			text: [
				"Svelte was a framework that I kept hearing about on web development podcasts and wanted to learn.  One of the biggest upsides that I heard was that it was intuitive and quick to pick up and quick to get going, which was the case in my experience.",
				"I quickly got used to having my HTML, CSS, and TypeScript all in the same file and enjoyed having component scoped CSS.  Routing was intuitive and easy to set up and I quickly had all my main routes set up and ready for content."
			]
		},
		{
			step: "Theming",
			text: [
				"One of the first issues I ran into was how to implement color theming.  In frameworks without component based CSS, I could declare a variable in styles.css and use them from wherever I wanted, but that approach wouldn't work here.",
				"After a bit of searching online, I used the style attributed of the div wrapping the app and declared the variables there.  Once that was done I could freely use them in the style portion of my components."
			]
		},
		{
			step: "Advanced Routing",
			text: [
				"The other place I spent time problem solving was in finding the most efficient way to code my cast studies, this was where file based routing was really able to shine.",
				"Utilizing SvelteKit's routing I was able to make new routes simply by creating a 3 line file for each project I wanted to add.  Simply import the data, the component and returning it."
			]
		},
		{
			step: "Conclusion",
			text: [
				"This project was an absolute blast and in it I found a new tool I enjoyed using.  SvelteKit was just as intuitive and quick to setup as I'd heard about in both podcasts and my research.",
				"I loved how streamlined all my imports felt.  I only pulled in what I needed and didn't have a long list of the same imports in every file.  I also liked that there was really no overhead in my components.  Just write the code I needed to use.",
				"This is definitely a framework I'll be using more moving forward in my personal projects."
			]
		}
	]
}

export default portfolio
