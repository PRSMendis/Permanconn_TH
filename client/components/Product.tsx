import { Button } from "./button"

export default function Component() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Products</h1>
        <Button variant="secondary">Add New Product</Button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
          <img
            alt="Product Image"
            className="w-full h-48 object-cover mb-4 rounded"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <h2 className="text-lg font-medium mb-2">Product Name</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Product Description</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">$99.99</span>
            <Button variant="outline">Edit</Button>
          </div>
        </div>
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
          <img
            alt="Product Image"
            className="w-full h-48 object-cover mb-4 rounded"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <h2 className="text-lg font-medium mb-2">Product Name</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Product Description</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">$99.99</span>
            <Button variant="outline">Edit</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
