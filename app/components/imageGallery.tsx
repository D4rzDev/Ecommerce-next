"use client"
import Image from "next/image"
import { urlFor } from "../lib/sanity"
import { useState } from "react"

interface iAppProps{
    images: any;
}

export default function ImageGallery ({images} : iAppProps) {
    const [bigImage, setBigImage] = useState(images[0]);

    const handleImage =(image:any) => {
        setBigImage(image);
    }
    return(
        <div className=" flex flex-col w-[100%] h-full gap-2 lg:flex-row-reverse">
            <div className=" w-[100%] flex items-center justify-center h-[20rem] lg:h-[25rem] bg-[#111111] py-10 rounded-sm">
                <Image src={urlFor(bigImage).url()} alt="Image" width={250} height={250}/>
            </div>
            <div className=" flex items-center gap-2 w-[100%] lg:w-[50%] lg:flex-col">
                { images.map ((image: any, id : any) =>(
                     <div key={id} className=" flex items-center justify-center w-[100%] h-[8rem] md:h-[12rem] lg:h-[8rem] rounded-sm bg-[#111111]">
                        <Image src={urlFor(image).url()} width={100} height={100} alt="Image" className=" object-cover object-center" onClick={() => handleImage(image)}/>
                     </div>
                ))}

            </div>

        </div>
    )

}