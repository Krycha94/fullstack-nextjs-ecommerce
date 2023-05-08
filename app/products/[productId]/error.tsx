"use client";

import Error from "@/components/Error/Error";
import Link from "next/link";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
	return (
		<Error>
			<p>{error.message}</p>
			<button onClick={() => reset()}>Try Again</button>
			<Link href="/">Back Home</Link>
		</Error>
	);
};
export default error;
