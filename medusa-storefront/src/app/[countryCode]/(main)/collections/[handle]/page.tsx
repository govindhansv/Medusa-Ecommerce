import { Metadata } from "next"
import { notFound } from "next/navigation"

import {
  getCollectionByHandle,
  getCollectionsList,
  listRegions,
} from "@lib/data"
import CollectionTemplate from "@modules/collections/templates"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

type Props = {
  params: { handle: string; countryCode: string }
  searchParams: {
    page?: string
    sortBy?: SortOptions
  }
}
// import ProductCard from "@/Components/Cards/ProductCard"
// import CategoryRadioButton from "@/Components/CategoryRadioButton/CategoryRadioButton"
import React from "react"
import { ProductCollection } from "@medusajs/product"

export const PRODUCT_LIMIT = 12

export async function generateStaticParams() {
  const { collections } = await getCollectionsList().then(
    (collections) => collections
  )

  if (!collections) {
    return []
  }

  const countryCodes = await listRegions().then((regions) =>
    regions?.map((r) => r.countries.map((c) => c.iso_2)).flat()
  )

  const collectionHandles = collections.map((collection) => collection.handle)

  const staticParams = countryCodes
    ?.map((countryCode) =>
      collectionHandles.map((handle) => ({
        countryCode,
        handle,
      }))
    )
    .flat()

  return staticParams
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const collection = await getCollectionByHandle(params.handle)

  if (!collection) {
    notFound()
  }

  const metadata = {
    title: `${collection.title} | Helah Store`,
    description: `${collection.title} collection`,
  } as Metadata

  return metadata
}

export default async function CollectionPage({ params, searchParams }: Props) {
  const { sortBy, page } = searchParams

  const collection = await getCollectionByHandle(params.handle).then(
    (collection) => collection
  )

  if (!collection) {
    notFound()
  }

  return (
    // <Collection collection={collection} />
    // <CollectionTemplate
    //   collection={collection}
    //   page={page}
    //   sortBy={sortBy}
    //   countryCode={params.countryCode}
    // />
    <Collection
      // collection={collection}
      page={page}
      sortBy={sortBy}
      countryCode={params.countryCode}
    />
  )
}

const Collection = ({
  sortBy,
  // collection,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  // collection: ProductCollection
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1

  return (
    <div className="flex flex-col md:flex-row min-h-screen mt-10">
      <aside className="w-full hidden md:block md:w-60 bg-white ml-6 p-2 overflow-y-auto py-6">
        <h2 className="text-lg font-Inter">Rings collection</h2>
        {/* <h2 className="text-lg font-Inter">{collection.title}</h2> */}
        <div className="mt-4 space-y-2">
          <CategoryRadioButton />
          <CategoryRadioButton />
          <CategoryRadioButton />
          <CategoryRadioButton />
          <CategoryRadioButton />
          <CategoryRadioButton />
        </div>
        <hr className="my-4 border-[#757575]" />
        <h2 className="text-lg font-Inter pt-6">Category</h2>
        <div className="mt-4 space-y-2">
          <CategoryRadioButton />
          <CategoryRadioButton />
          <CategoryRadioButton />
          <CategoryRadioButton />
          <CategoryRadioButton />
          <CategoryRadioButton />
          <CategoryRadioButton />
          <CategoryRadioButton />
          <CategoryRadioButton />
          <CategoryRadioButton />
          <CategoryRadioButton />
          <CategoryRadioButton />
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <div className="p-5">
          <h1 className="text-3xl text-[40px] text-[#2C2C2C] ">Collections</h1>
          <div className=" grid  md:grid-cols-2 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </main>
    </div>
  )
}

// export default Collection

const ProductCard = () => {
  return (
    <div className="max-w-[300px] text-center relative  ">
      <span className="absolute top-24 font-Inter left-2 bg-[#CC4254] px-2 py-1 text-xs text-[#FFFFFF] rounded-[5px]">
        Sale
      </span>
      <div className="mt-20 flex  mb-4 h-[375px] w-full rounded-[10px] border-[1px] border-[#CC4254]  bg-red-100" />
      <h3 className="text-[22px] ">Necklace</h3>
      <div className="flex justify-evenly items-center mt-3 font-Inter">
        <p className="text-sm line-through">₹3999.00</p>
        <p className="text-lg ">₹1999.00</p>
      </div>
    </div>
  )
}

// export default ProductCard;

// import React from "react";
interface CategoryRadioButtonProps {
  buttonName?: string
}

const CategoryRadioButton: React.FC<CategoryRadioButtonProps> = ({
  buttonName,
}) => {
  return (
    <div className="font-Inter my-3">
      <input
        id={buttonName}
        name="collection"
        className="accent-[#C84253] border-2 bg-[#C84253]"
        type="radio"
      />
      <label className="text-[16px] ml-2 text-[#2C2C2C]" htmlFor={buttonName}>
        {buttonName ? buttonName : "American Diamond"}
      </label>
    </div>
  )
}

// export default CategoryRadioButton;
