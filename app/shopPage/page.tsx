// app/shop/cartContext.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/cartContext';   // 1️⃣  import hook  (adjust path!)

type Product = {
    id: string;
    title: string;
    description: string;
    image: string;
    price: number;
};

const sampleProducts: Product[] = [
    { id: '1', title: 'Handmade Pottery', description: 'Beautifully crafted clay pot from Rajasthan.', image: '/assets/shop1.jpg', price: 799 },
    { id: '2', title: 'Silk Saree',        description: 'Traditional silk saree from Banaras with fine zari work.',  image: '/assets/shop2.jpeg',  price: 2499 },
    { id: '3', title: 'Silk Saree',        description: 'Traditional silk saree from Banaras with fine zari work.',  image: '/assets/shop3.jpeg',  price: 2499 },
];

/* ------------ Navbar ------------ */
const Navbar: React.FC = () => {
    const { state } = useCart();           // 2️⃣  call the hook

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between bg-white px-6 py-4 shadow-md">
            <Link href="/" className="text-xl font-bold text-indigo-600 hover:opacity-80">
                Heritage Shop
            </Link>

            <ul className="flex items-center gap-6 text-sm font-medium text-gray-700">
                <li><Link href="/" className="hover:text-indigo-600">Home</Link> </li>
                <li><Link href="/orders"  className="hover:text-indigo-600">Orders</Link></li>
                <li><Link href="/account" className="hover:text-indigo-600">Account</Link></li>


                {/* Cart with badge */}
                <li className="relative">
                    <Link href="/cart" className="hover:text-indigo-600">
                        Cart
                        {state.items.length > 0 && (
                            <span className="absolute -right-3 -top-2 rounded-full bg-red-500 px-1.5 text-xs text-white">
                {state.items.length}
              </span>
                        )}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

/* ------------ Shop page ------------ */
const Shop: React.FC = () => {
    const { dispatch } = useCart();
    const router = useRouter();

    const handleAddToBag = (product: Product) =>
        dispatch({ type: 'ADD', payload: product });

    const handleBuyNow = (product: Product) => {
        dispatch({ type: 'ADD', payload: product });
        router.push('/cart');
    };

    return (
        <>
            <Navbar />

            <section className="min-h-screen bg-gray-100 px-4 pb-10 pt-8 md:px-10 lg:px-20">
                <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-800">Shop Cultural Items</h2>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {sampleProducts.map((product) => (
                        <div key={product.id} className="group rounded-xl bg-white p-4 shadow transition-transform hover:-translate-y-1 hover:shadow-lg">
                            <img src={product.image} alt={product.title} className="mb-4 h-44 w-full rounded-lg object-cover" />

                            <h3 className="mb-1 text-lg font-semibold text-gray-800 group-hover:text-indigo-600">{product.title}</h3>
                            <p className="mb-2 text-sm text-gray-600">{product.description}</p>
                            <p className="mb-4 text-base font-bold text-gray-900">₹{product.price}</p>

                            <div className="flex gap-2">
                                <button className="flex-1 rounded-md bg-amber-600 px-3 py-2 text-sm font-medium text-white hover:bg-amber-700"
                                        onClick={() => handleAddToBag(product)}>Add to Bag</button>
                                <button className="flex-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                                        onClick={() => handleBuyNow(product)}>Buy Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Shop;
