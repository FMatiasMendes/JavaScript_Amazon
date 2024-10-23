import {renderOrderSummary} from "../../scripts/checkout/orderSummary.js";
import {loadFromStorage, cart} from "../../data/cart.js";

describe('test suite: renderOrderSummary', () => {

	const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
	const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
	
	//it will run this function before each test here
	beforeEach(() => {
			//moke setItem
			spyOn(localStorage, 'setItem');

			document.querySelector('.js-test-container').innerHTML = `
			<div class="js-order-summary"></div>
			<div class="js-payment-summary"></div>
			`;
	
		//Mock
		spyOn(localStorage, 'getItem').and.callFake(() => {
			return JSON.stringify([{
				productId: productId1,
				quantity: 2,
				deliveryOptionId: '1'
			},{
				productId: productId2,
				quantity: 1,
				deliveryOptionId: '2'
			}]);
		});
		//to load the fake cart
		loadFromStorage();

		renderOrderSummary();
	});

	it('displays the cart', () => {

		//to verify the quantity os elements of the cart
		expect(
			document.querySelectorAll('.js-cart-item-container').length
		).toEqual(2);

		//to verify the quantity of product 1
		expect(
			document.querySelector(`.js-product-quantity-${productId1}`).innerText
		).toContain('Quantity: 2');

		//to verify the quantity of product 2
		expect(
			document.querySelector(`.js-product-quantity-${productId2}`).innerText
		).toContain('Quantity: 1');

		document.querySelector('.js-test-container').innerHTML = ``;

	});

		//to verify the delete button
		it('removes a product', () => {


		document.querySelector(`.js-delete-link-${productId1}`).click();

		expect(
			document.querySelectorAll('.js-cart-item-container').length
		).toEqual(1);

		expect(
			document.querySelector(`.js-cart-item-container-${productId1}`)
		).toEqual(null);

		expect(
			document.querySelector(`.js-cart-item-container-${productId2}`)
		).not.toEqual(null);

		expect(cart.length).toEqual(1);
		expect(cart[0].productId).toEqual(productId2);

		document.querySelector('.js-test-container').innerHTML = ``;
	});
});