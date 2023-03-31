import { useState } from "react";

function Button(props) {
  return (
    <button
      type='submit'
      {...props}
      className={`w-[50%] p-2 mt-5 font-bold ${props.kelas}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
