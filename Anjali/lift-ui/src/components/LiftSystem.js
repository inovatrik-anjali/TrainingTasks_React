import React, { useState, useEffect, useRef } from "react";
import LiftImage from "../images/Lift.png";
import FloorButton from "./FloorButton"; 

export default function LiftSystem() {
   const totalFloors = 5;
  const [currentFloor, setCurrentFloor] = useState(1);
  const [targetFloor, setTargetFloor] = useState(null);
  const [direction, setDirection] = useState("Idle");
  const intervalRef = useRef(null);

  const goToFloor = (floor) => {
    if (floor !== currentFloor) {
    setTargetFloor(floor);
   }
  };

  useEffect(() => {
    if (!targetFloor) return;

    intervalRef.current = setInterval(() => {
      setCurrentFloor((prev) => {
        if (prev < targetFloor) 
          {
          setDirection("Upward");
          return prev + 1;
        } 
        else if (prev > targetFloor) 
          {
          setDirection("Downward");
          return prev - 1;
        } 
        else
        {
          setDirection("Idle");
          clearInterval(intervalRef.current);
          setTargetFloor(null);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [targetFloor]);
    return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-6 gap-16">
      
     
      <div className="bg-blue-300 rounded-xl shadow-lg p-6 w-64">
        <h2 className="text-xl font-bold text-center mb-4">LIFT</h2>

        <div className="flex flex-col-reverse border  rounded-lg">
         
          
             {[...Array(totalFloors)].map((_, i) => {
            const floor = i + 1; 
            return( 
            

              <div
                key={floor}
                className="h-20 flex items-center justify-center border border-dotted relative"
              >
                <span className="absolute left-4 text-sm font-bold">
                  Floor {floor}
                </span>
                {currentFloor === floor && (
                  <img
                    src={LiftImage}
                    alt="upload Lift image"
                    className="h-14 w-auto animate-bounce"
                  />
                )}
              </div>
            );
            
          }
          )}
          
        
          
        </div>

        <div className="mt-4 text-center">
          <p className="font-semibold">Current Floor: {currentFloor}</p>
          <p className="font-semibold">Direction: {direction}</p>
        </div>
      </div>

   
      <div className="bg-white rounded-xl shadow-lg p-6 w-64">
        <h2 className="text-lg font-bold text-center mb-4"> Controls</h2>
        <div className="grid grid-cols-3 gap-2">

          {[...Array(totalFloors)].map((_, i) => {
            const floor = i + 1;
            return ( 
              <FloorButton key={floor} floor={floor} onClickbtn={goToFloor} />
             );
          })} 
        </div>
      </div>
    </div>
  );
}
