import { FC } from "react";
import Input from "../Input/Input";
import Button from "../ui/Button";

interface MainProps {}

const Main: FC<MainProps> = () => {
	return (
		<form className="flex flex-col mt-12 md:mt-24 lg:mt-36 ">
			<h1 className="text-white font-semibold text-[3.25rem] md:text-7xl xl:text-8xl mx-auto mt-8">
				Google
			</h1>
			<Input />
			<div className="flex mx-auto mt-6 gap-4">
				<Button>Google Search</Button>
				<Button>I'm Feeling Lucky</Button>
			</div>
		</form>
	);
};

export default Main;