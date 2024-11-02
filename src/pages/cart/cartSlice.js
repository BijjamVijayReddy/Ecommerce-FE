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

        case "DELETE_ITEM":
            const itemToDelete = state.cartItems.find((item) => item.id === action.payload);
            if (!itemToDelete) return state;

            const updatedTotalAmount = state.totalAmount - (itemToDelete.price * itemToDelete.quantity);
            const updatedCartItems = state.cartItems.filter((item) => item.id !== action.payload);

            return {
                ...state,
                cartItems: updatedCartItems,
                totalQuantity: state.totalQuantity - itemToDelete.quantity,
                totalAmount: updatedTotalAmount
            };

        default:
            return state;
    }
};

export default cartReducer;
