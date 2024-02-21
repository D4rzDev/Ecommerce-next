"use client"

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart"

export default function Cart() {
    const { cartCount,shouldDisplayCart, handleCartClick, cartDetails, removeItem, totalPrice, redirectToCheckout} = useShoppingCart();
    
    async function handleCheckout (event: any){
        event.preventDefault()
        try {
            const result = await redirectToCheckout()
            if(result?.error){
                console.log('result')
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    return(
         <Sheet open={shouldDisplayCart} onOpenChange={()=> handleCartClick()}>
            <SheetContent className=" sm:max-w-lg w-[90vw] z-50">
                <SheetHeader>
                <SheetTitle>Cart</SheetTitle>
                </SheetHeader>
                <div className=" h-full flex flex-col justify-between">
                    <div className=" mt-4 flex-1 overflow-y-auto">
                        <ul className=" my-4">
                            { cartCount === 0 ?
                            (
                                <div className=" flex items-center justify-center">
                                    <h1> You don't have any items</h1>
                                </div> 
                            ):
                            (
                              // <h1>You have a items on your cart</h1>

                              <>
                              {Object.values(cartDetails ?? {}).map((entry) =>(
                                <li key={entry.id} className=" flex gap-2 mt-2 border-b-2 border-[#111111] py-4">
                                    <div className=" flex items-center flex-shrink-1 p-2 rounded-sm h-20 w-24 bg-[#111111]">
                                     <Image src={entry.image as string} alt="Image" height={100} width={100}/>
                                    </div>

                                    <div className=" flex flex-col justify-between w-[100%]">
                                        <div className=" flex justify-between ">
                                            <h1 className=" text-sm font-semibold line-clamp-2 w-40">{entry.name}</h1>
                                            <p>${entry.price}</p>
                                        </div>

                                        <div className=" flex justify-between items-end">
                                            <p className=" text-xs">QTY: {entry.quantity}</p>
                                            <p onClick={() => removeItem(entry.id) } className=" text-[#81689D] text-xs">Remove</p>
                                        </div>
                                    </div>
                                </li>
                              ))}
                              </>
                            )}

                        </ul>
                    </div>

                    <div className=" flex flex-col border-t-2 py-2">
                        <div className=" flex justify-between">
                            <h1 className=" text-sm">Subtotal:</h1>
                            { cartCount === 0 ? (<p>$ 0</p>):( <p>${totalPrice?.toFixed(2)}</p>) }
                        </div>

                        <div>
                            <p className=" text-xs text-gray-300">Shipping and taxes are calculated at checkout.</p>
                        </div>

                        <div className=" flex mt-6">
                            <Button onClick={handleCheckout} className=" w-full">Checkout</Button>
                        </div>

                        <div className=" flex mt-4">
                            <Button onClick={() => handleCartClick()} variant="ghost" className=" w-full">Or Continue Shopping</Button>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
      
    )
}