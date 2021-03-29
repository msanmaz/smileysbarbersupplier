import React, { useState } from "react";
import Link from 'next/link'
export const ButtonGroup = ({ buttons,doSomethingAfterClick }) => {
    const [clickedId, setClickedId] = useState(-1);

    const handleClick = (event, id) => {
      setClickedId(id);
      doSomethingAfterClick(event);
    };
      return (
    <>
      {buttons.map((buttonLabel, i) => (
        <p
          key={i}
          name={buttonLabel}
          onClick={() => setClickedId(i)}
          className={i === clickedId ? "md:text-sm text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 animate1 hover:shadow-lg " : "md:text-sm text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-black text-white animate1 hover:shadow-lg"}
        >
          {buttonLabel}
        </p>
      ))}
    </>
  );
};

export default ButtonGroup