"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiShoppingBag, FiHelpCircle, FiHeart } from "react-icons/fi";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { link } from "fs";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";

 const links = [
        {name:'Home', href: '/',},
        {name:'New Collection', href: '#newCollection',},
    ]


export default function Navbar(){
    const  [show, setShow] = useState(false);
    const hideNav = () => {
        setShow(!show);
    }

    const toggleNav = () => {
        setShow (!show);
    }

    const { handleCartClick, cartCount}= useShoppingCart();

    return(
        <header className=" sticky top-0 bg-background z-40">
            <nav className="nav-container flex justify-between items-center px-4 py-4 md:px-10 lg:px-12">
                <Image src="/logo.svg" alt=" logo" width={40} height={40} />
                <div className=" hidden lg:flex items-center gap-5 text-sm">
                    {links.map((link, id) => (
                        <div key={id}>
                            <Link href={link.href}>
                                {link.name}
                            </Link>
                        </div>

                    ))}
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                            <NavigationMenuTrigger>Category</NavigationMenuTrigger>
                            <NavigationMenuContent className=" flex flex-col gap-5 p-5 bg-[#212121]">
                                <NavigationMenuLink href="/Keyboards">Keyboard</NavigationMenuLink>
                                <NavigationMenuLink href="/Headphone">Headphones</NavigationMenuLink>
                                <NavigationMenuLink href="/Controller">Controller</NavigationMenuLink>
                                <NavigationMenuLink href="/Mouse">Mouse</NavigationMenuLink>
                            </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                </div>
                <div className=" flex items-center gap-5">
                    
                    <div className=" relative bg-[#212121] p-3 rounded-sm" onClick={()=> handleCartClick()}>
                        
                        <p className={ cartCount === 0 ? 'hidden' : " absolute bottom-6 left-6 bg-red-600 text-center text-[.5em] rounded-full px-1"}>{cartCount}</p>
                        <FiShoppingBag size={20}/>
                    </div>
                    <Button className="hidden md:hidden lg:flex">Sign Up</Button>

                    <FiMenu size={24} onClick={toggleNav} className=" lg:hidden"/>
                </div>
            </nav>
            <div className={ !show ? 'hidden' : ' fixed top-0 w-screen h-screen flex flex-col items-center px-10 py-5 bg-[#212121]'}>
                <div onClick={hideNav} className=" flex justify-end w-[100%] mb-10">
                    <FiX size={25}/>
                </div>
                {/* <img src="/logo.svg" alt=" logo" width={80} className=" mb-10"/> */}
                <div className=" w-[100%] flex flex-col gap-4 text-2xl">
                   {links.map((link, id) => (
                        <div key={id}>
                            <Link href={link.href}>
                                {link.name}
                            </Link>
                        </div>

                    ))}
                    <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className=" text-decoration:none">Category</AccordionTrigger>
                        <AccordionContent className=" text-lg text-gray-300">
                            <Link href={'/Keyboards'}> Keyboard</Link>
                        </AccordionContent>

                        <AccordionContent className=" text-lg text-gray-300">
                            <Link href={'/Headphone'}> Headphone</Link>
                        </AccordionContent>

                        <AccordionContent className=" text-lg text-gray-300">
                            <Link href={'/Mouse'}>Mouse</Link>
                        </AccordionContent>

                        <AccordionContent className=" text-lg text-gray-300">
                            <Link href={'/Controller'}>Controller</Link>
                        </AccordionContent>

                    </AccordionItem>
                    </Accordion>

                    <div className=" flex gap-3 mt-10 text-xl">
                        <div className=" bg-[#81689D] px-6 py-3 rounded-sm">
                            <Link href={'/'} >Sign Up</Link>
                        </div>
                        <div className=" border-2 border-[#81689D] px-6 py-3 rounded-sm">
                            <Link href={'/'} >Log In</Link>
                        </div>
                    </div>

                    <div className=" flex flex-col gap-5 text-lg mt-10">
                        
                        <Link href={'/'} className=" flex gap-4 items-center"> <FiShoppingBag size={25}/>Bag</Link>
                        <Link href={'/'} className=" flex gap-4 items-center"> <FiHelpCircle size={25}/>Help</Link>

                    </div>
                </div>
            </div>
        </header>
    )
}
