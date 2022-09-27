import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Avatar from "../components/Avatar/Avatar";
import Squares from "../components/Icons/Squares Icon/Squares";
import Input from "../components/Input/Input";

interface SearchPageProps {
	results: number;
	defaultQuery: string;
}

const Search: NextPage<SearchPageProps> = ({ results, defaultQuery }) => {
	const router = useRouter();

	const submitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.push(`/search?q=${query}`);
	};

	const [query, setQuery] = useState<string>(defaultQuery);
	console.log(defaultQuery);
	return (
		<>
			<header className="flex flex-col md:flex-row justify-start pt-2 md:pt-7 md:pl-16  items-center">
				<Link href={"/"}>
					<a className="text-white font-semibold text-3xl cursor-pointer md:mb-1">
						{" "}
						Google
					</a>
				</Link>
				<div className="absolute right-4 top-4 md:top-9 lg:top-7 gap-4 flex items-center">
					<span className="hidden lg:block text-gray-300">
						<Squares />
					</span>
					<Avatar url="https://i.ibb.co/zm3HqvR/nightwing.jpg" />
				</div>
				<form
					onSubmit={submitHandler}
					className="mt-6 md:mt-0 md:ml-8 lg:ml-16"
				>
					<Input query={query} setQuery={setQuery} main={false} />
				</form>
			</header>
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
