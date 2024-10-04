const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const item = action.payload;
            const existingItem = state.cartItems.find((x) => x.id === item.id);

            if (!existingItem) {
                const updatedTotalAmount = state.totalAmount + item.price;

                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...item, quantity: 1 }],
                    totalQuantity: state.totalQuantity + 1,
                    totalAmount: updatedTotalAmount
                };
            } else {
                const updatedCartItems = state.cartItems.map((x) =>
                    x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
                );

                const updatedTotalAmount = state.totalAmount + item.price;

                return {
                    ...state,
                    cartItems: updatedCartItems,
                    totalQuantity: state.totalQuantity + 1,
                    totalAmount: updatedTotalAmount
                };
            }

        default:
            return state;
    }
};

export default cartReducer;
