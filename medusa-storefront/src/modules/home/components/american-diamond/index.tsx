import { Button } from "@medusajs/ui";
import React from "react";
// import { Button } from "@/components/ui/button";

const AmericanDiamond = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1550px] lg:px-40 rounded-xl mx-auto p-8 bg-[#FFEFF1] ">
        <h1 className="text-center text-[#2C2C2C] text-3xl my-8">
          American Diamond
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8  mb-4">
          <div className="flex flex-col max-w-[264px] justify-around items-center border border-[#CC4254]  bg-[#FFEFF1] rounded-lg md:h-[380px]">
            <div className="w-full h-[90%] flex justify-center items-center bg-white m-0 border-b rounded-lg border-b-[#CC4254]">
              <img
                alt="Necklace"
                className="mb-2"
                height="150"
                src={"https://raw.githubusercontent.com/sreenath256/Helah/master/src/assets/necklace1.png"}
                style={{
                  aspectRatio: "150/150",
                  objectFit: "contain",
                }}
                width="80%"
              />
            </div>
            <span>Necklace</span>
          </div>
          <div className="flex flex-col max-w-[264px] justify-around items-center border border-[#CC4254]  bg-[#FFEFF1] rounded-lg md:h-[380px]">
            <div className="w-full h-[90%] flex justify-center items-center bg-white m-0 border-b rounded-lg border-b-[#CC4254]">
              <img
                alt="Necklace"
                className="mb-2"
                height="150"
                src={"https://raw.githubusercontent.com/sreenath256/Helah/master/src/assets/earring1.png"}
                style={{
                  aspectRatio: "150/150",
                  objectFit: "contain",
                }}
                width="80%"
              />
            </div>
            <span>Necklace</span>
          </div>
          <div className="flex flex-col max-w-[264px] justify-around items-center border border-[#CC4254]  bg-[#FFEFF1] rounded-lg md:h-[380px]">
            <div className="w-full h-[90%] flex justify-center items-center bg-white m-0 border-b rounded-lg border-b-[#CC4254]">
              <img
                alt="Ring1"
                className="mb-2"
                height="150"
                src={"https://raw.githubusercontent.com/sreenath256/Helah/master/src/assets/ring1.png"}
                style={{
                  aspectRatio: "150/150",
                  objectFit: "contain",
                }}
                width="80%"
              />
            </div>
            <span>Necklace</span>
          </div>
          <div className="flex flex-col max-w-[264px] justify-around items-center border border-[#CC4254]  bg-[#FFEFF1] rounded-lg md:h-[380px]">
            <div className="w-full h-[90%] flex justify-center items-center bg-white m-0 border-b rounded-lg border-b-[#CC4254]">
              <img
                alt="Necklace"
                className="mb-2"
                height="150"
                src={"https://raw.githubusercontent.com/sreenath256/Helah/master/src/assets/bracelets1.png"}
                style={{
                  aspectRatio: "150/150",
                  objectFit: "cover",
                }}
                width="80%"
              />
            </div>
            <span>Necklace</span>
          </div>
   
        <div className="flex flex-col max-w-[264px] justify-around items-center border border-[#CC4254]  bg-[#FFEFF1] rounded-lg md:h-[380px]">
          <div className="w-full h-[90%] flex justify-center items-center bg-white m-0 border-b rounded-lg border-b-[#CC4254]">
            <img
              alt="Necklace"
              className="mb-2"
              height="150"
              src={"https://raw.githubusercontent.com/sreenath256/Helah/master/src/assets/ring2.png"}
              style={{
                aspectRatio: "150/150",
                objectFit: "contain",
              }}
              width="80%"
            />
          </div>
          <span>Necklace</span>
        </div>
        <div className="flex flex-col max-w-[264px] justify-around items-center border border-[#CC4254]  bg-[#FFEFF1] rounded-lg md:h-[380px]">
          <div className="w-full h-[90%] flex justify-center items-center bg-white m-0 border-b rounded-lg border-b-[#CC4254]">
            <img
              alt="AndletsGold"
              className="mb-2"
              height="150"
              src={"https://raw.githubusercontent.com/sreenath256/Helah/master/src/assets/ankletsgold1.png"}
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="80%"
            />
          </div>
          <span>Necklace</span>
        </div>
        <div className="flex flex-col max-w-[264px] justify-around items-center border border-[#CC4254]  bg-[#FFEFF1] rounded-lg md:h-[380px]">
          <div className="w-full h-[90%] flex justify-center items-center bg-white m-0 border-b rounded-lg border-b-[#CC4254]">
            <img
              alt="Necklaceset"
              className="mb-2"
              height="150"
              src={"https://raw.githubusercontent.com/sreenath256/Helah/master/src/assets/necklaceset1.png"}
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="80%"
            />
          </div>
          <span>Necklace</span>
        </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Button className="font-Inter w-[158px] rounded-sm bg-[#CC4254] text-[#FFFFFF]">View more</Button>
        </div>
      </div>
    </div>
  );
};

export default AmericanDiamond;