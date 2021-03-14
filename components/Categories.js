
export default function Categories() {

    return (
        <>
            <div className="relative my-52">
                <h2 className="text-3xl font-bold flex justify-center text-black dark:text-white">Products</h2>


                <div className="flex flex-wrap md:flex-nowrap flex-1 min-w-full" data-aos-id-blocks>

                    <div className="md:w-3/0 w-full  flex items-stretch grid-1">
                    <div className="flex flex-nowrap md:flex-wrap flex-1 p-4">
                        <div className="md:h-half flex items-stretch">
                            <div className="w-full" >
                             <img src="/hair.jpeg" className="h-screen md:h-half"/>

                            </div>
                        </div>

                    </div>
                    </div>

                    <div className="md:w-3/4 w-full flex flex-wrap items-stretch grid2">
                        <div className="flex  flex-wrap flex-1 min-w-full">

                            <div className="md:w-1/2 w-full flex p-4 items-stretch h-tam">
                                <div className="bg-hair bg-cover bg-center flex relative w-full"></div>
                            </div>
                            <div className="md:w-1/2 w-full flex p-4 items-stretch h-tam">
                                <div className="bg-hair bg-cover bg-center flex relative w-full"></div>
                            </div>

                            <div className="md:w-1/3 w-full flex p-4 items-stretch" style={{height:'333px'}}>
                                <div className="bg-hair bg-cover bg-center flex relative w-full"></div>
                            </div>
                            <div className="md:w-1/3 w-full flex p-4 items-stretch" style={{height:'333px'}}>
                                <div className="bg-hair bg-cover bg-center flex relative w-full"></div>
                            </div>
                            <div className="md:w-1/3 w-full flex p-4 items-stretch" style={{height:'333px'}}>
                                <div className="bg-hair bg-cover bg-center flex relative w-full"></div>
                            </div>

                        </div>

     






                    </div>

                    




                </div>



            </div>

        </>
    )
}