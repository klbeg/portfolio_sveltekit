import type CaseStudy from "src/types/CaseStudy";

const meetApp: CaseStudy = {
	title: "Meet App",
	summary:
		"Meet is a serverless Progressive Web Application using AWS Lambda and Jest for testing, along with a host of other tools. The app utilizes Google Calendar API to populate a list of events that the user can sort by city and dictate the amount of events to show.",
	logo: "",
	purpose:
		"The learning goals for my Meet app was to dive into serverless functions, end to end testing as well as data visualization. In addition it is another opportunity to refine my React and Javascript skills.",
	objective:
		"Create a serverless progressive web application that uses Google Calendar API to populate lists of events. Every step of the process was implemented using test driven development to ensure error free code. Performance monitoring was to be done with Atatus.",
	process: [
		{
			step: "Test Driven Development",
			text: [
				"Although this is step one, it was the theme from the beginning to the end of Meet’s development. Initially I was intimidated by TDD, but soon I found myself enjoying testing as I was building. This approach made the troubleshooting process more streamlined, since the tests could tell me what was working and what wasn’t. This resulted in more time spent coding and less trying to find where errors were originating.",
				"Learning to use Jest was tough, but it’s value immediately apparentn and well worth any struggles. I utilized the documentation quite frequently while I was testing my app. I found several times after feeling stuck trying to make a test pass that the test itself was the issue. Upon finding the correct testing methods for a particular application, things usually fell into place quite quickly."
			]
		},
		{
			step: "Implementing Serverless Functions with AWS",
			text: [
				"Serverless felt like a truly foreign concept. That being said, I understand why using AWS was the correct tool for this particular application. It had far less functionality than the more robust backend that powered MovieCraze, and creating a server would have resulted in a lot of unnecessary effort and an overall bulkier application.",
				"The toughest part of serverless was definitely not having access to the console in the same way I’m used to with other apps. Not being able to check data at anypoint in the process by logging an output to the console was definitely challenging. In time though, I ended up getting a feel for working in this new, alien, environment. I’m definitely looking forward to refining my serverless skills even further in future projects."
			]
		},
		{
			step: "Conclusion",
			text: [
				"Meet has been a truly challenging application to build, but resulted in me learning some tools and workflows that I genuinely enjoy. Test driven development is definitely one of my favorites out of the concepts I’ve learned so far in my web development journey. This project has made me a much stronger developer. It was also a chance to celebrate how far I’ve come in being able to troubleshoot complex problems."
			]
		}
	]
};

export default meetApp;
