'use client'
import { FC, useEffect, useState } from 'react';
import Product from './Product';
import { Button } from "./button"
import authenticated_fetch from '../lib/utils'

interface Product {
  id: number;
  title: string;
  price: number;
}

interface ProductsProps {
  products: Product[];
}

const Products: FC<ProductsProps> = () => {

    const [products, setProducts] = useState([ {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    }])

    

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch("http://localhost:3000/products?limit=8");
          // const response = await authenticated_fetch("http://localhost:3000/products?limit=8");
          const data = await response.json();
          setProducts(data.products);
        };
        fetchData();
      }, []);

      const handleClick = async () => {
        const res = await fetch('http://localhost:3000/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: 'New Product',
            price: 100
          })
        });
        const data = await res.json();
        console.log(data);
      };

    

return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Products</h1>
        <Button onClick={handleClick} variant="secondary">Add New Product</Button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => {
            return <Product key={product.id} product={product} />
        }
            
        )}
      </div>
    </div>
  )
};

export default Products;
