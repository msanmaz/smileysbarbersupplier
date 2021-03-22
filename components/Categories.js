
export default function Categories() {

    return (
        <>
            <div className="relative mt-36 mb-20">
                <h2 className="text-3xl font-bold flex justify-center text-black dark:text-white">Products</h2>


                <div className="flex flex-wrap md:flex-nowrap flex-1 min-w-full" data-aos-id-blocks>

                    <div className="md:w-3/0 w-full  flex items-stretch grid-1">
                        <div className="flex flex-nowrap md:flex-wrap flex-1 p-4">
                            <div className="md:h-half flex items-stretch ">
                                <div className="w-full" >
                                    <img src="/hair.jpeg" className="h-screen md:h-half rounded-lg" />

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="md:w-3/4 w-full flex flex-wrap items-stretch grid2">
                        <div className="flex  flex-wrap flex-1 min-w-full">

                            <div className="md:w-1/2 w-full flex p-4 items-stretch md:h-tam h-screen">
                                <div className="bg-razor bg-cover bg-center flex relative w-full rounded-lg"></div>
                            </div>
                            <div className="md:w-1/2 w-full flex p-4 items-stretch md:h-tam h-screen">
                                <div className="bg-razor1 bg-cover bg-center flex relative w-full rounded-lg"></div>
                            </div>

                            <div className="md:w-1/3 w-full flex p-4 items-stretch h-screen md:h-cate ">
                                <div className="bg-shave bg-cover bg-center flex relative w-full rounded-lg"></div>
                            </div>
                            <div className="md:w-1/3 w-full flex p-4 items-stretch h-screen md:h-cate ">
                                <div className="bg-hair bg-cover bg-center flex relative w-full rounded-lg"></div>
                            </div>
                            <div className="md:w-1/3 w-full flex p-4 items-stretch h-screen md:h-cate ">
                                <div className="bg-hair bg-cover bg-center flex relative w-full rounded-lg"></div>
                            </div>

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