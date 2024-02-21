import Link from "next/link";
import Image from "next/image";


export default function Hero () {
    return(
        <section className=" flex flex-col items-center justify-center gap-10">
            
            <div className=" flex items-center justify-center w-[100%] bg-[#111111] p-10 h-full lg:w-[100%] lg:h-full">
                <Image src={"/heroimg1.svg"} alt="image" width={600} height={600}/>
                {/* <div className=" bg-[#81689D] px-6 py-3 text-sm rounded-sm">
                    <Link href={'/'}> See All Products</Link>
                </div> */}
            </div>

            <div className=" flex flex-col md:flex-row items-center justify-center h-auto p-6">
                <div className=" w-[100%] flex items-center justify-center">
                    <Image src="/red.svg" alt="" width={250} height={250} />
                </div>
                <div className="w-[100%]  rounded-sm">
                    <div className=" flex flex-col text-[2em] font-bold">
                        <h1>Redragon</h1>
                        <h1>H868 Mira</h1>
                    </div>
                    <p className=" text-sm text-slate-200 line-clamp-5">Redragon 3-modes WIRED/2.4ghz/Bluetooth gaming headset work with multi platform. Intelligent two-way connection available with phone call pick-up during play game. Advanced battery life technology and up to 12 meters 2.4G wireless range 7.1 surround sound channel for great positional and distance awareness of Objects in-game RGB backlight, over-ear, breathable fabric earcups 3 EQ modes for options Detachable noise cancelling microphone System support: Windows XP / Vista / Win7 / Win8 / Win10/Win11/Mac/Switch/PS3/4/5 Xbox one mobile android & iPhone.</p>
                   
                </div>
            </div>

            <div className=" flex flex-col items-center justify-center w-[100%]">
                <h1 className=" text-xl">Products</h1>
                <div className=" grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 w-[100%] gap-4 mt-10">
                    <div className=" flex items-center justify-center bg-[#81689D] w-[100%] h-[20rem] p-10 rounded-sm">
                        <Image src="/red.svg" alt="headphone" width={200} height={200}/>
                    </div>

                    <div className=" flex items-center justify-center bg-[#81689D] w-[100%] h-[20rem] p-10 rounded-sm">
                        <Image src="/keyboard.svg" alt="headphone" width={200} height={200}/>
                    </div>

                    <div className=" flex items-center justify-center bg-[#81689D] w-[100%] h-[20rem] p-10 rounded-sm">
                        <Image src="/mouse.svg" alt="headphone" width={200} height={200}/>
                    </div>

                    <div className=" flex items-center justify-center bg-[#81689D] w-[100%] h-[20rem] p-10 rounded-sm">
                        <Image src="/controller.svg" alt="headphone" width={200} height={200}/>
                    </div>
                </div>

            </div>

        </section>
    )
}