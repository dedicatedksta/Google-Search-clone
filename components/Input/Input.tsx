import { AnimatePresence, motion } from "framer-motion";
import React, { FC, useRef } from "react";
import Close from "../Icons/Close Icon/Close";
import Microphone from "../Icons/Microphone Icon/Microphone";
import Search from "../Icons/Search Icon/Search";

interface InputProps {
	query: string;
	setQuery: React.Dispatch<React.SetStateAction<string>>;
	main: boolean;
}

const Input: FC<InputProps> = ({ query, setQuery, main }) => {
	const inputRef = useRef<HTMLInputElement>(null);
	console.log(query);
	return (
		<div
			onClick={() => inputRef.current?.focus()}
			className={` box-content transition-all ease-in-out duration-200 flex items-center text-[#6e7276] focus-within:text-[#9aa0a6] w-[85vw] max-w-sm md:max-w-md py-2 md:py-3 lg:max-w-xl border border-[#7e8489] bg-transparent rounded-3xl px-3 ${
				main
					? "mx-auto mt-5 md:mt-10 hover:border-[#303134] hover:bg-[#303134] "
					: "border-[#303134] bg-[#303134]"
			}`}
		>
			<Search />
			<input
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				ref={inputRef}
				type="text"
				className=" px-3 h-full bg-transparent text-gray-300 outline-none flex-grow"
			/>
			<div className="flex">
				<AnimatePresence>
					{query && (
						<>
							<motion.span
								initial={{ translateX: 15 }}
								animate={{ translateX: 0 }}
								exit={{ translateX: 15, opacity: 0 }}
								transition={{ duration: 0.3 }}
								className="text-[#9aa0a6] cursor-pointer"
								onClick={() => setQuery("")}
							>
								<Close />
							</motion.span>
							<motion.span
								initial={{ scaleY: 0 }}
								animate={{ scaleY: 1 }}
								exit={{ scaleY: 0 }}
								transition={{ duration: 0.3 }}
								className=" w-[1px] h-5 bg-[#9aa0a6] mx-2"
							/>
						</>
					)}
				</AnimatePresence>
				<Microphone />
			</div>
		</div>
	);
};

export default Input;
