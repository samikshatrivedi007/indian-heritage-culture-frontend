"use client";
import React, { useState } from "react";

const CheckoutPage: React.FC = () => {
    const [paymentMethod, setPaymentMethod] = useState("upi");

    const handleOrder = () => {
        alert("Order Placed Successfully!");
        // Add navigation or backend integration
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Checkout</h1>

            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Delivery Address</h2>
                <textarea
                    rows={3}
                    placeholder="Enter your delivery address"
                    className="w-full border p-2 rounded"
                />
            </div>

            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Select Payment Method</h2>
                <div className="flex flex-col gap-2">
                    <label>
                        <input
                            type="radio"
                            name="payment"
                            value="upi"
                            checked={paymentMethod === "upi"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <span className="ml-2">UPI (PhonePe, GPay, Paytm)</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="payment"
                            value="card"
                            checked={paymentMethod === "card"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <span className="ml-2">Debit/Credit Card</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="payment"
                            value="cod"
                            checked={paymentMethod === "cod"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <span className="ml-2">Cash on Delivery</span>
                    </label>
                </div>
            </div>

            <div className="text-right">
                <button
                    onClick={handleOrder}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                >
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default CheckoutPage;
