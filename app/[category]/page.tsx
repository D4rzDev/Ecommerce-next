import Link from "next/link";
import Image from "next/image";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity"

async function getData(category:string){
    const query = `*[_type == "product" && category -> name == "${category}"]{
  _id,
    "imageUrl": images[0].asset ->url,
      price,
    name,
    "slug": slug.current,
    "categoryName":category->name
}`
    const data = await client.fetch(query)
    return data;
}

export default async function categoryPage({ params }:{params: {category:string}}) {

    const data: simplifiedProduct = await getData(params.category);
    
    return(
        <div id="newCollection" className=" mt-10 px-4 md:px-10 lg:px-12">
            <div className=" flex items-center justify-between">
                <h1 className=" text-xl">{params.category}</h1>
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
