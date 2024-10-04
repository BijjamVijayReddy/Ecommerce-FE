import React from "react";
import Helmet from "../../components/helmet/Helmet";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AppHeader from "../../components/appHeader/AppHeader";
import AppFooter from "../../components/appFooter/AppFooter";
import { formatCurrency } from "../../utlity/formater/formatCurrency";

const Cart = () => {
    const cartItems = useSelector((state) => state.cartItems);
    const totalAmount = useSelector((state) => state.totalAmount);

    return (
        <Helmet title="Cart">
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
                                <Link to="/foods">
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

    const deleteItem = () => {
        console.log("delete")
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
                <button onClick={deleteItem} className="text-red-500 hover:text-red-600"> Delete </button>
            </td>
        </tr>
    );
};

export default Cart;
