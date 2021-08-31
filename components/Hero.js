import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link'


export default function Hero() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
            <div className="relative pt-20 pb-20 bghero bgcontainer rounded-3xl md:rounded-none">
                <div className="absolute w-full h-full bg-center bg-cover"
             >



<div className="relative md:top-16 w-full top-12 md:w-2/3 float-right">
                        <Carousel
                            additionalTransfrom={0}
                            showDots={false}
                            arrows={true}
                            autoPlaySpeed={3000}
                            autoPlay={true}
                            centerMode={false}
                            className="slider"
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="dots"
                            draggable
                            focusOnSelect={false}
                            infinite
                            itemClass="carousel-item-padding-40-px"
                            keyBoardControl
                            minimumTouchDrag={80}
                            renderButtonGroupOutside={false}
                            renderDotsOutside
                            responsive={responsive}
                            slidesToSlide={3}
                        >

    
                            <div className="mt-5">
                                <img src="/matte_finish_pomade-removebg-preview.png" width={300} height={300} />
                            </div>
                            <div className="mt-5">
                                <img src="/aqua_wax_4_-removebg-preview.png" width={300} height={300} />
                            </div>

                            <div className="mt-5">
                                <img src="/aqua_wax_5-removebg-preview.png" width={300} height={300} />
                            </div>

                            <div className="mt-5">
                                <img src="/aqua_wax_6__2-removebg-preview.png" width={300} height={300} />
                            </div>
                            <div className="mt-5">
                                <img src="/aqua_wax_7_-removebg-preview.png" width={300} height={300} />
                            </div>
                            <div className="mt-5">
                                <img src="/aqua_wax_8_-removebg-preview.png" width={300} height={300} />
                            </div>
                            <div className="mt-5">
                                <img src="/aqua_wax_fiber_-removebg-preview.png" width={300} height={300} />
                            </div>
                            <div className="mt-5">
                                <img src="/classic_pomade-removebg-preview (1).png" width={300} height={300} />
                            </div>
                            <div className="mt-5">
                                <img src="/matte_wax-removebg-preview.png" width={800} height={300} />
                            </div>
                            <div className="-mt-4">
                                <img src="/Volcano350-removebg-preview.png" width={300} height={300} />
                            </div>
                            <div className="-mt-4">
                                <img src="/waterfall350-removebg-preview.png" width={300} height={300} />
                            </div>
                            <div className="mt-12">
                                <img src="/350ml_cologne_Çalışma_Yüzeyi_1-removebg-preview.png" width={300} height={300} />
                            </div>
                            <div className="-mt-6">
                                <img src="/keratin_hair_conditioner-removebg-preview.png" width={300} height={300} />
                            </div>
                            <div className="-mt-6">
                                <img src="/milky_hair_conditioner-removebg-preview.png" width={300} height={300} />
                            </div>
                            <div className="-mt-6">
                                <img src="/herbal_hair_conditioner-removebg-preview.png" width={300} height={300} />
                            </div>
                            <div className="-mt-6">
                                <img src="/extreme-removebg-preview.png" width={300} height={300} />
                            </div>
                            <div className="-mt-6">
                                <img src="/fresh_black-removebg-preview.png" width={300} height={300} />
                            </div>
                            <div className="-mt-6">
                                <img src="/menınvısıble-removebg-preview.png" width={300} height={300} />
                            </div>


                            <div className="mt-5">
                                <img src="/BandidoBeardShampoo250ml_1400x-removebg-preview.png" width={300} height={300} />
                            </div>
                            <div className="mt-5">
                                <img src="/beard_oil2-removebg-preview (1).png" width={600} height={300} />
                            </div>
                            <div className="-mt-6">
                                <img src="/hair_tonıc-removebg-preview.png" width={300} height={300} />
                            </div>
                        </Carousel>

                    </div>

                    <div className="flex w-full md:w-2/6 md:mt-32 px-8  md:mx-10 float-left">
                        <div className="flex w-full flex-col align-center">
                            <h1 className="font-extrabold headings text-2xl md:text-4xl dark:text-white text-black">SMILEYS <span className="bg-clip-text text-white">BARBER</span>  SUPPLIES</h1>
                            <p className="font-medium font-sans text-lg md:text-2xl dark:text-white text-white"> Made by Barbers, Made to work</p>
                            <p className="font-medium font-sans text-sm md:text-xl dark:text-white text-black">For professional barber and personal care products</p>
            <Link href="products">
            <button className="py-2 md:px-4 px-0 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75">
                                Discover Our Collections
</button>      
            </Link>

                        </div>
                    </div>



                    
                </div>




                <div
                        className="hidden top-auto bottom-0 left-0 right-0 w-full md:block md:absolute pointer-events-none overflow-hidden"
                        style={{ transform: "translateZ(0)" }}
                    >
                        <svg
                            className="fill-current text-white  md:block relative top-12 md:top-36"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                        >
                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
                                    <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                                    <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                                    <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
                                </g>
                                <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fillRule="nonzero">
                                    <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                                </g>
                            </g>
                        </svg>
                    </div>
            </div>

    )
}