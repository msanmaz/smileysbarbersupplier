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

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "text-black flex font-semibold uppercase text-sm px-6 py-3 rounded  outline-none focus:outline-none mb-1 "
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
                            <img src="/down-chevron.svg" className="h-4 w-4 ml-0.5 fill-current text-black"/>

            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                
                "text-base z-50 float-left list-none text-left rounded shadow-lg bg-white"
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
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 animate1 hover:shadow-lg " 
                  
                }
                onClick={e => e.preventDefault()}
              >
                {props.cat1}
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 animate1 hover:shadow-lg" 
                }
                onClick={e => e.preventDefault()}
              >
                {props.cat2}
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:shadow-lg animate1 text-gray-800 " 
                }
                onClick={e => e.preventDefault()}
              >
                {props.cat3}
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:shadow-lg animate1 text-gray-800" 
                }
                onClick={e => e.preventDefault()}
              >
                {props.cat4}
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:shadow-lg animate1 text-gray-800" 
                }
                onClick={e => e.preventDefault()}
              >
                {props.cat5}
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:shadow-lg animate1  text-gray-800" 
                }
                onClick={e => e.preventDefault()}
              >
                {props.cat6}
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:shadow-lg animate1 text-gray-800" 
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
};



export default Dropdown;