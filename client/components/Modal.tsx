
import React, { useState } from 'react';
import {Button} from './Button';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
}

interface ModalProps {
  product: Product;
  onSave: (product: Product) => void;
  onCancel: () => void;
}

const Modal: React.FC<ModalProps> = ({ product, onSave, onCancel }) => {
const [title, setTitle] = useState(product?.title || '');
const [description, setDescription] = useState(product?.description || '');
const [price, setPrice] = useState(product?.price || 0);
const [discountPercentage, setDiscountPercentage] = useState(product?.discountPercentage || 0);
const [rating, setRating] = useState(product?.rating || 0);
const [stock, setStock] = useState(product?.stock || 0);
const [brand, setBrand] = useState(product?.brand || '');
const [category, setCategory] = useState(product?.category || '');

const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = product?.id ? product.id : 101;
    const updatedProduct = {
        id,
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
    };
    onSave(updatedProduct);
};

  return (
    <div>
      <h2>Edit Product</h2>
      <form>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
        </label>
        <br />
        <label>
          Discount Percentage:
          <input type="number" value={discountPercentage} onChange={(e) => setDiscountPercentage(Number(e.target.value))} />
        </label>
        <br />
        <label>
          Rating:
          <input type="number" value={rating} onChange={(e) => setRating(Number(e.target.value))} />
        </label>
        <br />
        <label>
          Stock:
          <input type="number" value={stock} onChange={(e) => setStock(Number(e.target.value))} />
        </label>
        <br />
        <label>
          Brand:
          <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
        </label>
        <br />
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
        <br />
        <Button variant="outline" onClick={(e) => handleSave(e)}>Save</Button>
        <Button variant="outline" onClick={onCancel}>Cancel</Button>
      </form>
    </div>
  );
};

export default Modal;
