'use client'
import { FC, useEffect, useState } from 'react';
import Product from './Product';

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
          const response = await fetch("http://localhost:3000/products");
          const data = await response.json();
          console.log(data.products);
          setProducts(data.products);
        };
        fetchData();
      }, []);


  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    <Product></Product>

    </div>
  );
};

export default Products;
