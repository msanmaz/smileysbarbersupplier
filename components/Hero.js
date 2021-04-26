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
            <div className="relative pt-20 pb-32" style={{
                minHeight: "75vh"
            }}>
                <div className="absolute w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage: "url('/smiley2bg.svg')"
                    }}>



<div className="relative md:top-32 w-full top-20 md:w-2/3 float-right">
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
                        >
                            <div className="mt-5">
                                <img src="/totexgum.png" />
                            </div>
                            <div className="mt-5">
                                <img src="/shampoo.png" />
                            </div>
                            <div className="mt-5">
                                <img src="/totexspray.png" />
                            </div>
                            <div className="mt-5">
                                <img src="/absolutebeardoil.png" />
                            </div>
                            <div className="mt-5">
                                <img src="/nobgwahl2.png" />
                            </div>
                        </Carousel>

                    </div>

                    <div className="flex w-full md:w-2/6 md:mt-44 mt-32 px-8 md:mx-10 float-left">
                        <div className="flex w-full flex-col align-center">
                            <h1 className="font-extrabold font-sans text-2xl md:text-7xl dark:text-white text-black">SMILEYS <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-blue-500">BARBER</span>  SUPPLIER</h1>
                            <p className="font-medium font-sans text-lg md:text-2xl dark:text-white text-black"> Made by Barbers, Made to work</p>
                            <p className="font-medium font-sans text-sm md:text-xl dark:text-white text-black">For professional barber and personal care products</p>
            <Link href="products">
            <button className="py-2 md:px-4 px-0 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                                Discover Our Collection
</button>      
            </Link>

                        </div>
                    </div>



                    
                </div>





            </div>

    )
}