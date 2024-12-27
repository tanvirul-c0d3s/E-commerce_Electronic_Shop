import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLS =()=>{

    //displayed on the browser even if we close.
let cartProducts = localStorage.getItem("cartProductLS");

if (!cartProducts){
    return [];
}

    cartProducts =JSON.parse(cartProducts);
updateCartValue(cartProducts);

return cartProducts;
};