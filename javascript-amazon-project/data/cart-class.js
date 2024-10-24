class Cart  {
	cartItems;

	localStorageKey;

	constructor(localStorakeKey){
		//to define localStorageKey
		this.localStorageKey = localStorakeKey;

		//to initialize the function
		this.loadFromStorage();
	}

	loadFromStorage(){
		//same as -> loadFromStorage: function(){
	
		this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));
		
		//default value for cart if storage is empty
		if (!this.cartItems) {
			this.cartItems = [{
				productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
				quantity: 2,
				deliveryOptionId: '1'
			},{
				productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
				quantity: 1,
				deliveryOptionId: '2'
			}];
		}
	};

	saveToStorage (){
		localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
	};

	addToCart (productId){
		let matchingItem;
	
		this.cartItems.forEach((cartItem) => {
			if (productId === cartItem.productId){
					matchingItem = cartItem;
			}
		});
	
		if (matchingItem){
			matchingItem.quantity ++;
		}
		else{
			this.cartItems.push({
					productId: productId,
					quantity: 1,
					deliveryOptionId: '1'
			});
		}
	
		//"this" to access the function inside the object cart
		this.saveToStorage ();
	};

	removeFromCart (productId) {
		const newCart =  [];
	
		this.cartItems.forEach((cartItem) => {
			if( cartItem.productId !== productId){
				newCart.push(cartItem);
			}
		});
	
		this.cartItems = newCart;
	
		this.saveToStorage ();
	};

	updateDeliveryOption (productId, deliveryOptionId) {
		let matchingItem;
	
		this.cartItems.forEach((cartItem) => {
			if (productId === cartItem.productId){
					matchingItem = cartItem;
			}
		});
	
		matchingItem.deliveryOptionId = deliveryOptionId;
	
		this.saveToStorage ();	
	
	}
}


const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');

console.log(cart);
console.log(businessCart);

//to check if businessCart was created by Cart (= True)
console.log(businessCart instanceof Cart) ;




