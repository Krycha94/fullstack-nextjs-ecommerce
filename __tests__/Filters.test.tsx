import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { products } from "@/utils/dummyData";
import ProductType from "@/types/ProductType";

import Filters from "@/components/Filters/Filters";

describe("Filters Component", () => {
	it("handlers are called", async () => {
		const user = userEvent.setup();
		const updateFiltersHandler = jest.fn();
		const resetFiltersHandler = jest.fn();

		render(
			<Filters
				state={{
					allProducts: products as ProductType[],
					filters: {
						text: "",
						category: "all",
						brand: "all",
						size: "all",
						minPrice: 0,
						maxPrice: 1700,
						price: 1700,
						discount: false,
					},
				}}
				updateFilters={updateFiltersHandler}
				resetFilters={resetFiltersHandler}
			/>
		);

		const textInputEl = screen.getByRole("textbox");
		const categoryBtn = screen.getByRole("button", {
			name: "men",
		});
		const brandBtn = screen.getByRole("button", {
			name: "nike",
		});
		const sizeBtn = screen.getByRole("button", {
			name: "S",
		});
		const priceInput = screen.getByRole("slider");
		const checkbox = screen.getByRole("checkbox", { name: /discount/i });
		const resetFiltersBtn = screen.getByRole("button", {
			name: /reset filters/i,
		});

		await user.type(textInputEl, "nike");
		await user.click(categoryBtn);
		await user.click(brandBtn);
		await user.click(sizeBtn);
		// there is no support for range input in @testing-library/user-event yet
		fireEvent.change(priceInput, { target: { value: 170 } });
		await user.click(checkbox);
		await user.click(resetFiltersBtn);

		expect(updateFiltersHandler).toHaveBeenCalledTimes(9);
		expect(resetFiltersHandler).toHaveBeenCalledTimes(1);
	});
});
