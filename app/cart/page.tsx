'use client';
import Link from 'next/link';
import { useCart } from '../context/cartContext';

export default function CartPage() {
    const { state, dispatch } = useCart();

    const subtotal = state.items.reduce(
        (acc, item) => acc + item.price * item.qty,
        0,
    );

    if (state.items.length === 0)
        return (
            <div className="mx-auto max-w-4xl px-4 py-10 text-center">
                <h1 className="mb-4 text-2xl font-bold">Your Cart is Empty</h1>
                <Link
                    href="/shop"
                    className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                >
                    Continue Shopping
                </Link>
            </div>
        );

    return (
        <div className="mx-auto max-w-5xl px-4 py-10">
            <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>

            <div className="space-y-6">
                {state.items.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow md:flex-row md:items-center"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-28 w-full rounded md:w-28"
                        />
                        <div className="flex-1">
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                            <p className="text-sm text-gray-600">₹{item.price}</p>
                            <div className="mt-2 flex items-center gap-2">
                                <button
                                    className="rounded bg-gray-200 px-2 py-1"
                                    onClick={() => dispatch({ type: 'DEC', payload: item.id })}
                                >
                                    −
                                </button>
                                <span>{item.qty}</span>
                                <button
                                    className="rounded bg-gray-200 px-2 py-1"
                                    onClick={() => dispatch({ type: 'INC', payload: item.id })}
                                >
                                    +
                                </button>
                                <button
                                    className="ml-4 text-sm text-red-600 hover:underline"
                                    onClick={() => dispatch({ type: 'REMOVE', payload: item.id })}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                        <div className="font-bold md:w-24 md:text-right">
                            ₹{item.price * item.qty}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-10 flex flex-col items-end">
                <p className="mb-4 text-xl font-bold">Subtotal: ₹{subtotal}</p>
                <button className="w-full rounded bg-amber-600 px-4 py-3 font-medium text-white hover:bg-amber-700 md:w-64">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}
