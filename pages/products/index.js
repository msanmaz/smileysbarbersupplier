import { React, useState } from 'react'
import Button from '../../components/Button'
import Layout from '../../layout/layout'
import Select from 'react-select/'
import Link from 'next/link'
import { loadDB } from '../../config/firebase'
import Card from '../../components/Card'

const roomOption = [
    { value: 'Hepsi', label: 'Hepsi' },
    { value: '1 Oda', label: '1 Oda' },
    { value: '2 Oda', label: '2 Oda' },
    { value: '3 Oda', label: '3 Oda' },
    { value: '4 Oda', label: '4 Oda' },
    { value: '5 Oda', label: '5 Oda' },
]
const locationOption = [
    { value: 'Villa', label: 'Villa' },
    { value: 'Apartman', label: 'Apartman' },
    { value: 'Yazlik', label: 'Yazlik' },
    { value: 'Ticari', label: 'Ticari' },
    { value: 'Yali', label: 'Yali' },
]


export const Products = (props) => {
    const [rooms, setRooms] = useState('');
    const customStyles = {

        control: (base, state) => ({
            ...base,
            background: "#2c2c2c",
            // match with the menu
            borderRadius: state.isFocused ? "2px 2px 0 0" : 5,
            // Overwrittes the different states of border
            borderColor: state.isFocused ? "#2c2c2c" : "#2c2c2c",
            // Removes weird border around container
            boxShadow: state.isFocused ? null : null,
            "&:hover": {
                // Overwrittes the different states of border
                borderColor: state.isFocused ? "#2c2c2c" : "#2c2c2c"
            }
        }),
        menu: base => ({
            ...base,
            // override border radius to match the box
            borderRadius: 0,
            textcolor: 'white',
            // kill the gap
            marginTop: 0
        }),
        menuList: base => ({
            ...base,
            // kill the white space on first and last option
            padding: 0
        })

    };
    return (
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

                                    <div className="w-full px-2 my-2">
                                        <Select instanceId="room" onChange={setRooms} styles={customStyles} options={roomOption} placeholder="Categories" />
                                    </div>

                                </div>
                            </div>



                            <div className="flex flex-wrap mt-16">
                                {props.plainData.map(product =>
                                    <Link href="/products/[id]" as={'/products/' + product.id}>
                                        <div className="md:px-6 px-auto pr-6">
                                        <Card gorsel={product.img} key={product.id} brand={product.brand} volume={product.volume} nam={product.name} />

                                        </div>
                                    </Link>
                                )}

                            </div>




                        </div>

                    </div>






                </div>
            </div>





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
    const plainData = JSON.parse(JSON.stringify(result))
    return { props: { plainData } }
}
Products.Layout = Layout;
export default Products

