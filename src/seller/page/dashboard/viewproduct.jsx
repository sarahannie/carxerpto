import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDeleteProductMutation } from '../../../app/api/productApi';
import DashboardNavbar from "../../widgets/layout/dashboard-navbar";
import Sidenav from "../../widgets/layout/sidenav";
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";
import { toast } from 'react-toastify';

export function ViewProduct() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state;
  const [deleteProduct] = useDeleteProductMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = () => {
    navigate('/edit-product', { state: { product } });
  };

  const handleDelete = async () => {
    try {
      await deleteProduct(product.productTag).unwrap();
      toast.success('Product deleted successfully!');
      navigate('/dashboard/seller-product'); 
    } catch (error) {
      toast.error(`Failed to delete product: ${error.data ? error.data.error : error.message}`);
    }
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
      <DashboardNavbar />
      <div className="flex flex-row overflow-hidden">
        <div className="">
          <Sidenav />
        </div>
        <div className="mt-7 w-[90%] lg:ml-[20%] ml-[15px]">
          <div className="mb-6 flex justify-between mr-4">
            <div>
              <h3 className="text-3xl text-primary-normal pb-3 text-start">{product.name}</h3>
              <p className="flex gap-2 text-gray-400 pb-2">
                <h3 className="text-primary-normal">Category:</h3> {product.category}
              </p>
              <p className="flex gap-2 text-gray-400">
                <h3 className="text-primary-normal">Details:</h3> {product.shortDescription}
              </p>
              <p className="flex gap-2 text-gray-400">
                <h3 className="text-primary-normal">Full Details:</h3> {product.longDescription}
              </p>
            </div>
            <div className="flex gap-4 align-center">
              <div>
                <button
                  className="flex items-center gap-2 bg-secondary-normal text-white px-4 py-2 round-md"
                  onClick={handleEdit}
                >
                  Edit Product
                </button>
              </div>
              <div>
                <button
                  className="flex items-center gap-2 bg-red-500 text-white px-3 py-2 round-md"
                  onClick={openModal}
                >
                  Delete Product
                </button>
              </div>
            </div>
          </div>
          <div className="mb-6 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4 mr-3">
            {product.images.map((image, index) => (
              <div className="" key={index}>
                <img src={image} className="object-contain w-[200px] h-[180px] rounded-md shadow-lg" alt={product.name} />
              </div>
            ))}
            <div className="border border-primary-normal pt-4 pb-1 px-3 rounded-md shadow-lg">
              <div className="flex justify-between py-3 align-center text-primary-normal">
                <div className="text-start">
                  <h3 className="text-gray-400">Cost Price</h3>
                  <p className="text-black-900 text-xl">${product.costPrice}</p>
                </div>
                <div className="text-start">
                  <h3 className="text-gray-400">Selling Price</h3>
                  <p className="text-black-900 text-xl">${product.sellingPrice}</p>
                </div>
              </div>
              <div className="mb-6 flex justify-between mt-5 text-primary-normal">
                <div className="text-start">
                  <h3 className="text-gray-400">Color</h3>
                  <p className="text-black-900 text-xl">{product.color}</p>
                </div>
                <div className="text-start">
                  <h3 className="text-gray-400">In Stock</h3>
                  <p className="text-black-900 text-xl">{product.quantity}</p>
                </div>
              </div>
            </div>
            <div className="border border-primary-normal pt-4 pb-1 px-3 rounded-md shadow-lg">
              <div className="flex justify-between py-3 align-center text-primary-normal">
                <div className="text-start">
                  <h3 className="text-gray-400">Condition</h3>
                  <p className="text-black-900 text-xl">{product.condition}</p>
                </div>
                <div className="text-start">
                  <h3 className="text-gray-400">Make</h3>
                  <p className="text-black-900 text-xl">{product.make}</p>
                </div>
              </div>
              <div className="mb-6 flex justify-between mt-5 text-primary-normal">
                <div className="text-start">
                  <h3 className="text-gray-400">Model</h3>
                  <p className="text-black-900 text-xl">{product.model}</p>
                </div>
              </div>
            </div>
            <div className="border border-primary-normal pt-4 pb-1 px-3 rounded-md shadow-lg">
              <div className="flex justify-between py-3 align-center text-primary-normal">
                <div className="text-start">
                  <h3 className="text-gray-400">Year</h3>
                  <p className="text-black-900 text-xl">{product.year}</p>
                </div>
                <div className="text-start">
                  <h3 className="text-gray-400">Mileage</h3>
                  <p className="text-black-900 text-xl">{product.milleage}</p>
                </div>
              </div>
              <div className="mb-6 flex justify-between mt-5 text-primary-normal">
                <div className="text-start">
                  <h3 className="text-gray-400">Discount Type</h3>
                  <p className="text-black-900 text-xl">{product.discountType}</p>
                </div>
                <div className="text-start">
                  <h3 className="text-gray-400">Discount Value</h3>
                  <p className="text-black-900 text-xl">{product.discountValue}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={isModalOpen} handler={closeModal}>
        <DialogHeader>Confirm Deletion</DialogHeader>
        <DialogBody divider>
          Are you sure you want to delete this product?
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="blue-gray" onClick={closeModal} className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="red" onClick={handleDelete}>
            <span>Delete</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default ViewProduct;
