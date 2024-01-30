import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
// import { Button } from "@/components/ui/button"


const Hero = () => {
  return (

    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#FFECEF]" >
    <div className="flex flex-col   justify-center md:items-center p-8 bg-[#FFECEF]  text-[#CC4254]">
      <div className='w-1/2 '>

      <h1 className="text-4xl">Adorn 
      </h1>

      <h1 className='text-7xl'>yourself</h1> 
      <h1 className='text-4xl'>with our</h1> 
      <h1 className='text-7xl'>Classics</h1>
      <Button className="bg-[#CC4254] text-white font-Inter mt-3 ">Shop Collection</Button>
      </div>
    </div>
    <div className="pt-4 bg-no-repeat bg-bottom  flex items-end" style={{backgroundSize:'100%'}}>
      <div className="flex items-end bg-bottom relative right-9 bg-no-repeat w-full h-full" style={{backgroundSize:'81%'}}>

      <img
        alt="Fashion model"
        className="object-contain w-full h-full"
        height="100"
        src={'https://raw.githubusercontent.com/sreenath256/Helah/master/src/assets/helahomeimg1.png'}
        style={{
            aspectRatio: "100/100",
            objectFit: "contain",
            objectPosition:'bottom'
          }}
          width="100"
          />
          </div>
    </div>
  </div>


  )
}

export default Hero
