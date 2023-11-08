import { Button } from "./button"

export default function Product({product}) {
  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
    <img
      alt="Product Image"
      className="w-full h-48 object-cover mb-4 rounded"
      height="200"
      src={product?.thumbnail}
      style={{
        aspectRatio: "200/200",
        objectFit: "cover",
      }}
      width="200"
    />
    <h2 className="text-lg font-medium mb-2">{product?.title}</h2>
    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">{product?.description}</p>
    <div className="flex justify-between items-center">
      <span className="text-lg font-semibold">{product?.price}</span>
      <Button variant="outline">Edit</Button>
    </div>
  </div>
  )
}
