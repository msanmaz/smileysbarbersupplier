import React, { useEffect, useState } from "react";
import { loadDB } from '../config/firebase'
import firebase from 'firebase/app';
import Layout from '../layout/layout'
import Card from '../components/Card'
const initialValues = {
    brand: "",
    cat: "",
    desc: "",
    img: "",
    name: "",
    route: "",
    type: "",
    volume: ""
};



export default function admin() {
    const [values, setValues] = useState(initialValues);
    const [items, setItems] = useState([]);



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const onFileChange = async (e) => {
        const file = e.target.files[0]
        const storageRef = loadDB().storage().ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        values.img = await fileRef.getDownloadURL()
    }
    const onSubmit = (e) => {
        e.preventDefault()
        loadDB().firestore().collection('hair').add({
            name: values.name,
            brand: values.brand,
            cat: values.cat,
            desc: values.desc,
            route: values.route,
            type: values.type,
            volume: values.volume,
            img: values.img,
        })
    }
    useEffect(() => {
        const fetchItems = async () => {
            const collections = await loadDB().firestore().collection('hair').where('cat', '==', "Conditioner Spray").get()
            setItems(collections.docs.map(doc => {
                return doc.data()
            }))
        }
        fetchItems()
    }, [])

    return (
        <div className="flex">


            <div class="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
                <div class="container mx-auto my-28">
                    <div class="max-w-full mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                        <div class="text-center">
                            <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Add Product</h1>
                            <p class="text-gray-400 dark:text-gray-400">Fill up the form below to enter product</p>
                        </div>
                        <div class="m-7">
                            <form onSubmit={onSubmit} id="form">

                                <div class="mb-6">
                                    <label for="name" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Brand</label>
                                    <input onChange={handleInputChange}
                                        type="text" value={values.brand} name="brand" placeholder="Product Brand" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div class="mb-6">
                                    <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Name</label>
                                    <input type="text" value={values.name} onChange={handleInputChange} name="name" id="name" placeholder="Item Name" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div class="mb-6">

                                    <label for="phone" class="text-sm text-gray-600 dark:text-gray-400">Category</label>
                                    <input type="text" value={values.cat} onChange={handleInputChange} name="cat" placeholder="+1 (555) 1234-567" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div class="mb-6">

                                    <label for="phone" class="text-sm text-gray-600 dark:text-gray-400">Type</label>
                                    <input type="text" value={values.type} onChange={handleInputChange} name="type" id="type" placeholder="Product Type" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div class="mb-6">

                                    <label for="phone" class="text-sm text-gray-600 dark:text-gray-400">Volume</label>
                                    <input type="text" value={values.volume} onChange={handleInputChange} name="volume" id="vol" placeholder="Item Volume" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div class="mb-6">

                                    <label for="phone" class="text-sm text-gray-600 dark:text-gray-400">Route</label>
                                    <input type="text" value={values.route} onChange={handleInputChange} name="route" id="route" placeholder="Routing" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>

                                <div class="mb-6">

                                    <label for="phone" class="text-sm text-gray-600 dark:text-gray-400">Image</label>
                                    <input type="file" onChange={onFileChange} name="image" id="img" placeholder="Product Img" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div class="mb-6">
                                    <label for="message" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Description</label>

                                    <textarea rows="5" value={values.desc} onChange={handleInputChange} name="desc" id="desc" placeholder="Product Desc" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
                                </div>
                                <div class="mb-6">
                                    <button type="submit" class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Submit</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap w-full mt-44 min-h-screen">

                {items.map(item => {
                    return <Card gorsel={item.img} cat={item.cat} key={item.id} brand={item.brand} volume={item.volume} nam={item.name} />

                })}



            </div>


        </div>

    );
}

admin.Layout = Layout
