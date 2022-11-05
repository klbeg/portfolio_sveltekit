<script lang="ts">
	import Link from './Link.svelte';
	const href: string = 'https://github.com/klbeg/myFlix-Angular-client';
</script>

<div class="content-container">
	<img
		class="my-5 w-52 rounded-2xl"
		src="https://klbeg.github.io/portfolio-website/img/MovieCraze-preview.jpg"
		alt="Movie Craze logo. Orange text on a dark blue background."
	/>
	<h1 class="text-orange text-2xl py-6 uppercase">movie craze</h1>
	<p class="pb-6 font-light">
		MovieCraze-Angular is an Angular app that uses HTML, SCSS, Typescript, Angular Router, and
		Angular Material. The backend is my Movie-API that was utilized in the React version of
		MovieCraze.
	</p>
	<h2 class="text-orange text-2xl py-6">Purpose and Context</h2>
	<p class="pb-6 font-light">
		The purpose of MovieCraze-Angular is to expand my knowledge of frameworks to include Angular, as
		well as learn Typescript. In addition, a Kaban board was used to keep the project on track and
		easier to manage.
	</p>
	<h2 class="text-orange text-2xl py-6">Objective</h2>
	<p class="pb-6 font-light">
		The objective of MovieCraze-Angular is to create the client side for a movie API using Angular.
		The backend is a Rest API I created called Movie-API. The project includes documentation as
		well.
	</p>
	<h2 class="text-orange text-2xl py-6">The Process</h2>
	<div class="flex justify-left items-center">
		<span class="text-orange text-5xl py-4 pr-6 catamaran">1.</span>
		<h2 class="text-xl py-6">Angular & TypeScript</h2>
	</div>
	<p class="pb-6 font-light">
		I had initially expected for Angular to be a little similar to React than it was. All of the
		file structures, state management, and in general, how I used Javascript to do things, all felt
		totally different.
	</p>
	<p class="pb-6 font-light">
		Then there was Typescript. Although very similar to Javascript, learning this statically typed
		language wasn't without it's challenges. Fixing the first few data type errors was slightly
		frustrating, but in time, I got hte hang of it and started to enjoy the extra control I had over
		my data.
	</p>
	<div class="flex justify-left items-center">
		<span class="text-orange text-5xl py-4 pr-6 catamaran">2.</span>
		<h2 class="text-xl py-6">Advanced Angular & Material</h2>
	</div>
	<p class="pb-6 font-light">
		After learning the basics of Angular, I began to embrace the differences between it and React. I
		enjoyed working with a template and got a handle on passing data from template to component and
		visa versa. The syntax ultimately felt a lot cleaner and easier to manage.
	</p>
	<p class="pb-6 font-light">
		One of the toughest challenges I ran into was with objects behaving as expected. A movie object
		passed into the template that wouldn't display it's ID, user objects not outputting their names.
		At first, frustration and mystery, but overtime I learned that most of my issues were due to
		insufficient data types. This lead me to using classes so my types could be more accurate.
	</p>
	<p class="pb-6 font-light">
		Lastly there was Angular Material, which I think I may have fallen in love with. It was like
		making a button and throwing several Bootstrap classes on it, all by importing a module, making
		a button, and telling it what kind of button to be. It felt a lot cleaner than using bootstrap
		like I have in the past.
	</p>
	<div class="flex justify-left items-center">
		<span class="text-orange text-5xl py-4 pr-6 catamaran">3.</span>
		<h2 class="text-xl py-6">Conclusion</h2>
	</div>
	<p class="pb-6 font-light">
		MovieCraze-Angular was a huge confidence builder to make. I couldn't help but think back to the
		first Javascript errors I ran into when I was creating my first few apps. Issues that would have
		stumped me for days back then, were now something I could figure out in 15 or so minutes with
		google.
	</p>
	<p class="pb-6 font-light">
		I finally started to feel like I was becoming a developer that was capable of planning, learning
		new technology and troubleshooting effectively. More than that, I was having a ton of fun doing
		it all. This project more than any other has gotten me really excited to get a job and working
		with teams on big real world applications.
	</p>
	<div class="pt-4">
		<Link buttonText="View Repository" target="__blank" {href} />
	</div>
</div>

<style>
	img {
		box-shadow: 0 3px 3px rgba(255, 255, 255, 0.295);
	}
</style>
