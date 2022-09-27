import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import Input from "../Input/Input";

interface MainProps {}

const Main: FC<MainProps> = () => {
	const [query, setQuery] = useState("");
	const router = useRouter();

	const submitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (query.length > 0) {
			router.push(`/search?q=${query}`);
		}
	};

	return (
		<form
			onSubmit={submitHandler}
			className="flex flex-col mt-12 md:mt-24 lg:mt-36 "
		>
			<h1 className="text-white font-semibold text-[3.25rem] md:text-7xl xl:text-8xl mx-auto mt-8">
				Google
			</h1>
			<Input setQuery={setQuery} query={query} main={true} />
			<div className="flex mx-auto mt-6 gap-4">
				<button className="button" type="submit">
					Google Search
				</button>
				<a
					href={`http://www.google.com/search?hl=en&btnI=I%27m+Feeling+Lucky&pws=0&q=${query}`}
					className="button"
				>
					I'm Feeling Lucky
				</a>
			</div>
		</form>
	);
};

export default Main;
