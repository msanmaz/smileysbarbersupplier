
import Link from 'next/link'
export default function Categories() {

    return (
        <>
            <div className="px-4 relative isix md:mt-28 mb-20">
                <h2 className="md:text-3xl text-2xl font-bold flex justify-center text-black dark:text-white">Products</h2>


                <div className="flex flex-wrap md:flex-nowrap flex-1 min-w-full px-4" data-aos-id-blocks>



                    <Link href="/barbering/hygiene">
                    <div className="md:w-3/0 w-full hidden cursor-pointer c-card  md:flex grid-1 px-4 md:px-auto">
                        <div className="flex mt-4 md:h-half flex-1 p-4 rounded-lg bg-center bg-cover h-screen" style={{ backgroundImage: "url(https://cdn.webshopapp.com/shops/266822/themes/172315/v/877/assets/homepage-banner-1-image.jpg?20210313143846?20200422160649)"}}>
                            <div className="flex items-stretch">

                                <div class="absolute bottom-20 left-10 mx-5 mt-2 flex justify-between items-center">
                                <a href="#" class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">Discover Our Latest Hygiene Products
                                </a>
                                </div>


                                <main class="p-2 z-10">
                                <a href="#" class="text-xs bg-green-500 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">Hygiene</a>

                              
                                </main>
                            </div>

                        </div>
                    </div>
                    </Link>
                    <div className="md:w-3/4 w-full flex flex-wrap items-stretch grid2">
                        <div className="flex  flex-wrap flex-1 min-w-full">

                            <div className="md:w-1/2 w-full flex p-4 items-stretch md:h-tam h-screen">


                            <Link href="/haircare/hairwax">

                                <div className="bg-shave catcat cursor-pointer bg-cover bg-center flex relative w-full rounded-lg">
                                    <div class="absolute rounded-lg bottom-0 mt-20 right-0 top-1 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                                    <div class="absolute bottom-1 left-0 mx-5 mt-2 flex justify-between items-center">
                                        <a href="#" class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">Discover Our Latest Wax Products
    </a>
                                    </div>
                                    <main class="p-5 z-10">

                                            <div className="cursor-pointer text-xs bg-green-500 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">
                                                Wax
                                                </div>

                                    </main>

                                </div>
                                </Link>
                            </div>


                            <div className="md:w-1/2 w-full flex p-4 cursor-pointer items-stretch md:h-tam h-screen">
                            <Link href="/beardandshave">

                                <div className="bg-razor1 catcat bg-cover bg-center flex relative w-full rounded-lg">
                                    <div class="absolute rounded-lg bottom-0 mt-20 right-0 top-1 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                                    <div class="absolute bottom-1 left-0 mx-5 mt-2 flex justify-between items-center">
                                        <a href="#" class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">Discover Our Latest Shaving Products
    </a>
                                    </div>
                                    <main class="p-5 z-10">

                                        <a href="#" class="text-xs bg-green-500 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">Beard & Shave</a>

                                    </main>

                                </div>
                                </Link>
                            </div>
                            <Link href="/haircare">

                            <div className="md:w-1/3 w-full flex p-4 items-stretch h-screen md:h-cate ">
                                <div className="bg-products catcat bg-cover bg-center flex relative w-full rounded-lg">
                                    <div class="absolute rounded-lg bottom-0 mt-20 right-0 top-1 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                                    <div class="absolute bottom-1 left-0 mx-5 mt-2 flex justify-between items-center">
                                        <a href="#" class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">Discover Our Latest Hair Care Products
    </a>
                                    </div>
                                    <main class="p-5 z-10">

                                        <a href="#" class="text-xs bg-green-500 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">Hair Care</a>

                                    </main>

                                </div>
                            </div>

                            </Link>
                            <div className="md:w-1/3 w-full flex p-4 items-stretch h-screen md:h-cate ">


                            <Link href="/barbering/electrical">
                                <div className="bg-trimmer catcat bg-cover bg-center flex relative w-full rounded-lg">
                                    <div class="absolute rounded-lg bottom-0 mt-20 right-0 top-1 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                                    <div class="absolute bottom-1 left-0 mx-5 mt-2 flex justify-between items-center">
                                        <a href="#" class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">Discover Our Latest Electrical Shaving Products
    </a>
                                    </div>
                                    <main class="p-5 z-10">

                                        <a href="#" class="text-xs bg-green-500 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">Electrical Shavers</a>

                                    </main>

                                </div>
                                </Link>
                            </div>

                            <Link href="/beardandshave/razors">
                            <div className="md:w-1/3 w-full flex p-4 cursor-pointer items-stretch h-screen md:h-cate ">
                                <div className="bg-razor bg-cover bg-center flex relative w-full rounded-lg">
                                    <div class="absolute rounded-lg bottom-0 mt-20 right-0 top-1 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                                    <div class="absolute bottom-1 left-0 mx-5 mt-2 flex justify-between items-center">
                                        <a href="#" class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">Discover Our Latest Razors Products
    </a>
                                    </div>
                                    <main class="p-5 z-10">

                                        <a href="#" class="text-xs bg-green-500 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">Razors</a>

                                    </main>

                                </div>
                            </div>
                            </Link>
                        </div>








                    </div>






                </div>


                <div className="px-4">
                    <button className="py-2 w-full md:px-4 px-0 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                        Become A Retailer
                </button>
                </div>


            </div>

        </>
    )
}