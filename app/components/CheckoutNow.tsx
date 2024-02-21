"use client"

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import { ProductCart } from "./AddToCart";


export default function Checkout ({name, description, price ,currency, image, price_id}:ProductCart) {
    const { checkoutSingleItem} = useShoppingCart();

    function buyNow(priceId : string) {
        checkoutSingleItem(priceId)
    }

    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id,
    };

    return (
        <Button variant="secondary" onClick={() => buyNow(product.price_id)}>Add to Cart</Button>
    )
}