import { loadDB } from '../../../../config/firebase'
import Layout from '../../../../layout/layout'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Product from '../../../../components/Product'
const BandidoProd = (props) => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        let firebase = loadDB();
        firebase.firestore()
            .collection("hair")
            .onSnapshot(snap => {
                const desc = snap.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProducts(desc);
                setLoading(false)
            });


    }, []);




    return (
        <div className="md:px-8 px-auto w-full">
<div class="bg-white">
  <div class="pt-24">
    <nav aria-label="Breadcrumb">
      <ol role="list" class="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
        <li>
          <div class="flex items-center">
            <a href="/" class="mr-2 text-sm font-medium text-gray-900">
              Home
            </a>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-5 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>

        <li>
          <div class="flex items-center">
          <Link href={`/brands/${props.brand}`} as={`/brands/${props.brand}`}><li class="text-blue font-bold cursor-pointer">{props.cat}</li></Link>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-5 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>

        <li class="text-sm">
          <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">
           {props.name}
          </a>
        </li>
      </ol>
    </nav>

    <div class="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
    <div class="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4 pt-8">
        <img src={props.img} alt="Model wearing plain white basic tee." class="w-full h-2/3 object-center object-cover"/>
      </div>
     
      <div class=" aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
      <div class="mt-4 lg:mt-0 lg:row-span-3">
        <h2 class="sr-only">Product information</h2>
        <div class="mt-6">
          <h3 class="sr-only">Reviews</h3>
          <div class="flex items-center">
            <div class="flex items-center">

              <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg class="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p class="sr-only">4 out of 5 stars</p>
            <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
          </div>
        </div>

        <form class="mt-10">
          <div class="mt-10">
            <div class="flex items-center justify-between">
              <h3 class="text-sm text-gray-900 font-medium">Type</h3>
              <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Type guide</a>
            </div>

            <fieldset class="mt-4">
              <legend class="sr-only">
                Choose a type
              </legend>
              <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">

                <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                  <input type="radio" name="size-choice" value="XS" class="sr-only" aria-labelledby="size-choice-1-label"/>
                  <p id="size-choice-1-label">
                    Matte
                  </p>


                  <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                </label>

                <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                  <input type="radio" name="size-choice" value="S" class="sr-only" aria-labelledby="size-choice-2-label"/>
                  <p id="size-choice-2-label">
                    Normal
                  </p>

                  <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                </label>
              </div>
            </fieldset>
          </div>

          <button type="submit" class="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Price Inquiry</button>
        </form>
        <div class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-1 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
      <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
         {props.name}
        </h1>
      </div>



      <div class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <div>
          <h3 class="sr-only">Description</h3>

          <div class="space-y-6">
            <p class="text-base text-gray-900">{props.desc}</p>
          </div>
        </div>

        {/* <div class="mt-10">
          <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

          <div class="mt-4">
            <ul role="list" class="pl-4 list-disc text-sm space-y-2">
              <li class="text-gray-400"><span class="text-gray-600">Hand cut and sewn locally</span></li>

              <li class="text-gray-400"><span class="text-gray-600">Dyed with our proprietary colors</span></li>

              <li class="text-gray-400"><span class="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>

              <li class="text-gray-400"><span class="text-gray-600">Ultra-soft 100% cotton</span></li>
            </ul>
          </div>
        </div> */}

        {/* <div class="mt-10">
          <h2 class="text-sm font-medium text-gray-900">Details</h2>

          <div class="mt-4 space-y-6">
            <p class="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>
          </div>
        </div> */}
      </div>
    </div>
      </div>
      </div>


    </div>


  </div>
</div>





                <div className="flex flex-wrap w-full">
                    <div className="font-semibold flex justify-center text-3xl h-10 w-full">
                        Related Products
                    </div>
                </div>
                    {loading ? "Loading Component Will be gone in 2 sec" :
                        <div className="flex flex-wrap md:px-4">
                            {products.slice(1,7).map(product =>
                                <Link href="/products/[id]" as={'/products/' + product.id}>
                                    <div className="w-1/2 md:w-1/7 py-4 px-4">
                                        <Product brand={product.brand} numReviews={2} rating={5} id={product.id} image={product.img} name={product.name} description={product.desc} />

                                    </div>

                                </Link>
                            )}

                        </div>
                    }



                

        </div>
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
            content['route'] = result.data().route;
            content['brand'] = result.data().brand;
            content['type'] = result.data().type;
            content['desc'] = result.data().desc;
            content['cat'] = result.data().cat;
            content['volume'] = result.data().volume;
        });

    return {
        props: JSON.parse(JSON.stringify(content))

    }
}
BandidoProd.Layout = Layout
export default BandidoProd