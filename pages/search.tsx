import { GetServerSideProps, NextPage } from "next";
import SearchHeader from "../components/Search Header/SearchHeader";

interface SearchPageProps {
	results: number;
	defaultQuery: string;
}

const Search: NextPage<SearchPageProps> = ({ results, defaultQuery }) => {
	return (
		<>
			<SearchHeader defaultQuery={defaultQuery} />
		</>
	);
};

export default Search;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const query = context.query.q;

	return {
		props: {
			results: 123,
			defaultQuery: query,
		},
	};
};
