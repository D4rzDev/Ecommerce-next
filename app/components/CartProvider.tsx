"use client"
import {CartProvider } from "use-shopping-cart"

export default function Provider({children}:{children:React.ReactNode}) {
    return( 
        <CartProvider mode="payment" cartMode="client-only" stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string} successUrl="https://localhost:3000/stripe/success" cancelUrl="https://localhost:3000" currency="USD" billingAddressCollection={true} shouldPersist={true} language="en-US">
            {children}  
        </CartProvider>
    ) 

}