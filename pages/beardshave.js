import React from 'react'
import Button from '../components/Button'
import Layout from '../layout/layout'



export default function Products(){
    return(
        <>

<div className="pt-36">
<div className="flex flex-wrap md:flex-nowrap  flex-1 min-w-full" data-aos-id-blocks>

<div className="md:w-3/0 w-full  flex items-stretch grid-1">
    <div className="flex flex-nowrap md:flex-wrap flex-1 p-4">
        <div className="md:h-half flex items-stretch ">
            <div className="w-full" >
                <img src="/hair.jpeg" className="h-screen md:h-half rounded-lg bg-center bg-cover" />

            </div>
        </div>

    </div>
</div>


<div className="md:w-3/4 w-full flex flex-wrap items-stretch grid2">
    <div className="flex  flex-wrap flex-1 min-w-full">

        <div className="w-full flex p-4 items-stretch md:h-tam h-screen">
            <div className="bg-products bg-cover bg-left-top flex relative w-full rounded-lg"></div>
        </div>
        <div className="absolute top-55 px-4 space-x-4">
        <Button buttons={["Beard Oil","Razors","Blade Packs","After Shave","Shaving Gel"]}/>
                            </div>
                  

    </div>
    
</div>






</div>
</div>





        </>
    )
}


Products.Layout=Layout;