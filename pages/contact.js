import React from 'react'
import Layout from '../layout/layout'


const Contact = () => {
    return (
        <>
            <div className="max-w-full md:px-8 px-auto bg-gray-100 pt-40">
                <div className="flex flex-wrap">


                    <div className="md:w-2/5 w-full">
                        <div className="text-2xl text-black font-semibold">Help and Customer Service</div>
                    </div>





                    <div className="md:w-3/5 w-full">
                        <div class="min-h-screen px-4 p-0 sm:p-12">
                            <div class="mx-auto rounded-lg max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
                                <h1 class="text-2xl font-bold mb-8">Price Enquiry Form</h1>
                                <form id="form" novalidate>
                                    <div class="relative z-0 w-full mb-5">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder=" "
                                            required
                                            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                        />
                                        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter name</label>
                                        <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
                                    </div>

                                    <div class="relative z-0 w-full mb-5">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder=" "
                                            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                        />
                                        <label for="email" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter email address</label>
                                        <span class="text-sm text-red-600 hidden" id="error">Email address is required</span>
                                    </div>

                                    <div class="relative z-0 w-full mb-5">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder=" "
                                            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                        />
                                        <label for="password" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter Phone Number</label>
                                        <span class="text-sm text-red-600 hidden" id="error">Phone Number is required</span>
                                    </div>

                                    <div class="relative z-0 w-full mb-5">
                                        <input
                                            type="productname"
                                            name="product"
                                            placeholder=" "
                                            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                        />
                                        <label for="password" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter Product Name</label>
                                        <span class="text-sm text-red-600 hidden" id="error">Product Name is required</span>
                                    </div>

                                    <fieldset class="relative z-0 w-full p-px mb-5">
                                        <legend class="absolute text-gray-500 transform scale-75 -top-3 origin-0">Choose an option</legend>
                                        <div class="block pt-3 pb-2 space-x-4">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="radio"
                                                    value="1"
                                                    class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                                />
             Trade Application
          </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="radio"
                                                    value="2"
                                                    class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                                />
            Retail Buy
          </label>
                                        </div>
                                        <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                                    </fieldset>





                                    <div class="relative z-0 w-full mb-5">
                                        <input
                                            type="number"
                                            name="money"
                                            placeholder=" "
                                            class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                        />
                                        <div class="absolute top-0 left-0 mt-3 ml-1 text-gray-400">$</div>
                                        <label for="money" class="absolute duration-300 top-3 left-5 -z-1 origin-0 text-gray-500">Amount</label>
                                        <span class="text-sm text-red-600 hidden" id="error">Amount is required</span>
                                    </div>

                                    <div class="relative z-0 w-full mb-5">
                                        <input
                                            type="text"
                                            name="duration"
                                            placeholder=" "
                                            class="pt-3 pb-2 pr-12 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                        />
                                        <div class="absolute top-0 right-0 mt-3 mr-4 text-gray-400">Quantity</div>
                                        <label for="duration" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Pieces</label>
                                        <span class="text-sm text-red-600 hidden" id="error">Quantity is required</span>
                                    </div>

                                    <button
                                        id="button"
                                        type="button"
                                        class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
                                    >
                                        Toggle Error
      </button>
                                </form>
                            </div>
                        </div>
                    </div>


                </div>



            </div>

        </>
    )
}
Contact.Layout = Layout
export default Contact
