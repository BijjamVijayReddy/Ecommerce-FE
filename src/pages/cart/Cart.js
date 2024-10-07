import React from "react";
import Helmet from "../../components/helmet/Helmet";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AppHeader from "../../components/appHeader/AppHeader";
import AppFooter from "../../components/appFooter/AppFooter";
import { formatCurrency } from "../../utlity/formater/formatCurrency";
import CustomToast, { showToast } from '../../components/toast/Toast';


const delete_Svg = <svg xmlns="http://www.w3.org/2000/svg"style={{color:"brown"}} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>


const Cart = () => {
    const cartItems = useSelector((state) => state.cartItems);
    const totalAmount = useSelector((state) => state.totalAmount);

    return (
        <Helmet title="Cart">
        <CustomToast />
            <AppHeader />
            <div className="py-8 mt-[100px]">
                <div className="grid grid-cols-1">
                    <div className="col-span-1 w-[90%] mx-auto">
                        {cartItems.length === 0 ? (
                            <h5 className="text-center text-lg">Your cart is empty</h5>
                        ) : (
                            <table className="table-auto w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="text-center py-2">Image</th>
                                        <th className="text-center py-2">Product Title</th>
                                        <th className="text-center py-2">Price</th>
                                        <th className="text-center py-2">Quantity</th>
                                        <th className="text-center py-2">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item) => (
                                        <Tr item={item} key={item.id} />
                                    ))}
                                </tbody>
                            </table>
                        )}
                        <div className="mt-4">
                            <h6 className="text-lg">
                                SubTotal:
                                <span className="text-red-600 text-xl">₹ {formatCurrency(totalAmount)}/-</span>
                            </h6>
                            <p>Taxes and shipping will calculate at checkout</p>
                            <div className="mt-4">
                                <Link to="">
                                    <button className="bg-blue-500 text-white py-2 px-4 rounded mr-4 hover:bg-blue-600">
                                        Continue Shopping
                                    </button>
                                </Link>
                                <Link to="/checkout">
                                    <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                                        Proceed to checkout
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AppFooter />
        </Helmet>
    );
};

const Tr = (props) => {
    const { id, imageUrl, productName, price, quantity } = props.item;
    const dispatch = useDispatch();

    const deleteItem = (id) => {
        console.log("delete", id);
        dispatch({
            type: "DELETE_ITEM",
            payload: id
        });
        showToast("🗑️ Item Removed from Cart")
    };

    return (
        <tr className="border-b">
            <td className="text-center py-2">
                <div className="w-20 mx-auto">
                    <img src={imageUrl} alt={productName} className="w-full" />
                </div>
            </td>
            <td className="text-center py-2">{productName}</td>
            <td className="text-center py-2">₹ {formatCurrency(price)}/-</td>
            <td className="text-center py-2">{quantity}px</td>
            <td className="text-center py-2 cursor-pointer">
                <button onClick={() => deleteItem(id)} className="text-red-500 hover:text-red-600"> {delete_Svg}</button>
            </td>
        </tr>
    );
};

export default Cart;
