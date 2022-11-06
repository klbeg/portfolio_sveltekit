type Process = {
	step: string;
	text: string[];
};

export type CaseStudy = {
	url: string;
	title: string;
	preview: string;
	summary: string;
	logo: string;
	purpose: string;
	objective: string;
	process: Process[];
};

export default CaseStudy;
