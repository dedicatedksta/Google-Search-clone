import { FC } from "react";

interface AvatarProps {
	url: string;
}

const Avatar: FC<AvatarProps> = ({ url }) => {
	return (
		<img
			className="w-8 h-8 hover:scale-110 cursor-pointer transition-all ease-in-out duration-300 rounded-full"
			src={url}
			alt="Profile picture"
			loading="lazy"
		/>
	);
};

export default Avatar;
