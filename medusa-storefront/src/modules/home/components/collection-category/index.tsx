import React from "react";
// import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";

const CollectionCategory = () => {
  return (
    <div className="flex md:flex-col 2xl:flex-row w-full flex-col justify-center px-14  bg-white  m-0">
      <div className="flex flex-col items-start w-1/6">
        <h2 className="text-sm font-Inter uppercase tracking-wide text-black">
          Collection
        </h2>
        <h1 className="mt-4 text-[45px]  text-[#CC4254]">Multiple</h1>
        <h1 className="-mt-3 text-[45px]  text-[#CC4254]">Category</h1>
    
        <button
          aria-label="Next"
          className=" bg-[#ecb8bf] p-3 m-7  rounded-full shadow-lg  flex items-center justify-center"
          >
          <ArrowRightIcon className="text-[#C84253]  " />
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-12 ">
        <Card className="rounded-lg w-[170px] md:w-[233px] border border-[#e3a0a8] relative overflow-hidden  h-full  bg-cover  bg-no-repeat bg-top ">
          <CardContent className=" flex flex-col justify-around  h-full items-center " >
            <img
              alt="American Diamond"
              className="mx-auto"
              height="150"
              src={'https://raw.githubusercontent.com/sreenath256/Helah/master/src/assets/AmericanDiamond.png'}
              style={{
                aspectRatio: "150/150",
                objectFit: "contain",
              }}
              width="80%"
            />
            <div>

            <h3 className="mt-2 text-center text-xl font-medium">
              American
            </h3>
            <h3 className="text-center text-lg font-medium">
              Diamond
            </h3>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-lg w-[170px] md:w-[233px] border border-[#e3a0a8] relative overflow-hidden  h-full  bg-cover  bg-no-repeat bg-top ">
          <CardContent className=" flex flex-col justify-around  h-full items-center " >
            <img
              alt="Gold"
              className="mx-auto"
              height="150"
              src={'https://raw.githubusercontent.com/sreenath256/Helah/master/src/assets/Gold.png'}
              style={{
                aspectRatio: "150/150",
                objectFit: "contain",
              }}
              width="80%"
            />
            <div>

            <h3 className="mt-2 text-center text-xl font-medium">
              Gold
            </h3>
           
            </div>
          </CardContent>
        </Card>
        
        <Card className="rounded-lg w-[170px] md:w-[233px] border border-[#e3a0a8] relative overflow-hidden  h-full  bg-cover  bg-no-repeat bg-top ">
          <CardContent className=" flex flex-col justify-around h-full items-center " >
            <img
              alt="Silver"
              className="mx-auto"
              height="150"
              src={'https://raw.githubusercontent.com/sreenath256/Helah/master/src/assets/Silver.png'}
              style={{
                aspectRatio: "150/150",
                objectFit: "contain",
              }}
              width="80%"
            />
            <div>

            <h3 className="mt-2 text-center text-xl font-medium">
              Silver
            </h3>
            
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-lg w-[170px] md:w-[233px] border border-[#e3a0a8] relative overflow-hidden  h-full  bg-cover  bg-no-repeat bg-top ">
          <CardContent className=" flex flex-col justify-around  h-full items-center " >
            <img
              alt="Matte"
              className="mx-auto"
              height="150"
              src={'https://raw.githubusercontent.com/sreenath256/Helah/master/src/assets/Matte.png'}
              style={{
                aspectRatio: "150/150",
                objectFit: "contain",
              }}
              width="80%"
            />
            <div>

            <h3 className="mt-2 text-center text-xl font-medium">
              Matte
            </h3>
            
            </div>
          </CardContent>
        </Card>
       
        
      </div>
    </div>
  );
};

export default CollectionCategory;

function ArrowRightIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}