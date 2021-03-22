import { React, useState } from 'react'
import Button from '../components/Button'
import Layout from '../layout/layout'



export default function HairCare() {

    return (
        <>

            <div className="pt-36">
                <div className="flex flex-wrap md:flex-nowrap ml-12  flex-1 min-w-full" data-aos-id-blocks>

                    <div className="md:w-1/4 w-full  flex items-stretch grid-1">
                        <div className="md:flex hidden  md:flex-wrap flex-1 p-4">
                        <div className="w-full h-screen shadow-md bg-gray-300">
                            <h1 className="text-2xl font-italic px-12 py-4">Categories</h1>
                        </div>

                        <div className="w-full h-screen my-8 shadow-md bg-gray-300">
                            <h1 className="text-2xl font-italic px-12 py-4">Categories</h1>
                        </div>

                        </div>
                    </div>


                    <div className="md:w-3/4 w-full flex flex-wrap items-stretch grid2">
                        <div className="flex  flex-wrap flex-1 min-w-full">

                            <div className="w-full flex p-4 items-stretch md:h-tam h-screen">
                                <div className="bg-productsbg bg-cover bg-left-top flex relative w-full rounded-lg"></div>
                            </div>

                            <div className="absolute top-55 px-4 space-x-4">
        <Button buttons={["Hair Tonic","Hair Spray","Hair Oil","Gum Gel","Serum","Conditioner","Shampoo"]}/>
                            </div>


                        </div>

                    </div>






                </div>
            </div>





        </>
    )
}


HairCare.Layout = Layout;
