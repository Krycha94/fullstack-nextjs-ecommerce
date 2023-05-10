import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { products } from "@/utils/dummyData";
import ProductType from "@/types/ProductType";

import Sort from "@/components/Sort/Sort";

describe("Sort Component", () => {
	it("renders correctly", async () => {
		const updateSortHandler = jest.fn();

		render(
			<Sort
				state={{
					allProducts: products as ProductType[],
					filteredProducts: products as ProductType[],
					sort: "price-lowest",
				}}
				updateSort={updateSortHandler}
			/>
		);

		const textEl = screen.getByText(/showing 2 of 2 results/i);
		expect(textEl).toBeInTheDocument();
	});

	it("handlers are called", async () => {
		const user = userEvent.setup();
		const updateSortHandler = jest.fn();

		render(
			<Sort
				state={{
					allProducts: products as ProductType[],
					filteredProducts: products as ProductType[],
					sort: "price-lowest",
				}}
				updateSort={updateSortHandler}
			/>
		);

		const sortSelectEl = screen.getByRole("combobox", { name: /sort by:/i });

		await user.selectOptions(sortSelectEl, "price-lowest");

		expect(sortSelectEl).toHaveValue("price-lowest");
		expect(updateSortHandler).toHaveBeenCalledTimes(1);
	});
});
