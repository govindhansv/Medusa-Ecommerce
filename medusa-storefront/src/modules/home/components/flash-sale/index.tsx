import React from "react"

const FlashSaleBanner = () => {
    return (
        <div className="w-full h-32 bg-[#FFEFF1]">
          <div className="flex overflow-hidden py-2 w-full h-full items-center text-left">
            <img src={'https://raw.githubusercontent.com/sreenath256/Helah/master/src/assets/DiamondVector.png'} alt="" />
            <span className="text-[#CC4254] text-6xl m-4 ">FLASH SALE UP TO 20% OFF</span>
            <img src={'https://raw.githubusercontent.com/sreenath256/Helah/master/src/assets/DiamondVector.png'} alt="" />
          </div>
        </div>
      )
    
}

export default FlashSaleBanner

