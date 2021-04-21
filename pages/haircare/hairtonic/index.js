import { React, useState,useEffect } from 'react'
import Button from '../../../components/Button'
import Layout from '../../../layout/layout'
import Link from 'next/link'
import Card from '../../../components/Card'
import { loadDB } from '../../../config/firebase'


export const HairCare = (props) => {


    const printButtonLabel = (event) => {
        setAim(event.target.name)
    };
    const [aim, setAim] = useState(`Hair Tonic`)
    const [loading, setLoading] = useState(true);
    const [products,setProducts]=useState()
    

    useEffect(() => {
        setTimeout(() => {
            if(aim){
                let firebase = loadDB();
                firebase.firestore()
                    .collection("hair")
                    .where('cat', '==', `${aim}`)
                    .onSnapshot(snap => {
                        const desc = snap.docs.map(doc => ({
                            id: doc.id,
                            ...doc.data()
                        }));
                        setProducts(desc);
                        setLoading(false)
                    });
            }

        }, 300)

    }, [aim]);




        return (
            <>

                <>

                    <div className="pt-36">
                        <div className="flex flex-wrap md:flex-nowrap  flex-1 min-w-full" data-aos-id-blocks>

                            <div className="md:w-1/4 w-full  flex items-stretch grid-1 max-h-44">
                                <div className="md:flex hidden  md:flex-wrap flex-1 p-4">


                                    <div className="w-full h-screen shadow-md bg-gray-300 rounded-lg">
                                        <h1 className="text-2xl font-italic px-12 py-4">Categories</h1>
                                    </div>

                                    <div className="w-full h-screen my-8 shadow-md bg-gray-300 rounded-lg">
                                        <h1 className="text-2xl font-italic px-12 py-4">Newsletter</h1>
                                        <h2 className="text-sm px-12">Get the latest updates, news and product offers via email</h2>
                                        <div className="px-12 py-4">
                                            <input className="rounded-lg" placeholder="Email"></input>
                                            <button className="py-2 px-4 my-2 bg-black text-white font-semibold rounded-lg shadow-md active:bg-gray-900 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75" >
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


                                    <div className="absolute md:top-55 top-80 w-full md:w-3/4 px-4 ">

                                        <div className="flex w-full" data-aos-id-blocks>

                                            <div className="px-1 space-x-2">
                                                <Button buttons={["All", "Hair Tonic", "Hair Spray", "Hair Oil", "Gum Gel", "Serum", "Conditioner", "Shampoo"]} doSomethingAfterClick={printButtonLabel} />
                                            </div>

                                        </div>
                                    </div>


                                    {!products || aim =='All'  ?
                                        <div className="flex flex-wrap mt-20">
                                            {props.plainData.map(product =>
                                                <Link href={`/haircare/${product.route}/${product.id}`} as={`/haircare/${product.route}/${product.id}`}>
                                                <div className="md:px-6 px-auto pr-6">
                                                        <Card gorsel={product.img} key={product.id} brand={product.brand} volume={product.volume} nam={product.name} />

                                                    </div>
                                                </Link>
                                            )}

                                        </div>
                                    
                                                :
                                    <div className="flex flex-wrap mt-20">
                                        {products.map(product =>
                                                <Link href={`/haircare/${product.route}/${product.id}`} as={`/haircare/${product.route}/${product.id}`}>
                                                <div className="md:px-6 px-auto pr-6">
                                                    <Card gorsel={product.img} key={product.id} brand={product.brand} volume={product.volume} nam={product.name} />

                                                </div>
                                            </Link>
                                        )}

                                    </div>
                                }








                                </div>

                            </div>






                        </div>
                    </div>





                </>





            </>
        )
    




}


export const getStaticProps = async () => {
    let result = await new Promise((resolve, reject) => {
        loadDB().firestore()
            .collection('hair')
            .get()
            .then(snapshot => {
                let data = []
                snapshot.forEach((doc) => {
                    data.push(
                        Object.assign({
                            id: doc.id,
                        }, doc.data())
                    )
                })
                resolve(data)
            })
            .catch(error => {
                reject([])
            })
    })
    const plainData = JSON.parse(JSON.stringify(result))
    return { props: { plainData } }
}


export default HairCare
HairCare.Layout = Layout;
