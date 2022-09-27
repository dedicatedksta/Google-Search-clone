import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import SearchHeader from "../components/Search Header/SearchHeader";
import SearchResults from "../components/SearchResults/SearchResults";
import { IApiResponse } from "../types/ApiResponse";

interface SearchPageProps {
	results: IApiResponse;
	defaultQuery: string;
	currentPage: number;
}

const Search: NextPage<SearchPageProps> = ({
	results,
	defaultQuery,
	currentPage,
}) => {
	const [query, setQuery] = useState<string>(defaultQuery);

	return (
		<>
			<SearchHeader query={query} setQuery={setQuery} />
			<SearchResults
				query={query}
				results={results}
				currentPage={currentPage}
			/>
		</>
	);
};

export default Search;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const query = context.query.q;
	const start = context.query.start;
	const response = await axios.get(
		`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT}&q=${query}&start=${start}`
	);
	const results = await response.data;

	return {
		props: {
			results: results,
			defaultQuery: query,
			currentPage: (Number(start) % 10) + 1,
		},
	};
};
