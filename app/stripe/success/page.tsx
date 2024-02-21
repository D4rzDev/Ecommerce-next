import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FiCheck } from "react-icons/fi"

export default function Success(){
    return(
        <div className=" flex flex-col items-center justify-center h-screen">
            <div className=" flex flex-col items-center justify-center gap-2">
                <FiCheck size={50} color="green"/>
                <h1 className=" text-2xl font-semibold">Payment Done!</h1>
                <p className=" text-sm text-gray-300">Thank you for purchasing. We hope you enjoy it.</p>
                <p>Have a great day!</p>
            </div>

            <div className=" mt-8">
                <Button>
                    <Link href="/"> Go back home</Link>
                </Button>
            </div>
        </div>
    )
}