import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import Avatar from "../Avatar/Avatar";
import Squares from "../Icons/Squares Icon/Squares";
import Input from "../Input/Input";
import styles from "./SearchHeader.module.scss";

interface SearchHeaderProps {
	query: string;
	setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchHeader: FC<SearchHeaderProps> = ({ query, setQuery }) => {
	const router = useRouter();

	const submitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.push(`/search?q=${query}`);
	};

	return (
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
			<form onSubmit={submitHandler} className="mt-6 md:mt-0 md:ml-8 lg:ml-16">
				<Input query={query} setQuery={setQuery} main={false} />
			</form>
		</header>
	);
};

export default SearchHeader;
