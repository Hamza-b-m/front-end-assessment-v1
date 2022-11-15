import { productApi } from '../../gateways/ProductApi';
import {CREATE_PRODUCT, createProductForm, UPDATE_PRODUCT, REQUEST_PRODUCTS, RECEIVE_PRODUCTS, updateProductForm, fetchProducts} from '../products';

describe('products', () => {
	let dispatch;
	const history = {};
	const deps = {history}

	describe('updateProductForm', () => {
		beforeEach(() => {
			dispatch = jest.fn();
			history.push = jest.fn();
		})

		it('update a product', () => {
			const data = {name: 'iphone'};
			updateProductForm('1', data)(dispatch, undefined, deps);

			expect(dispatch).toHaveBeenCalled();
			expect(dispatch.mock.calls[0][0].type).toBe(UPDATE_PRODUCT);
			expect(dispatch.mock.calls[0][0].data).toBe(data);
		})

		it('redirects to home page', () => {
			updateProductForm('1', {})(dispatch, undefined, deps);

			expect(history.push).toHaveBeenCalled();
			expect(history.push.mock.calls[0][0]).toBe('/');
		})
	})

	describe('createProductForm', () => {
		beforeEach(() => {
			dispatch = jest.fn();
			history.push = jest.fn();
		})

		it('create a product', () => {
			const data = {name: 'iphone'};
			createProductForm(data)(dispatch, undefined, deps);

			expect(dispatch).toHaveBeenCalled();
			expect(dispatch.mock.calls[0][0].type).toBe(CREATE_PRODUCT);
			expect(dispatch.mock.calls[0][0].data).toMatchObject(data);
		})

		it('redirects to home page', () => {
			createProductForm({})(dispatch, undefined, deps);

			expect(history.push).toHaveBeenCalled();
			expect(history.push.mock.calls[0][0]).toBe('/');
		})
	})

	describe('fetchProducts', () => {
		beforeEach(() => {
			dispatch = jest.fn();
		})

		it('request products', () => {
			fetchProducts()(dispatch);

			expect(dispatch).toHaveBeenCalled();
			expect(dispatch.mock.calls[0][0].type).toBe(REQUEST_PRODUCTS);
		})

		it('receive products', () => {
			fetchProducts()(dispatch);

			expect(dispatch).toHaveBeenCalled();
			expect(dispatch.mock.calls[1][0].type).toBe(RECEIVE_PRODUCTS);
			expect(dispatch.mock.calls[1][0].products).toMatchObject(productApi.getProducts());
		})
	})
});
