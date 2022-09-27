import Link from "next/link";
import { FC } from "react";

interface PaginationProps {
	query: string;
	currentPage: number;
}

const Pagination: FC<PaginationProps> = ({ query, currentPage }) => {
	const pages = [
		{ number: 1, start: 0 },
		{ number: 2, start: 10 },
		{ number: 3, start: 20 },
		{ number: 4, start: 30 },
		{ number: 5, start: 50 },
		{ number: 6, start: 60 },
		{ number: 7, start: 70 },
		{ number: 8, start: 80 },
		{ number: 9, start: 90 },
		{ number: 10, start: 100 },
	];

	return (
		<div className="flex gap-2 mx-auto max-w-fit">
			{pages.map((page) => (
				<Link href={`/search?q=${query}&start=${page.start}`}>
					<span
						className={` cursor-pointer hover:underline ${
							currentPage === page.number ? "text-[#d8ddd6]" : "text-[#82aff8]"
						}`}
					>
						{page.number}
					</span>
				</Link>
			))}
		</div>
	);
};

export default Pagination;
