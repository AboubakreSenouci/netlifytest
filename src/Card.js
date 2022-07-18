import './App.css';
import React from 'react';

export default function Card (props){
    return(
        <div className="shadow-2xl bg-white rounded">
          <div className="pl-14 pt-6 pr-52">
            <span className="text-4xl lg:text-5xl"> {props.peopel.length} birthdays today </span>
            <div>
                {props.peopel.map((peop) => (
                   <div className="pt-8 flex"> 
                    <img className=" rounded-full w-24 h-24"src={peop.image} alt="image"/>
                    <div className="flex flex-col p-5">
                        <span className="font-medium text-xl">{peop.name}</span>
                        <span className="text-gray pt-2 text-lg">{peop.age} years</span> 
                    </div>   
                   </div> 
                ))}
            </div>  
          </div>
          <botton className="flex justify-center bg-mainbg text-white p-4 rounded mx-4 my-8 text-2xl cursor-pointer" 
          onClick={() => props.setPeopel([])} > Clear   All</botton> 
        </div>
    )
}