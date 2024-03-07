import Link from "next/link";
import Image from "next/image";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity"
import { FiArrowRight } from "react-icons/fi";

async function getData() {
    const query = `*[_type == "product"][0...8]{
  _id,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url
}`

const data = await client.fetch(query);
return data;
    
}

export default async function NewCollection(){
    const data: simplifiedProduct[] = await getData();

    return(
        <div id="newCollection" className=" mt-10">
            <div className=" flex items-center justify-between">
                <h1 className=" text-xl">New Collection</h1>
                <Link href={'/'} className=" flex items-center">See all<span><FiArrowRight/></span></Link>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                {data.map((product)=>(
                    <div key={product._id}>
                        <Link href={`/product/${product.slug}`}>
                        <div className=" flex flex-col items-center h-[22rem] p-8 gap-4 bg-[#111111] rounded-sm hover:bg-[#212121]">
                            <div className=" flex items-center justify-center w-[100%] h-[12rem]">
                            <Image  src={product.imageUrl} alt="Product image" width={180} height={180}/>
                            </div>
                            <div className=" flex flex-col gap-2 w-[100%]">
                                <h2 className=" text-lg font-bold text-[#81689D]">${product.price}</h2>
                                <h1 className=" text-sm">{product.name}</h1>
                            </div>

                        </div>
                        </Link>
                    </div>
                ))}

            </div>

        </div>
    )

}
