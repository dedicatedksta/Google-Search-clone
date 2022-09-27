import axios from "axios";
import { useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const CONTEXT_KEY = process.env.NEXT_PUBLIC_CONTEXT;

export const useSimilar = () => {
	const [loading, setLoading] = useState(false);

	const searchHints = async (query: string) => {
		setLoading(true);
		const response = await axios.get(
			`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${query}`
		);
		const hints = await response.data;
		setLoading(false);
		console.log(hints);
		return hints;
	};
	return { searchHints };
};
