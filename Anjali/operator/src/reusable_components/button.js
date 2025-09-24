import React from "react";
import App from "../App";
function CustomButton({onclick,Label})
{
  return(
    <button
          onClick={onclick}
          className="px-4 py-4 font-bold bg-blue-500 text-white rounded-lg hover:bg-green-500 mt-4">
    
    {Label}

    </button>

  );
}
export default CustomButton;