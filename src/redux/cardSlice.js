import { createSlice } from "@reduxjs/toolkit";


const fetchFromLocalStoreage = () => {
    let cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(localStorage.getItem('cart'))
    } else {
        return []
    }
}


const storeInLocalStoreage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data))
}


const initialState = {
    carts: fetchFromLocalStoreage(),
    itemCount: 0,
    totalAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCard: (state, action) => {
            const isItemCart = state.carts.find(item => item.id === action.payload.id)

            if (isItemCart) {
                const tempCart = state.carts.map(item => {
                    if (item.id === action.payload.id) {
                        let tempQty = item.quantity + action.payload.quantity;
                        let tempTotalPrice = tempQty + item.price;
                        return {
                            ...item, quantity: tempQty, totalPrice: tempTotalPrice
                        }
                    } else {
                        return item
                    }
                })
                state.carts = tempCart;
                storeInLocalStoreage(state.carts)
            } else {
                state.carts.push(action.payload)
                storeInLocalStoreage(state.carts)
            }
        },

      removeFromCart:(state,action)=>{
        const tempCart=state.carts.filter(item=>item.id!== action.payload)
        state.carts=tempCart
        storeInLocalStoreage(state.carts)
      },

      clearCart:(state)=>{
        state.carts=[]
        storeInLocalStoreage(state.carts)
      },


      getCartTotal :(state)=>{
        state.totalAmount = state.carts.reduce((cartTotal,cartItem)=>{
            return cartTotal += cartItem.price * cartItem.quantity
        },0)
        state.itemCount =state.carts.length
      }
    }
})


export const { addToCard ,removeFromCart, clearCart, getCartTotal}=cartSlice.actions
export default cartSlice.reducer