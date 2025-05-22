import type CaseStudy from "src/types/CaseStudy"

const portfolio: CaseStudy = {
	url: "portfolio",
	title: "Portfolio - SvelteKit",
	preview:
		"A serverless SvelteKit app that serves as an introduction and contact point, as well as a place to showcase my work.",
	summary:
		"A serverless TypeScript Application that uses Tailwind to streamline component styling.  It utilizes file based routing to inject descriptions into components resulting in minimal code for repetitive content.",
	logo: "",
	purpose:
		"This was an opportunity to learn a framework I'd heard a lot of positive things about in SvelteKit and to refine my TypeScript skills.",
	objective:
		"Create a portfolio application using SvelteKit and TypeScript so I could show off my projects and continue to refine and expand my skill set.",
	process: [
		{
			step: "Learning SvelteKit",
			text: [
				"SvelteKit was a framework that I kept hearing about on web development podcasts and wanted to learn.  One of the biggest upsides that I heard was that it was intuitive and quick to pick up and quick to get going, which was the case in my experience.",
				"I quickly got used to having my HTML, CSS, and TypeScript all in the same file and enjoyed having component scoped CSS.  Routing was intuitive and easy to set up and I quickly had all my main routes set up and ready for content."
			]
		},
		{
			step: "Theming",
			text: [
				"Creating CSS color variables presented an issue almost immediately.  Because I was declaring all of my global css classes in __layout.svelte, I wouldn't be able to use any color variables declared in that same file.  Since __layout.svelte was my root Svelte component I had to figure out where to declare my colors so I could use them here.",
				"After some research, I found I could create the variables in the style attribute of the div wrapping my layout component.  This allowed me to declare the color variables in the same file I used them in."
			]
		},
		{
			step: "Advanced Routing",
			text: [
				"The other place I spent time problem solving was in finding the most efficient way to code my case studies, this was where file based routing was really able to shine.",
				"With SvelteKit's routing, I could create new routes by simply adding a three-line file for each project.  This kept my code clean and concise."
			]
		},
		{
			step: "Conclusion",
			text: [
				"This project was highly enjoyable and helped me learn one of my new favorite frameworks.  SvelteKit was just as intuitive and quick to setup as I'd heard about in both podcasts and my research.",
				"Imports felt streamlined without the the repetition of other frameworks.  I only pulled in what I needed and didn't have a long list of the same imports in every file.  I also liked that there was really no overhead in my components.  Just write the code I needed to use.",
				"This is definitely a framework I'll be using more moving forward in my personal projects."
			]
		}
	]
}

export default portfolio
