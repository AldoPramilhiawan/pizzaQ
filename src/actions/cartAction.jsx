export const addTocart = (pizza, quantity, varient) => (dispatch) => {
    var cartItems = {
        name: pizza.name,
        _id: pizza.id,
        image: pizza.image,
        varient: varient,
        quantity: quantity,
        prices: pizza.prices,
        price: pizza.prices[0][varient] * quantity,
    };
    dispatchEvent({ type: "ADD_TO_CART", payload: cartItems })
};