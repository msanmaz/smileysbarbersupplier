import React from "react";
import Popper from "popper.js";

const Dropdown = ( props ) => {
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

  if(props.cat7){
    return (
      <>
        <div className="flex flex-wrap w-min">
          <div className="md:px-4">
            <div className="relative inline-flex align-middle">
              <button
                className={
                  "text-black flex font-semibold uppercase  text-xs md:text-sm md:px-3 py-3 rounded  outline-none focus:outline-none mb-1 "
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
                              <img src="/down-chevron.svg" className="md:h-4 md:w-4 w-2 h-2 ml-0.5 fill-current text-black"/>
  
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
                <a
                  href="#pablo"
                  className={
                    "md:text-sm text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 animate1 hover:shadow-lg " 
                    
                  }
                  onClick={e => e.preventDefault()}
                >
                  {props.cat1}
                </a>
                <a
                  href="#pablo"
                  className={
                    "md:text-sm text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 animate1 hover:shadow-lg" 
                  }
                  onClick={e => e.preventDefault()}
                >
                  {props.cat2}
                </a>
                <a
                  href="#pablo"
                  className={
                    "md:text-sm text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:shadow-lg animate1 text-gray-800 " 
                  }
                  onClick={e => e.preventDefault()}
                >
                  {props.cat3}
                </a>
                <a
                  href="#pablo"
                  className={
                    "md:text-sm text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:shadow-lg animate1 text-gray-800" 
                  }
                  onClick={e => e.preventDefault()}
                >
                  {props.cat4}
                </a>
                <a
                  href="#pablo"
                  className={
                    "md:text-sm text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:shadow-lg animate1 text-gray-800" 
                  }
                  onClick={e => e.preventDefault()}
                >
                  {props.cat5}
                </a>
                <a
                  href="#pablo"
                  className={
                    "md:text-sm text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:shadow-lg animate1  text-gray-800" 
                  }
                  onClick={e => e.preventDefault()}
                >
                  {props.cat6}
                </a>
                
                <a
                  href="#pablo"
                  className={
                    "md:text-sm text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:shadow-lg animate1 text-gray-800" 
                  }
                  onClick={e => e.preventDefault()}
                >
                  {props.cat7}
                </a>
  
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  else{
    return (
      <>
        <div className="flex flex-wrap w-min">
          <div className="px-4">
            <div className="relative inline-flex align-middle">
              <button
                className={
                  "text-black flex font-semibold uppercase text-xs md:text-sm px-6 py-3 rounded  outline-none focus:outline-none mb-1 "
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
                              <img src="/down-chevron.svg" className="md:h-4 md:w-4 h-2 w-4 ml-0.5 fill-current text-black"/>
  
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
                <a
                  href="#pablo"
                  className={
                    "md:text-sm text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 animate1 hover:shadow-lg " 
                    
                  }
                  onClick={e => e.preventDefault()}
                >
                  {props.cat1}
                </a>
                <a
                  href="#pablo"
                  className={
                    "md:text-sm text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 animate1 hover:shadow-lg" 
                  }
                  onClick={e => e.preventDefault()}
                >
                  {props.cat2}
                </a>
                <a
                  href="#pablo"
                  className={
                    "md:text-sm text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:shadow-lg animate1 text-gray-800 " 
                  }
                  onClick={e => e.preventDefault()}
                >
                  {props.cat3}
                </a>
                <a
                  href="#pablo"
                  className={
                    "md:text-sm text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:shadow-lg animate1 text-gray-800" 
                  }
                  onClick={e => e.preventDefault()}
                >
                  {props.cat4}
                </a>
                <a
                  href="#pablo"
                  className={
                    "text-xs md:text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:shadow-lg animate1 text-gray-800" 
                  }
                  onClick={e => e.preventDefault()}
                >
                  {props.cat5}
                </a>
                <a
                  href="#pablo"
                  className={
                    "text-xs md:text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:shadow-lg animate1  text-gray-800" 
                  }
                  onClick={e => e.preventDefault()}
                >
                  {props.cat6}
                </a>
                

              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  
};



export default Dropdown;