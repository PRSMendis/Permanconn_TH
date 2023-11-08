import { Button } from "./button"
import { useState } from "react";
import Modal from "./Modal";

export default function Product({product}) {
  const [showModal, setShowModal] = useState(false);

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const onSave = (editedProduct) => {
    fetch('/products', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedProduct)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setShowModal(false);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <>
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
          <Button variant="outline" onClick={handleEditClick}>Edit</Button>
        </div>
      </div>
      {showModal && (<Modal product={product} onCancel={handleModalClose} onSave={onSave} />)}
    </>
  )
}
