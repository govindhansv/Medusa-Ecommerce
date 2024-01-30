// import { Button } from "@/components/ui/button"
import { Region } from "@medusajs/medusa"
import { Button } from "@medusajs/ui"
import ProductRail from "@modules/home/components/featured-products/product-rail"
import { ProductCollectionWithPreviews } from "types/global"

export default async function FeaturedProducts({
  collections,
  region,
}: {
  collections: ProductCollectionWithPreviews[]
  region: Region
}) {
  return collections.map((collection) => (
    <li key={collection.id}>
      <div className="flex justify-center">
        <div className="w-[1550px] lg:px-40 rounded-xl mx-auto p-8 bg-[#FFEFF1] ">
          <h1 className="text-center text-[#2C2C2C] text-3xl my-8">
            {/* American Diamond */}
            {collection.title}
          </h1>
          <div >
          {/* <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8  mb-4" > */}
            <ProductRail collection={collection} region={region} />
          </div>
          <div className="mt-8 flex justify-center">
          <Button className="font-Inter w-[158px] rounded-sm bg-[#CC4254] text-[#FFFFFF]">View more</Button>
        </div>
        </div>
      </div>
    </li>
  ))
}
