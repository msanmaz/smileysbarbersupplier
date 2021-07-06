

export default function Card(props) {
    return(
        <>
<div className="md:px-2 md:mx-auto ml-7 mb-3">
  <div className="md:w-72 w-36 m-auto ">
      <div
    className="grid grid-cols-3 grid-rows-7 grid-flow-row overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
  >
    <div className="col-span-3 row-span-4 p-1 m-1 bg-gray-100">
      <a href="#">
        <img
          src={props.gorsel}
          alt="Placeholder"
          className="rounded-t-xl object-cover h-full w-full shadow-sm"
        />
      </a>
    </div>

    <div className="col-span-3 row-span-1">
      <div className="flex align-bottom flex-col leading-none p-2 md:p-4">
        <div className="flex flex-row justify-between items-center">
          <a
            className="flex items-center no-underline hover:underline text-black"
            href="#"
          >

            <span className="ml-2 text-sm"> {props.brand} </span>
          </a>
        </div>
      </div>
    </div>

    <div className="col-span-3 row-span-1">
      <header
        className="flex items-center justify-between leading-tight p-2 md:p-4"
      >
        <h1 className="text-lg animate1">
          <a className=" text-black font-sans md:text-2xl text-lg" href="#">
          {props.nam}
          </a>
        </h1>
        <p className="text-grey-darker text-sm">{props.volume}</p>
      </header>
    </div>

    <div className="col-span-3 row-span-1">
     <div className="flex flex-col float-right px-4 ">
         <p className="font-semibold font-mono">Category</p>
         <div className="ml-10">{props.cat}</div>
     </div>
    </div>

  </div>
</div>
</div>


        </>
    )}



