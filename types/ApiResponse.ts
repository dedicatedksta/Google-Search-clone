export interface IItem {
	title: string;
	displayLink: string;
	formattedUrl: string;
	link: string;
	htmlFormattedUrl: string;
	htmlSnippet: string;
}

interface ISearchInforamtion {
	formattedSearchTime: string;
	formattedTotalResults: string;
	searchTime: number;
}

export interface IApiResponse {
	items: IItem[];
	searchInformation: ISearchInforamtion;
}
