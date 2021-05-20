import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import Rating from './Rating'
import Image from 'next/image'

const Product = (props) => {
    return (
        <>

                        <div class="w-full">
                            <div class="c-card block cursor-pointer bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                <div class="relative overflow-hidden">
                                    <Image width={400} height={400} src={props.image} alt="Picture Of Product" />
                                </div>
                                <div class="p-4">
                                    <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">{props.brand}</span>
                                    <h2 class="mt-2 mb-2 ff font-bold">{props.name.substring(0,30)}</h2>
                                    <p class="text-sm">{props.description.substring(0,50)}</p>
                                    <div class="mt-3 flex items-center">
                                        <span class="text-sm font-semibold"></span>&nbsp;<span class="font-semibold text-xl">€</span>&nbsp;<span class="text-sm font-semibold">--,--</span>
                                    </div>
                                </div>
                                <div class="p-4 border-t border-b text-xs text-gray-700">
                                    <span class="flex items-center mb-1">
                                    <FontAwesomeIcon icon={faClock} className="text-gray-900 mr-2 w-4 h-4" /> In Stock {props.stock}
          </span>
                                    <span class="flex items-center">
                                    <FontAwesomeIcon icon={faCreditCard} className="text-gray-900 mr-2 w-4 h-4" /> Trade Only
          </span>
                                </div>
                                <div class="p-4 items-center text-sm text-gray-600">
                                    <Rating value={props.rating}
                                    text={`${props.numReviews} Reviews`}
                                    />
                                    </div>
                            </div>
                        </div>


              
        </>
    )
}

export default Product
