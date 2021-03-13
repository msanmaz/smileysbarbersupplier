import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
        <>
            <div className="relative dark:bg-navside pt-20 pb-32" style={{
                minHeight: "65vh"
            }}>
                                    <div className="absolute top-36 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: "url('/smiley2bg.svg')"
                        }}>
                        <div className="flex w-2/6 mt-20 mx-10 float-left">
                            <div className="flex w-full">
                            <h1 className="font-extrabold text-5xl">SMILEYS BARBER SUPPLIER</h1>

                            </div>
                        </div>


                <div className="relative top-52 md:top-0 w-full md:w-2/3 float-right">
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
                            <img src="/totexspray.png" />
                            </div>
                            <div className="mt-5">
                            <img src="/totexspray.png" />
                            </div>
                            <div className="mt-5">
                            <img src="/totexspray.png" />
                            </div>
                    </Carousel>
                    
                </div>
                        </div>





            </div>

        </>
    )
}