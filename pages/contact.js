import React from 'react'
import Layout from '../layout/layout'


const Contact = () => {
    return (
        <>
            <div className="max-w-full md:px-8 px-auto bg-gray-100 pt-40">
                <div className="flex flex-wrap">


                    <div className="md:w-3/5 w-full">
                        <div className="px-4 p-0 ">
                            <div className="mx-auto rounded-lg max-w-2xl px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
                                <h1 className="text-2xl font-bold mb-8">Price Enquiry Form</h1>
                                <form id="form" novalidate>
                                    <div className="relative z-0 w-full mb-5">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder=" "
                                            required
                                            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                        />
                                        <label for="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter name</label>
                                        <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
                                    </div>

                                    <div className="relative z-0 w-full mb-5">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder=" "
                                            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                        />
                                        <label for="email" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter email address</label>
                                        <span class="text-sm text-red-600 hidden" id="error">Email address is required</span>
                                    </div>

                                    <div className="relative z-0 w-full mb-5">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder=" "
                                            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                        />
                                        <label for="password" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter Phone Number</label>
                                        <span className="text-sm text-red-600 hidden" id="error">Phone Number is required</span>
                                    </div>

                                    <div className="relative z-0 w-full mb-5">
                                        <input
                                            type="productname"
                                            name="product"
                                            placeholder=" "
                                            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                        />
                                        <label for="password" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter Product Name</label>
                                        <span className="text-sm text-red-600 hidden" id="error">Product Name is required</span>
                                    </div>

                                    <fieldset className="relative z-0 w-full p-px mb-5">
                                        <legend className="absolute text-gray-500 transform scale-75 -top-3 origin-0">Choose an option</legend>
                                        <div className="block pt-3 pb-2 space-x-4">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="radio"
                                                    value="1"
                                                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                                />
             Trade Application
          </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="radio"
                                                    value="2"
                                                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                                />
            Retail Buy
          </label>
                                        </div>
                                        <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                                    </fieldset>






                                    <div className="relative z-0 w-full mb-5">
                                        <input
                                            type="text"
                                            name="duration"
                                            placeholder=" "
                                            className="pt-3 pb-2 pr-12 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                        />
                                        <label for="duration" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Pieces</label>
                                        <span className="text-sm text-red-600 hidden" id="error">Quantity is required</span>
                                    </div>

                                    <button
                                        id="button"
                                        type="button"
                                        className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-black hover:bg-gray-600 hover:shadow-lg focus:outline-none"
                                    >
                                        Send Request
      </button>
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center my-12">
                        <div className="text-5xl text-black font-bold px-4 py-4">For Our Price information and sales please contact us via e-mail or phone</div>
                        <div className="text-base text-black font-bold px-4">We supply the highest quality products at the lowest prices from all around the world, which allows us to source directly from the manufacturer to keep prices to you as low as possible.</div>

                        </div>


                    </div>


                    <div className="md:w-2/5 w-full px-4 py-12">
                        <div className="text-2xl text-black font-semibold py-4">Help and Customer Service</div>
                        <div className="text-xl text-black font-normal">Become a retailer</div>
                        <div className="text-base text-black font-light">To apply for a business account, please register by filling in the registration form. Once we have your business information, we will review and respond as quickly as possible.</div>
                        <div className="text-2xl text-black font-bold py-4">General Terms</div>
                        <div className="text-base text-black font-light">In these General Terms and Conditions the following terms shall have the following meanings, except where stated otherwise:
                        General Terms and Conditions: these general terms and conditions.
                        Day: calendar day.
                        Smiley Barber Supplier: the company Smiley Barber Supplier, located at 118 Sundrive Rd. Kimmage, Dublin and registered with the Trade Register of the Ireland Chamber of Commerce under number 60281065. VAT identification number IE002245803B27.
                        Customer: every legal person or individual, acting in the conduct of a business or profession, who would like to enter into a contract with Smiley Barber Suppliers
                        Website: name of the website of Smiley Barber Supplier, being www.smileybarbersupplier.com.</div>
                        <div className="text-2xl text-black font-bold py-4">Offers And Proposal</div>
                        <div className="text-base text-black font-light">1. All offers/proposals qualify as a non-committal offer and/or proposal and can always be revoked, also in case it includes a term for acceptance. Proposals/offers can also be revoked in writing within seven days after receipt by Smiley Barber Supplier, in which case no agreement will be concluded.
2. Offers/proposals can only be accepted in writing (including an acceptance by telefax or those made through electronic means). However, Smiley Barber Supplier is entitled to accept an oral acceptance as if this would have been done in writing. In case the customer places an order on the website of Smiley Barber Supplier, this order is final in case the customer clicks on the order button or receives a confirmation of his order by e-mail. Once the customer of Smiley Barber Suppliers receives a confirmation by e-mail, a binding agreement between parties is established.
3. Information that is included in advertising material in the broadest sense of the word, such as catalogues, pricing lists, brochures and websites of third parties, shall never be binding for Smiley Barber Supplier
4. Except for written agreements stating explicitly otherwise, specifications of size, weight and other information are estimates, as accurate and reliable as possible.</div>
                    </div>








                </div>




            </div>

        </>
    )
}
Contact.Layout = Layout
export default Contact
