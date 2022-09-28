import { FC } from "react";
import { IApiResponse } from "../../types/ApiResponse";
import Pagination from "../Pagination/Pagination";
import SearchResult from "./SearchResult";

interface SearchResultsProps {
	query: string;
	results: IApiResponse;
	currentPage: number;
	notFound: boolean;
}

const SearchResults: FC<SearchResultsProps> = ({
	query,
	results,
	currentPage,
	notFound,
}) => {
	return (
		<div className="text-[#d8ddd6] px-4 sm:pl-[18%] md:pl-[25%] lg:pl-60 max-w-fit ">
			<div className="text-[#969e95] my-4">
				About {results.searchInformation.formattedTotalResults} results (
				{results.searchInformation.formattedSearchTime} seconds)
			</div>

			{notFound ? (
				<h1 className="text-white py-1 px-2 text-sm border max-w-fit ">
					No Results
				</h1>
			) : (
				results.items.map((result) => (
					<SearchResult key={result.link} result={result} />
				))
			)}
			<Pagination query={query} currentPage={currentPage} />
		</div>
	);
};

export default SearchResults;
