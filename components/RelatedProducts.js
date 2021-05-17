const RelatedProducts = (props) => {
return(
<>

<div class="max-w-md w-full lg:flex">
                            <div class="h-36 lg:h-36 lg:w-32 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${props.image})` }} title="Woman holding a mug">
                            </div>
                            <div class="md:w-56 border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div class="mb-8">
                                    <div class="text-black font-bold text-xl mb-2">{props.name}</div>
                                </div>
                                <div class="flex items-center">
                                    <div class="text-sm">
                                        <p class="text-black leading-none">{props.brand}</p>
                                        <p class="text-grey-dark">{props.cat}</p>
                                    </div>
                                </div>
                            </div>
                        </div>


</>

)
}


export default RelatedProducts