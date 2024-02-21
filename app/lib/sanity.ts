import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";

export const client = createClient({
    projectId:'tcpum65z',
    dataset:'production',
    apiVersion:'2024-02-19',
    useCdn:true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any){
    return builder.image(source);

}