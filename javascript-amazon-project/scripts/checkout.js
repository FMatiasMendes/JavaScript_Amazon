//to import from orderSummary.js
import {renderOrderSummary} from './checkout/orderSummary.js'
//to import from paymentSummary.js
import {renderPaymentSummary} from './checkout/paymentSummary.js'
//just to run and test the cart-oop file without importing anything (same thing as cart.js but modified to object-oriented programming)
import '../data/cart-oop.js';

renderOrderSummary();
renderPaymentSummary();