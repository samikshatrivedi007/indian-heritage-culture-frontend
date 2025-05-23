'use client';
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

type Product = { id: string; title: string; price: number; image: string };

type CartItem = Product & { qty: number };

type CartState = { items: CartItem[] };

type CartAction =
    | { type: 'ADD'; payload: Product }
    | { type: 'REMOVE'; payload: string }
    | { type: 'INC'; payload: string }
    | { type: 'DEC'; payload: string };

const CartContext = createContext<
    | {
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
}
    | undefined
>(undefined);

function reducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case 'ADD': {
            const idx = state.items.findIndex((i) => i.id === action.payload.id);
            if (idx !== -1) {
                const items = [...state.items];
                items[idx].qty += 1;
                return { items };
            }
            return { items: [...state.items, { ...action.payload, qty: 1 }] };
        }
        case 'INC': {
            return {
                items: state.items.map((i) =>
                    i.id === action.payload ? { ...i, qty: i.qty + 1 } : i,
                ),
            };
        }
        case 'DEC': {
            return {
                items: state.items
                    .map((i) =>
                        i.id === action.payload ? { ...i, qty: i.qty - 1 } : i,
                    )
                    .filter((i) => i.qty > 0),
            };
        }
        case 'REMOVE':
            return { items: state.items.filter((i) => i.id !== action.payload) };
        default:
            return state;
    }
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, { items: [] });
    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used within CartProvider');
    return ctx;
};
