import { FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
	children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => {
	return (
		<button className="text-white  bg-[#303134] border border-[#303134] text-xs py-1 px-3 md:py-2 md:px-4 md:text-sm rounded-md hover:border-[#686c6f] transition-all ease-in-out duration-200">
			{children}
		</button>
	);
};

export default Button;
