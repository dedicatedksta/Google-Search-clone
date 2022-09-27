import { FC } from "react";
import Avatar from "../Avatar/Avatar";
import Squares from "../Icons/Squares Icon/Squares";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
	return (
		<header className="flex justify-end w-full py-2 px-4 text-sm text-gray-300">
			<div className="flex space-x-4 items-center font-semibold">
				<a href="https://mail.google.com/mail/&ogbl" className="link ">
					Gmail
				</a>
				<a href="https://www.google.ru/imghp?hl=en&ogbl" className="link">
					Images
				</a>
				<Squares />
				<Avatar url="https://i.ibb.co/zm3HqvR/nightwing.jpg" />
			</div>
		</header>
	);
};

export default Header;
