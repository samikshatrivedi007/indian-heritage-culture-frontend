"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Product {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
    quantity: number;
}

const BagPage: React.FC = () => {
    const [cartItems, setCartItems] = useState<Product[]>([
        {
            id: 1,
            image: "/products/heritage-item.jpg",
            title: "Handmade Terracotta Pot",
            description: "Traditional Indian earthen pot with intricate design.",
            price: 499,
            quantity: 1,
        },
    ]);

    const router = useRouter();

    const handleQuantityChange = (id: number, qty: number) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: qty } : item
            )
        );
    };

    const handleCheckout = () => {
        router.push("/checkout"); // Next.js route
    };

    const totalAmount = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Your Shopping Bag</h1>
            {cartItems.map((item) => (
                <div
                    key={item.id}
                    className="flex items-center justify-between p-4 border rounded-lg mb-4"
                >
                    <img src={item.image} alt={item.title} className="w-28 h-28" />
                    <div className="flex-1 ml-4">
                        <h2 className="font-semibold">{item.title}</h2>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                        <p className="text-lg font-bold mt-1">₹{item.price}</p>
                        <input
                            type="number"
                            value={item.quantity}
                            min={1}
                            onChange={(e) =>
                                handleQuantityChange(item.id, parseInt(e.target.value))
                            }
                            className="border rounded p-1 w-16 mt-2"
                        />
                    </div>
                </div>
            ))}

            <div className="text-right">
                <p className="text-xl font-semibold">Total: ₹{totalAmount}</p>
                <button
                    onClick={handleCheckout}
                    className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg"
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default BagPage;
