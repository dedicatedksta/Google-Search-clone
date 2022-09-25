import { FC } from "react";
import Avatar from "../Avatar/Avatar";
import Squares from "../Icons/Squares Icon/Squares";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
	return (
		<header className="flex justify-between w-full py-2 px-4 text-sm text-gray-300">
			<div className="flex space-x-4 items-center">
				<p className="link">About</p>
				<p className="link">Store</p>
			</div>
			<div className="flex space-x-4 items-center">
				<p className="link">Gmail</p>
				<p className="link">Images</p>
				<Squares />
				<Avatar url="https://coaching.papareact.com/ai9" />
			</div>
		</header>
	);
};

export default Header;
