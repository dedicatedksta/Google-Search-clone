import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import SearchHeader from "../components/Search Header/SearchHeader";
import SearchResults from "../components/SearchResults/SearchResults";
import { IApiResponse } from "../types/ApiResponse";

interface SearchPageProps {
	results: IApiResponse;
	defaultQuery: string;
	currentPage: number;
	notFound: boolean;
}

const Search: NextPage<SearchPageProps> = ({
	results,
	defaultQuery,
	currentPage,
	notFound,
}) => {
	const [query, setQuery] = useState<string>(defaultQuery);
	console.log(currentPage);

	return (
		<>
			<SearchHeader query={query} setQuery={setQuery} />

			<SearchResults
				query={query}
				results={results}
				currentPage={currentPage}
				notFound={notFound}
			/>
		</>
	);
};

export default Search;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const query = context.query.q;
	const start = context.query.start || 0;
	const response = await axios.get(
		`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT}&q=${query}&start=${start}`
	);
	const results = await response.data;
	const notFound =
		results.searchInformation.totalResults === "0" ? true : false;
	return {
		props: {
			results: results,
			defaultQuery: query,
			currentPage: Math.round(Number(start) / 10) + 1,
			notFound: notFound,
		},
	};
};
