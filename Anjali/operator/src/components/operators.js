import React from "react";
import { useState } from "react";
import CustomButton from "../reusable_components/button";

export default function OperatorDemo()
{
  const [output,setOutput]=useState("");
  const a=10,b=5;

  const ArithemeticOperator = () =>{
    
    setOutput(
      `Arithermatic Operators:
        
      ${a}+${b}=${a+b}
      ${a}-${b}=${a-b}
      ${a}*${b}=${a*b}
      ${a}%${b}=${a%b}
      ${a}/${b}=${a/b}
      `
    );
  };
    const ComparisonOpertor = () =>{
      setOutput(
      `Comparison operators:
      ${a} > ${b} = ${a > b}
      ${a} < ${b} = ${a < b}
      ${a} >= ${b} = ${a >= b}
      ${a} <= ${b} = ${a <= b}
      ${a} == ${b} = ${a == b}
      ${a} === ${b} = ${a === b}
      ${a} != ${b} = ${a != b}
      ${a} !== ${b} = ${a !== b}` 

    );
  };
  const logicalOperators = () =>{
    const x=true,y=false;

    setOutput(
      `logical operators:
      when x=true and y= false

      ${x} || ${y}=${x||y}
      ${x} && ${y}=${x||y}
      !${x} = ${!x}
      !${y} = ${!y}`
    )

  };

  const TernaryOperaror = () =>{
    const isLoggedIn=true;
    setOutput(
      `Ternary operator:

      
      ${isLoggedIn ? "You are logged in " : "you are logout"}`
    )
  };

  const spreadoperator = () =>{
    const arr1=[1,2,3];
    const arr2=[4,5,7];
    const arr=[...arr1,...arr2]
    setOutput(
      `
       spreadoperator demo code:
        Array 1= ${arr1},
        Array 2=${arr2}
        combined=${arr}
      `
    )

  };
  
  
  return(
    <div className="flex flex-col items-center p-4">
      <h2 className="font-bold text-xl mb-4">Operator Demo</h2>

      <div className="flex gap-2 mb-4">
        <CustomButton Label="Arithmetic" onclick={ArithemeticOperator} />
        <CustomButton Label="Comparison" onclick={ComparisonOpertor} />
        <CustomButton Label="Logical operator" onclick={logicalOperators}/>
        <CustomButton Label="Tenary Operator" onclick={TernaryOperaror}/>
        <CustomButton Label="spread Operator" onclick={spreadoperator}/>
      </div>

      
      <pre className="bg-gray-100 p-4 rounded w-80 whitespace-pre-wrap">
        {output || "Click a button to see results"}
      </pre>
    </div>
  );
}
