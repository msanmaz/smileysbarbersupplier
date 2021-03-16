

export default function Card(){
    return(
        <>
<div class="md:px-2 md:mx-auto ml-7 mb-3">
  <div class="md:w-72 w-36 m-auto ">
      <div
    class="grid grid-cols-3 grid-rows-7 grid-flow-row overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
  >
    <div class="col-span-3 row-span-4 p-1 m-1 bg-gray-100">
      <a href="#">
        <img
          src="/totexspray.png"
          alt="Placeholder"
          class="rounded-t-xl object-cover h-full w-full shadow-sm"
        />
      </a>
    </div>

    <div class="col-span-3 row-span-1">
      <div class="flex align-bottom flex-col leading-none p-2 md:p-4">
        <div class="flex flex-row justify-between items-center">
          <a
            class="flex items-center no-underline hover:underline text-black"
            href="#"
          >

            <span class="ml-2 text-sm"> Totex </span>
          </a>
        </div>
      </div>
    </div>

    <div class="col-span-3 row-span-1">
      <header
        class="flex items-center justify-between leading-tight p-2 md:p-4"
      >
        <h1 class="text-lg animate1">
          <a class=" text-black font-sans text-2xl" href="#">
          Hair Gel
          </a>
        </h1>
        <p class="text-grey-darker text-sm">110g</p>
      </header>
    </div>

    <div class="col-span-3 row-span-1">
     <div class="px-4 my-2">€ --,--</div>
     <div className="flex flex-wrap float-right px-4 ">
         <p className="font-semibold font-mono">Category</p>
     </div>
    </div>

  </div>
</div>
</div>


        </>
    )}