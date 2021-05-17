import React from "react";
import Popper from "popper.js";
import Link from 'next/link';

const Dropdown = (props) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  const handleClick = (event) => {
    console.log(event.target.name);
  };

    return (
      <>
        <div className="flex flex-wrap w-min">
          <div className="md:px-4">
            <div className="relative inline-flex align-middle">
              <button
                className={
                  "hover:text-green-500 font-semibold text-black flex uppercase  text-xs md:text-xs md:px-3 py-3 rounded  outline-none focus:outline-none mb-1 "
                }
                style={{ transition: "all .15s ease" }}
                type="button"
                ref={btnDropdownRef}
                onMouseEnter={() => {
                    openDropdownPopover();
                }}
                onMouseLeave={() => {
                  closeDropdownPopover();
              }}
              >
                  {props.category}
  
              </button>
              <div
                ref={popoverDropdownRef}
                className={
                  (dropdownPopoverShow ? "block " : "hidden ") +
                  
                  "text-base float-left list-none text-left rounded shadow-lg bg-white"
                }
                style={{ minWidth: "12rem" }}
                onMouseMove={() => {
                  openDropdownPopover();
              }}
              onMouseLeave={() => {
                closeDropdownPopover();
            }}
              >
    
    <Link
                  href={`/${props.url}/${props.cat1url}`} as={`/${props.url}/${props.cat1url}`}

                  onClick={e => e.preventDefault()}
                >
                  <div className="hover:text-green-500 cursor-pointer md:text-sm text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 animate1 hover:shadow-lg">
                  {props.cat1}
                  </div>
                </Link>


                <Link
                  href={`/${props.url}/${props.cat2url}`} as={`/${props.url}/${props.cat2url}`}

                  onClick={e => e.preventDefault()}
                >
                  <div className="hover:text-green-500 cursor-pointer md:text-sm text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 animate1 hover:shadow-lg">
                  {props.cat2}
                  </div>
                </Link>




                <Link
                  href={`/${props.url}/${props.cat3url}`} as={`/${props.url}/${props.cat3url}`}

                  onClick={e => e.preventDefault()}
                >
                  <div className="hover:text-green-500 cursor-pointer md:text-sm text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 animate1 hover:shadow-lg">
                  {props.cat3}
                  </div>
                </Link>
                <Link
                  href={`/${props.url}/${props.cat4url}`} as={`/${props.url}/${props.cat4url}`}
                  className={
                    "md:text-sm text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:shadow-lg animate1  text-gray-800" 
                  }
                  onClick={e => e.preventDefault()}
                >
              <div className="hover:text-green-500 cursor-pointer md:text-sm text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 animate1 hover:shadow-lg">
                  {props.cat4}
                  </div>
                </Link>
                <Link
                  href={`/${props.url}/${props.cat5url}`} as={`/${props.url}/${props.cat5url}`}
                  className={
                    "md:text-sm text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:shadow-lg animate1  text-gray-800" 
                  }
                  onClick={e => e.preventDefault()}
                >
              <div className="hover:text-green-500 cursor-pointer md:text-sm text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 animate1 hover:shadow-lg">
                  {props.cat5}
                  </div>
                </Link>
                <Link
                  href={`/${props.url}/${props.cat6url}`} as={`/${props.url}/${props.cat6url}`}
                  className={
                    "md:text-sm text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:shadow-lg animate1  text-gray-800" 
                  }
                  onClick={e => e.preventDefault()}
                >
              <div className="hover:text-green-500 cursor-pointer md:text-sm text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 animate1 hover:shadow-lg">
                  {props.cat6}
                  </div>
                </Link>
                
                <Link
                  href={`/${props.url}/${props.cat7url}`} as={`/${props.url}/${props.cat7url}`}

                  onClick={e => e.preventDefault()}
                >
                  <div className="hover:text-green-500 cursor-pointer md:text-sm text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 animate1 hover:shadow-lg">
                  {props.cat7}
                  </div>
                </Link>


                <Link
                  href={`/${props.url}/${props.cat8url}`} as={`/${props.url}/${props.cat8url}`}

                  onClick={e => e.preventDefault()}
                >
                  <div className="hover:text-green-500 cursor-pointer md:text-sm text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 animate1 hover:shadow-lg">
                  {props.cat8}
                  </div>
                </Link>


                <Link
                  href={`/${props.url}`} as={`/${props.url}`}

                  onClick={e => e.preventDefault()}
                >
                  <div className="hover:text-green-500 cursor-pointer md:text-sm text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 animate1 hover:shadow-lg">
                  {props.cat9}
                  </div>
                </Link>

   

              </div>
            </div>
          </div>
        </div>
      </>
    );
  
  

  
};



export default Dropdown;