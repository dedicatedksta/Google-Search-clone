import { FC, useRef } from "react";
import Microphone from "../Icons/Microphone Icon/Microphone";
import Search from "../Icons/Search Icon/Search";

interface InputProps {}

const Input: FC<InputProps> = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<div
			onClick={() => inputRef.current?.focus()}
			className=" box-content transition-all ease-in-out duration-200 mt-5 md:mt-10 flex items-center text-[#6e7275] focus-within:text-[#9aa0a6] w-[85vw] max-w-sm md:max-w-md lg:max-w-xl mx-auto border border-[#7e8489]  bg-transparent hover:border-[#303134] rounded-3xl px-3 hover:bg-[#303134] py-2 md:py-3"
		>
			<Search />
			<input
				ref={inputRef}
				type="text"
				className=" px-3 h-full bg-transparent outline-none flex-grow"
			/>
			<Microphone />
		</div>
	);
};

export default Input;
