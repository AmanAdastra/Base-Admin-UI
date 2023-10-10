import React from "react";
import SalesGraph from "./SalesGraph";

const GraphCards = () => {
  return (
    <>
      <div className="flex-1 h-[150px] bg-gradient-to-r from-[#664dc9] to-[#664dcb99] m-2 p-[1.5rem]">
        <div className=" h-full flex">
          <div className=" h-full w-[50%]">
            <h6 className=" text-white">Total Sales</h6>
            <h2 className="text-[1.75rem] font-bold  text-white">3,257</h2>
          </div>
          <div className=" h-full w-[50%] ">
            <SalesGraph />
          </div>
        </div>
      </div>
      <div className="flex-1 h-[150px] bg-gradient-to-r from-[#1d976c] to-[#2fd38a] m-2 p-[1.5rem]">
        <div className=" h-full flex">
          <div className=" h-full w-[50%]">
            <h6 className=" text-white">Total Sales</h6>
            <h2 className="text-[1.75rem] font-bold  text-white">1,678</h2>
          </div>{" "}
          <div className=" h-full w-[50%]"></div>
        </div>
      </div>
      <div className="flex-1 h-[150px] bg-gradient-to-r from-[#fa5420] to-[#f6a800] m-2 p-[1.5rem]">
        <div className=" h-full flex">
          <div className=" h-full w-[50%]">
            <h6 className=" text-white">Total Sales</h6>
            <h2 className="text-[1.75rem] font-bold  text-white">$2,590</h2>
          </div>{" "}
          <div className=" h-full w-[50%]"></div>
        </div>
      </div>
      <div className="flex-1 h-[150px] bg-gradient-to-r from-[#5b73e8] to-[#44c4fa] m-2 p-[1.5rem]">
        <div className=" h-full flex">
          <div className=" h-full w-[50%]">
            <h6 className=" text-white">Total Tax</h6>
            <h2 className="text-[1.75rem] font-bold  text-white">$1,954</h2>
          </div>{" "}
          <div className=" h-full w-[50%]"></div>
        </div>
      </div>
    </>
  );
};

export default GraphCards;
