import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"


export default function Banner() {
    return(
        <Carousel>
        <CarouselContent>
            <CarouselItem>
                <div className=" banner flex items-end p-8 banner mt-10 w-screen h-[20rem] lg:h-[30rem]  bg-[url('/banner3.svg')] rounded-sm">
                    <Link href={'/'} className=" bg-[#81689D] px-4 py-1 rounded-sm"> Shop Now</Link>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className=" banner flex items-end p-8 banner mt-10 w-screen h-[20rem] lg:h-[30em]  bg-[url('/banner2.svg')] rounded-sm">
                    <Link href={'/'} className=" bg-[#81689D] px-4 py-1 rounded-sm"> Shop Now</Link>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className=" banner flex items-end p-8 banner mt-10 w-screen h-[20rem] lg:h-[30em]  bg-[url('/banner1.svg')] rounded-sm">
                    <Link href={'/'} className=" bg-[#81689D] px-4 py-1 rounded-sm"> Shop Now</Link>
                </div>
            </CarouselItem>
        </CarouselContent>
        </Carousel>

    )
}