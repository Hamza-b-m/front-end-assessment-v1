import { receiveCategories } from "../../actions/categories";
import { categories, getCategoriesById } from "../categories";


describe('categories', () => {
    it('receive categories', () => {
		const data = [{name: "Iphone"}, {name: "Tv"}];
		const result = categories([], receiveCategories(data));

		expect(result).toMatchObject(data);
	});
	
	describe('getCategoriesById', () => {
		const state = {
			categories: [
				{ id: 1, name: "Tv" },
				{ id: 2, name: "Laptop" }
			],
		};
		const newCategoriesArray = {
			1: { id: 1, name: "Tv" },
			2: { id: 2, name: "Laptop" }
		};

    it('new categories form', () => {
		const result = getCategoriesById(state);

		expect(result).toMatchObject(newCategoriesArray);
    });
})
})