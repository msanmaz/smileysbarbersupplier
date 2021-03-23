import { React, useState } from 'react'
import Button from '../components/Button'
import Layout from '../layout/layout'



export default function HairCare() {

    return (
        <>

            <div className="pt-36">
                <div className="flex flex-wrap md:flex-nowrap  flex-1 min-w-full" data-aos-id-blocks>

                    <div className="md:w-1/4 w-full  flex items-stretch grid-1">
                        <div className="md:flex hidden  md:flex-wrap flex-1 p-4">


                        <div className="w-full h-screen shadow-md bg-gray-300 rounded-lg">
                            <h1 className="text-2xl font-italic px-12 py-4">Categories</h1>
                        </div>

                        <div className="w-full h-screen my-8 shadow-md bg-gray-300 rounded-lg">
                            <h1 className="text-2xl font-italic px-12 py-4">Newsletter</h1>
                            <h2 className="text-sm px-12">Get the latest updates, news and product offers via email</h2>
                            <div className="px-12 py-4">
                            <input className="rounded-lg" placeholder="Email"></input>
                            <button className= "py-2 px-4 my-2 bg-black text-white font-semibold rounded-lg shadow-md active:bg-gray-900 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75" >
                Subscribe
                    </button>

                            </div>
                        </div>

                        </div>
                    </div>


                    <div className="md:w-3/4 w-full flex flex-wrap items-stretch grid2">
                        <div className="flex  flex-wrap flex-1 min-w-full">

                            <div className="w-full flex p-4 items-stretch md:h-tam h-screen">
                                <div className="bg-productsbg bg-cover bg-left-top flex relative w-full rounded-lg">
                                    <h1 className="text-3xl font-bold text-white font-sans absolute top-8 left-2">Products</h1>
                                </div>
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
