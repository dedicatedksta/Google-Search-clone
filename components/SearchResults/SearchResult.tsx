import { FC } from "react";
import { IItem } from "../../types/ApiResponse";

interface SearchResultProps {
	result: IItem;
}

const SearchResult: FC<SearchResultProps> = ({ result }) => {
	return (
		<div className="mb-8 max-w-xl ">
			<a href={result.link} className="cursor-pointer">
				<div className="text-xs not-italic  truncate ">
					{result.formattedUrl}
				</div>
				<div className="my-2">
					<a className="text-[#82aff8] text-lg lg:text-xl  hover:underline focus:text-[#c589eb] active:text-[#c589eb] visited:text-[#c589eb] ">
						{result.title}
					</a>
				</div>
			</a>
			<div
				className="text-sm lg:text-base"
				dangerouslySetInnerHTML={{ __html: result.htmlSnippet }}
			/>
		</div>
	);
};

export default SearchResult;
