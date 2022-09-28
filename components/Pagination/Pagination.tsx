import Link from "next/link";
import { FC } from "react";

interface PaginationProps {
	query: string;
	currentPage: number;
}

const Pagination: FC<PaginationProps> = ({ query, currentPage }) => {
	const pages = [
		{ number: 1, start: 0 },
		{ number: 2, start: 11 },
		{ number: 3, start: 21 },
		{ number: 4, start: 31 },
		{ number: 5, start: 41 },
		{ number: 6, start: 51 },
		{ number: 7, start: 61 },
		{ number: 8, start: 71 },
		{ number: 9, start: 81 },
		{ number: 10, start: 91 },
	];

	return (
		<div className="flex flex-col  mx-auto max-w-fit mt-16 mb-8">
			<span className="text-4xl">Goooooooogle</span>
			<div className="flex gap-2 self-center mt-2">
				{pages.map((page) => (
					<Link
						key={page.number}
						href={`/search?q=${query}&start=${page.start}`}
					>
						<span
							className={` cursor-pointer hover:underline ${
								currentPage === page.number
									? "text-[#d8ddd6]"
									: "text-[#82aff8]"
							}`}
						>
							{page.number}
						</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Pagination;
