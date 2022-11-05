type Process = {
	step: string;
	text: string[];
};

export type CaseStudy = {
	title: string;
	summary: string;
	logo: string;
	purpose: string;
	objective: string;
	process: Process[];
};

export default CaseStudy;
