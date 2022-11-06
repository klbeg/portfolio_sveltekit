import type CaseStudy from "src/types/CaseStudy";

const movieCraze: CaseStudy = {
	title: "Movie Craze",
	preview:
		"Movie Craze is a full stack React app that allows users to see a full list of moview, movie details, and edit user info.",
	summary: `MovieCraze-Angular is an Angular app that uses HTML, SCSS, Typescript, Angular Router, and Angular Material. The backend is my Movie-API that was utilized in the React version of MovieCraze.`,
	logo: "https://klbeg.github.io/portfolio-website/img/MovieCraze-preview.jpg",
	purpose: `The purpose of MovieCraze-Angular is to expand my knowledge of frameworks to include Angular, as well as learn Typescript. In addition, a Kaban board was used to keep the project on track and easier to manage.`,
	objective: `The objective of MovieCraze-Angular is to create the client side for a movie API using Angular. The backend is a Rest API I created called Movie-API. The project includes documentation as well.`,
	process: [
		{
			step: "Angular & TypeScript",
			text: [
				`I had initially expected for Angular to be a little similar to React than it was. All of the file structures, state management, and in general, how I used Javascript to do things, all felt totally different.`,
				`Then there was Typescript. Although very similar to Javascript, learning this statically typed language wasn't without it's challenges. Fixing the first few data type errors was slightly frustrating, but in time, I got hte hang of it and started to enjoy the extra control I had over my data.`
			]
		},
		{
			step: "Advanced Angular & Material",
			text: [
				`After learning the basics of Angular, I began to embrace the differences between it and React. I enjoyed working with a template and got a handle on passing data from template to component and visa versa. The syntax ultimately felt a lot cleaner and easier to manage.`,
				`One of the toughest challenges I ran into was with objects behaving as expected. A movie object passed into the template that wouldn't display it's ID, user objects not outputting their names. At first, frustration and mystery, but overtime I learned that most of my issues were due to insufficient data types. This lead me to using classes so my types could be more accurate.`,
				`Lastly there was Angular Material, which I think I may have fallen in love with. It was like making a button and throwing several Bootstrap classes on it, all by importing a module, making a button, and telling it what kind of button to be. It felt a lot cleaner than using bootstrap like I have in the past.`
			]
		}
	]
};

export default movieCraze;
