import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import ImageGallery from "@/app/components/imageGallery";
import { Button } from "@/components/ui/button";
import { FiStar, FiTruck } from "react-icons/fi";
import AddToCart from "@/app/components/AddToCart";
import Checkout from "@/app/components/CheckoutNow";

async function getData( slug: string) {
    const query =`*[_type == "product" && slug.current =="${slug}"][0]{
  _id,
    images,
    price,
    name,
    description,
    "slug": slug.current,
    "categoryName": category->name,
    price_id
}`;

const data = await client.fetch(query);

return data;
    
}

export default async function ProductPage ({params,}:{params :{slug : string};}) {

    const data: fullProduct = await getData(params.slug);
    return(
        <div className=" grid gap-4 px-4 mt-6 md:px-10 lg:px-12 lg:grid-cols-2">
            <ImageGallery images={data.images}/>
            <div className=" flex flex-col">
                <span className=" text-xs text-gray-300">{data.categoryName}</span>
                <h1 className=" text-lg font-semibold">{data.name}</h1>
                <div className=" flex items-center gap-2 mt-2">
                    <Button size={"sm"} variant={"default"} className=" rounded-full text-white">
                        <span className=" mr-2">4.3</span>
                        <FiStar/>
                    </Button>
                    <p className=" text-xs text-gray-300">100 Ratings</p>
                </div>

                <div className=" flex flex-col">
                    <div className=" flex items-center gap-2 mt-6">
                        <h1 className=" text-2xl font-semibold">${data.price}</h1>
                        <p className=" text-red-600 line-through">${data.price + 20}</p>
                    </div>
                    <p className=" flex items-center gap-2 text-gray-300 text-sm mt-2"><FiTruck/>5-7 Day Shipping</p>
                </div>

                <div className=" flex gap-2 mt-6">
                    <AddToCart currency="USD" description={data.description} image={data.images[0]} name={data.name} price={data.price} price_id={data.price_id} key={data._id}/>
                    <Checkout currency="USD" description={data.description} image={data.images[0]} name={data.name} price={data.price} price_id={data.price_id} key={data._id}/>
                </div>
                <div className=" flex flex-col gap-4 mt-6">
                    <h1 className=" font-semibold">Description :</h1>
                    <p className=" text-sm text-gray-300">{data.description}</p>
                </div>
               

            </div>
        </div>
    )
}