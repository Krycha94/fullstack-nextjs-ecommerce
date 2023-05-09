import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Stars from "@/components/Stars/Stars";

describe("Stars Component", () => {
	it("renders correctly", () => {
		render(<Stars stars={1} />);
	});
});
