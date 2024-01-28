import { Metadata } from "next"

// import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      {props.children}
      <div className="mt-16 px-5">
        <Footer />
      </div>
    </>
  )
}



const Footer = () => {
  return (
      <footer className="bg-gray-100 rounded-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <img
                alt="Logo"
                className="h-16 w-16"
                height="64"
                src={'https://raw.githubusercontent.com/sreenath256/Helah/master/src/assets/Group12.png'}
                style={{
                  aspectRatio: "64/64",
                  objectFit: "contain",
                }}
                width="64"
              />
              <h2 className="mt-2 text-[35px] text-[#2C2C2C]">Here your imitate collection</h2>
            </div>
            <div>
              <h3 className="text-[22px] text-[#2C2C2C] font-semibold mb-4">Quick links</h3>
              <ul className="space-y-2">
                <li>
                  <a className="text-[#777777] font-Inter hover:text-gray-800" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-[#777777] font-Inter hover:text-gray-800" href="#">
                    Collections
                  </a>
                </li>
                <li>
                  <a className="text-[#777777] font-Inter hover:text-gray-800" href="#">
                    About us
                  </a>
                </li>
                <li>
                  <a className="text-[#777777] font-Inter hover:text-gray-800" href="#">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div className='border-r border-r-[#777777]'>
              <h3 className="text-[22px] text-[#2C2C2C] font-semibold mb-4">Quick links</h3>
              <ul className="space-y-2">
                <li>
                  <a className="text-[#777777] font-Inter hover:text-gray-800" href="#">
                    Customer support
                  </a>
                </li>
                <li>
                  <a className="text-[#777777] font-Inter hover:text-gray-800" href="#">
                    Terms & conditions
                  </a>
                </li>
                <li>
                  <a className="text-[#777777] font-Inter hover:text-gray-800" href="#">
                    Exchange
                  </a>
                </li>
                <li>
                  <a className="text-[#777777] font-Inter hover:text-gray-800" href="#">
                    Shipping & delivery
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[30px] text-[#2C2C2C] mb-4">Get in touch</h3>
              <p className="mb-4 text-[#777777] font-Inter">Get up to 20% discount on your first order!</p>
              <form className="flex">
                <input
                  className="px-4 py-2 focus:outline-none rounded-full "
                  placeholder="Enter your email"
                  type="email"
                />
                <button className="px-4 py-2 bg-gray-800 text-white rounded-r-md hover:bg-gray-700" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    )
}
