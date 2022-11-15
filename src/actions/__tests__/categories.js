import { categoryApi } from "../../gateways/CategoryApi";
import { fetchCategories, RECEIVE_CATEGORIES, REQUEST_CATEGORIES } from "../categories";

describe('categories', () => {
    let dispatch;
    const deps = { categoryApi }

    describe('fetchCategories', () => {
		beforeEach(() => {
			dispatch = jest.fn();
		})

		it('request categories', () => {
			fetchCategories()(dispatch, undefined, deps);

			expect(dispatch).toHaveBeenCalled();
			expect(dispatch.mock.calls[0][0].type).toBe(REQUEST_CATEGORIES);
		})

		it('receive categories', () => {
			fetchCategories()(dispatch, undefined, deps);

			expect(dispatch).toHaveBeenCalled();
			expect(dispatch.mock.calls[1][0].type).toBe(RECEIVE_CATEGORIES);
			expect(dispatch.mock.calls[1][0].categories).toMatchObject(categoryApi.getCategories());
		})
	})
})