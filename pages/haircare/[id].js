import { loadDB } from '../../config/firebase'
import Layout from '../../layout/layout'
import Image from 'next/image'
import Link from 'next/link'
const HairProducts = (props) => {

    return (
        <>
            <div className="w-full pt-24 flex">


                <div className="w-2/5 flex">


                    <div className="md:my-24 my-16">

                        <div className="w-full">
                            <Link href={`/haircare/?cat=${props.cat}`} as={`/haircare/${props.cat}`}
                            >
                                <div
                                    class="p-4 w-1/4 cursor-pointer">
                                    <h3 class="text-lg font-semibold inline-flex">
                                        <svg class="mr-2" width="24" height="30" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
                                                fill="currentColor" /></svg>
                            Go Back
						</h3>
                                </div>
                            </Link>
                            <img width={900} height={500} src={props.img} className="shadow-sm" />

                        </div>

                    </div>
                </div>
                <div className="w-3/5 flex md:mt-52 mt-16">

                    <div className="w-5/6">


                        <div className="px-4 flex py-4 text-xm"> {props.cat}</div>
                        <div className="px-4 font-semibold text-base md:text-3xl">{props.name}</div>
                        <div className="md:float-right px-4 py-4">
                            <button className="py-2 md:px-6 px-4 bg-red-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">Price Enquiry </button>
                        </div>

                        <div className="flex flex-nowrap md:flex-wrap justify-between mt-2 md:mt-10 w-full md:w-1/2">

                            <div className="px-4 my-2 text-xl">€ --,--</div>
                            <div className="md:pr-20 my-2 px-4 font-light"> In Stock</div>

                        </div>
                        <div className="px-4 text-xl">€14,95 Retail Price (Incl. VAT)</div>



                        <div className="py-4 px-4 space-y-4">

                            <div class="relative p-4 bg-gray-300 w-full m-auto flex-col flex rounded">
                                <div className="font-medium">
                                    BUY 12 FOR AND SAVE 7%
                                </div>
                            </div>


                            <div class="relative p-4 bg-gray-300 w-full m-auto flex-col flex rounded">
                                <div className="font-medium">
                                    BUY 12 FOR AND SAVE 7%
                                </div>
                            </div>


                            <div class="relative p-4 bg-gray-300 w-full m-auto flex-col flex rounded">
                                <div className="font-medium">
                                    BUY 12 FOR AND SAVE 7%
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>

            <div className="flex w-full">

                <div className="flex flex-wrap justify-center w-1/2">

                    <div className="flex font-semibold text-2xl px-4">
                        Product Information
                   </div>

                    <div className="flex w-full text-lg font-semibold px-4 py-4">Description:</div>
                    <div className="font-light px-4">
                    Totex Hair Styling Spray is a reworkable volumizing spray which gives a matte finish with lightweight texture and separation. It can be applied direct to hair or rubbed through with your hands. Suitable for all hair types. Get Tot-ex!
                    </div>
                    
                    <div className="flex w-full text-lg font-semibold py-4 px-4">Usage:</div>
                    <div className="font-light px-4">
                    Totex Hair Styling Spray is a reworkable volumizing spray which gives a matte finish with lightweight texture and separation. It can be applied direct to hair or rubbed through with your hands. Suitable for all hair types. Get Tot-ex!
                    </div>


                </div>


                <div className="flex justify-center w-1/2">
                    <div className="font-semibold text-2xl">
                        Related Products
                </div>

                </div>

            </div>
        </>
    )

}



export async function getStaticPaths() {
    let result = await new Promise((resolve, reject) => {
        loadDB().firestore()
            .collection('hair')
            .get()
            .then(snapshot => {
                let data = []
                snapshot.forEach((doc) => {
                    data.push(
                        Object.assign({
                            id: doc.id
                        }, doc.data())
                    )
                })
                resolve(data)
            })
            .catch(error => {
                reject([])
            })
    })
    return {
        paths:
            result.map(character => {
                return {
                    params: {
                        id: character.id,
                    }

                }
            }),
        fallback: false
    }
}


export const getStaticProps = async ({ params }) => {
    const content = {}
    await loadDB().firestore()
        .collection('hair')
        .doc(params.id)
        .get()
        .then(result => {
            content['id'] = params.id;
            content['img'] = result.data().img;
            content['name'] = result.data().name;
            content['desc'] = result.data().desc;
            content['cat'] = result.data().cat;
            content['volume'] = result.data().volume;
        });

    return {
        props: JSON.parse(JSON.stringify(content))

    }
}
HairProducts.Layout = Layout
export default HairProducts