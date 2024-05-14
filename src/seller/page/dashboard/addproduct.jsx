import React, { useState, useEffect } from 'react';
import DashboardNavbar from '../../widgets/layout/dashboard-navbar';
import Sidenav from '../../widgets/layout/sidenav';
import { Input, Textarea } from '@material-tailwind/react';
import axios from 'axios';
import { toast } from 'react-toastify';

export function Addproduct() {
  const [productData, setProductData] = useState({
    productName: '',
    category: '',
    shortDescription: '',
    longDescription: '',
    sellingPrice: '',
    costPrice: '',
    make: '',
    model: '',
    year: '',
    mileage: '',
    quantityInStock: '',
    hasDiscount: false,
    discountType: '',
    color: '',
    condition: '',    
  });



  const [carImages, setCarImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setCarImages(files);
  };

  

  //   const handleSaveProduct = async () => {
  //     try {
  //       const response = await axios.post('https://api-v1.carxperto.com/cars', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'multipart/form-data' },
  //         body: JSON.stringify(productData)
  //       });

  //       await toast.promise(response, {
  //         loading: 'Saving...',
  //         success: 'Profile saved!',
  //         error: 'Error',
  //       });

  //       console.log('Product saved successfully:', response.data);

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }

  //       // Handle success (e.g., show a success message)
  //     } catch (error) {
  //       console.error('Error saving product:', error);
  //       // Handle error (e.g., show an error message)
  //     }
  //   };

  const handleSaveProduct = async () => {
    try {
    
        const formData = new FormData();
        formData.append('productName', productData.productName);
        formData.append('shortDescription', productData.shortDescription);
        formData.append('longDescription', productData.longDescription);
        formData.append('sellingPrice', productData.sellingPrice);
        formData.append('costPrice', productData.costPrice);
        formData.append('make', productData.make);
        formData.append('model', productData.model);
        formData.append('year', productData.year);
        formData.append('mileage', productData.mileage);
        formData.append('quantityInStock', productData.quantityInStock);
        formData.append('hasDiscount', productData.hasDiscount);
        formData.append('discountType', productData.discountType);
        
  
        // Append image files
        carImages.forEach((file, index) => {
          formData.append(`image${index}`, file);
        });

      const response = await axios.post('https://api-v1.carxperto.com/cars', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    
      await toast.promise(response, {
        loading: 'Saving...',
        success: 'Profile saved!',
        error: 'Error'
      });

      console.log('Product saved successfully:', response);
    } catch (error) {
      console.error('Error saving:', error);
      // Handle error (e.g., show an error message) product
    }
  };

  return (
    <div className=''>
      <DashboardNavbar />
      <div className='flex flex-row  overflow-hidden'>
        <div className=''>
          <Sidenav />
        </div>
        <div className=' mt-7 w-[90%] lg:ml-[20%] ml-[15px]'>
          <form>
            <div className=' mb-6  flex justify-between mr-4'>
              <div>
                <h3 className='text-xl text-primary-normal pb-3 text-start'>Add new list</h3>
              </div>
              <div className='flex gap-4 align-center'>
                <div>
                  <button className='flex items-center gap-2 bg-green-900 text-white px-4 py-2 round-md'>
                    {/* <IoMdAdd className="h-5 w-5" /> */}
                    Save as Draft
                  </button>
                </div>
                <div>
                  <button
                    className='flex items-center gap-2 bg-primary-normal text-white px-3 py-2 round-md '
                    onClick={handleSaveProduct}
                  >
                    {/* <IoMdAdd className="h-5 w-5" /> */}
                    Save & Publish
                  </button>
                </div>
              </div>
            </div>
            <div class='flex gap-4'>
              <div class='w-[60%] p-6 border mb-7 shadow-lg rounded-lg'>
                <div className='w-full mb-4'>
                  <label for='name' className='block text-primary-normal text-start pb-3'>
                    Product Name:
                  </label>
                  <Input
                    type='text'
                    label='Enter Product Name'
                    className='w-full'
                    value={productData.productName}
                    onChange={(e) =>
                      setProductData({ ...productData, productName: e.target.value })
                    }
                  />
                </div>
                <div className='w-full mb-4'>
                  <label for='name' className='block text-primary-normal text-start pb-3'>
                    Category:
                  </label>
                  <Input
                    type='text'
                    label='Enter Product Category'
                    className='w-full'
                    value={productData.productName}
                    onChange={(e) =>
                      setProductData({ ...productData, category: e.target.value })
                    }
                  />
                </div>
                <div className='w-full mb-4'>
                  <label for='name' className='block text-primary-normal text-start pb-3'>
                    Short description:
                  </label>
                  <Input
                    type='text'
                    label='Please enter details'
                    className='w-full'
                    value={productData.shortDescription}
                    onChange={(e) =>
                      setProductData({ ...productData, shortDescription: e.target.value })
                    }
                  />
                </div>
                <div className='w-full mb-4'>
                  <label for='name' className='block text-primary-normal text-start pb-3'>
                    Long description:
                  </label>
                  <Textarea
                    type='text'
                    label='Please enter full details'
                    value={productData.longDescription}
                    onChange={(e) =>
                      setProductData({ ...productData, longDescription: e.target.value })
                    }
                  />
                </div>
                <div className='flex gap-4 mb-4'>
                  <div className='w-full mb-4'>
                    <label for='name' className='block text-primary-normal text-start pb-3'>
                      Selling Price:
                    </label>
                    <Input
                      type='text'
                      label='Enter your selling price'
                      className='w-full'
                      value={productData.sellingPrice}
                      onChange={(e) =>
                        setProductData({ ...productData, sellingPrice: e.target.value })
                      }
                    />
                  </div>
                  <div className='w-full mb-4'>
                    <label for='name' className='block text-primary-normal text-start pb-3'>
                      Cost Price:
                    </label>
                    <Input
                      type='text'
                      label='Enter your Cost price'
                      className='w-full'
                      value={productData.costPrice}
                      onChange={(e) =>
                        setProductData({ ...productData, costPrice: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className='flex gap-4 mb-4'>
                  <div className='w-full mb-4'>
                    <label for='name' className='block text-primary-normal text-start pb-3'>
                      color:
                    </label>
                    <Input
                      type='text'
                      label='Enter your selling price'
                      className='w-full'
                      value={productData.color}
                      onChange={(e) =>
                        setProductData({ ...productData, color: e.target.value })
                      }
                    />
                  </div>
                  <div className='w-full mb-4'>
                    <label for='name' className='block text-primary-normal text-start pb-3'>
                      condition:
                    </label>
                    <Input
                      type='text'
                      label='Enter your Cost price'
                      className='w-full'
                      value={productData.condition}
                      onChange={(e) =>
                        setProductData({ ...productData, condition: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className='flex gap-4 mb-4'>
                  <div className='w-full mb-4'>
                    <label for='name' className='block text-primary-normal text-start pb-3'>
                      Make:
                    </label>
                    <Input
                      type='text'
                      label='Enter the Make of your product'
                      className='w-full'
                      value={productData.make}
                      onChange={(e) => setProductData({ ...productData, make: e.target.value })}
                    />
                  </div>
                  <div className='w-full mb-4'>
                    <label for='name' className='block text-primary-normal text-start pb-3'>
                      Model:
                    </label>
                    <Input
                      type='text'
                      label='Enter the make of your model'
                      className='w-full'
                      value={productData.model}
                      onChange={(e) => setProductData({ ...productData, model: e.target.value })}
                    />
                  </div>
                </div>
                <div className='flex gap-4 mb-4'>
                  <div className='w-full mb-4'>
                    <label for='name' className='block text-primary-normal text-start pb-3'>
                      Year:
                    </label>
                    <Input
                      type='text'
                      label='Enter the year of production'
                      className='w-full'
                      value={productData.year}
                      onChange={(e) => setProductData({ ...productData, year: e.target.value })}
                    />
                  </div>
                  <div className='w-full mb-4'>
                    <label for='name' className='block text-primary-normal text-start pb-3'>
                      Mileage:
                    </label>
                    <Input
                      type='text'
                      label='Enter the mileage of production'
                      className='w-full'
                      value={productData.mileage}
                      onChange={(e) => setProductData({ ...productData, mileage: e.target.value })}
                    />
                  </div>
                </div>
                <div className='w-full mb-4'>
                  <label for='name' className='block text-primary-normal text-start pb-3'>
                    Quantity in stock:
                  </label>
                  <Input
                    type='text'
                    label='Enter stock number'
                    className='w-full'
                    value={productData.quantity}
                    onChange={(e) => setProductData({ ...productData, quantity: e.target.value })}
                  />
                </div>
                <div className='flex justify-between mb-4'>
                  <p>Discount</p>
                  <label class='relative mb-5 cursor-pointer'>
                    <input type='checkbox' value='' class='peer sr-only' />
                    <div class="peer h-5 w-9 rounded-full bg-gray-400 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-900 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200"></div>
                  </label>
                </div>
                <div className='flex gap-4 mb-4'>
                  <div className='w-full mb-4'>
                    <label for='name' className='block text-primary-normal text-start pb-3'>
                      Type:
                    </label>
                    <Input
                      type='text'
                      label='Enter the type of discount'
                      className='w-full'
                      value={productData.discountType}
                      onChange={(e) =>
                        setProductData({ ...productData, discountType: e.target.value })
                      }
                    />
                  </div>
                  <div className='w-full mb-4'>
                    <label for='name' className='block text-primary-normal text-start pb-3'>
                      Value:
                    </label>
                    <Input
                      type='text'
                      label='Enter the value of the discount'
                      className='w-full'
                      value={productData.discountValue}
                      onChange={(e) =>
                        setProductData({ ...productData, discountValue: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              <div class='w-[35%] h-[50%] p-6 border mb-7 shadow-lg rounded-lg'>
                <div>
                  <div
                    className='w-[300px]  relative border-2 border-gray-300 border-dashed rounded-lg p-6'
                    id='dropzone'
                  >
                    <input type='file' className='absolute inset-0 w-full h-full opacity-0 z-50' />
                    <div className='text-center'>
                      <img
                        className='mx-auto h-12 w-12'
                        src='https://www.svgrepo.com/show/357902/image-upload.svg'
                        alt=''
                      />
                      <h3 className='mt-2 text-sm font-medium text-gray-900'>
                        <label htmlFor='file-upload' className='relative cursor-pointer'>
                          <span>Drag and drop</span>
                          <span className='text-indigo-600'> or browse</span>
                          <span>to upload</span>
                          <input
                            id='file-upload'
                            name='file-upload'
                            type='file'
                            className='sr-only'
                            accept="image/png,image/jpeg,image/gif" 
                            onChange={handleImageChange}
                          />
                        </label>
                      </h3>
                      <p className='mt-1 text-xs text-gray-500'>PNG, JPG, GIF up to 3MB</p>
                    </div>
                    <img src='' className='mt-4 mx-auto max-h-40 hidden' id='preview' />
                  </div>
                </div>
                <div className='flex gap-2 mt-5 '>
                  <div>
                    <div
                      className='w-[150px]  relative border-2 border-gray-300 border-dashed rounded-lg p-6'
                      id='dropzone'
                    >
                      <input
                        type='file'
                        className='absolute inset-0 w-full h-full opacity-0 z-50'
                      />
                      <div className='text-center'>
                        <img
                          className='mx-auto h-12 w-12'
                          src='https://www.svgrepo.com/show/357902/image-upload.svg'
                          alt=''
                        />
                        <h3 className='mt-2 text-sm font-medium text-gray-900'>
                          <label htmlFor='file-upload' className='relative cursor-pointer'>
                            <span>Drag and drop</span>
                            <span className='text-indigo-600'> or browse</span>
                            <span>to upload</span>
                            <input
                              id='file-upload'
                              name='file-upload'
                              type='file'
                              className='sr-only'
                              accept="image/png,image/jpeg,image/gif" 
                              onChange={handleImageChange}
                            />
                          </label>
                        </h3>
                        <p className='mt-1 text-xs text-gray-500'>PNG, JPG, GIF up to 3MB</p>
                      </div>
                      <img src='' className='mt-4 mx-auto max-h-40 hidden' id='preview' />
                    </div>
                  </div>
                  <div>
                    <div
                      className='w-[150px]  relative border-2 border-gray-300 border-dashed rounded-lg p-6'
                      id='dropzone'
                    >
                      <input
                        type='file'
                        className='absolute inset-0 w-full h-full opacity-0 z-50'
                      />
                      <div className='text-center'>
                        <img
                          className='mx-auto h-12 w-12'
                          src='https://www.svgrepo.com/show/357902/image-upload.svg'
                          alt=''
                        />
                        <h3 className='mt-2 text-sm font-medium text-gray-900'>
                          <label htmlFor='file-upload' className='relative cursor-pointer'>
                            <span>Drag and drop</span>
                            <span className='text-indigo-600'> or browse</span>
                            <span>to upload</span>
                            <input
                              id='file-upload'
                              name='file-upload'
                              type='file'
                              className='sr-only'
                              accept="image/png,image/jpeg,image/gif" 
                              onChange={handleImageChange}
                            />
                          </label>
                        </h3>
                        <p className='mt-1 text-xs text-gray-500'>PNG, JPG, GIF up to 3MB</p>
                      </div>
                      <img src='' className='mt-4 mx-auto max-h-40 hidden' id='preview' />
                    </div>
                  </div>
                </div>
                <div className='flex gap-2 mt-5 '>
                  <div>
                    <div
                      className='w-[150px]  relative border-2 border-gray-300 border-dashed rounded-lg p-6'
                      id='dropzone'
                    >
                      <input
                        type='file'
                        className='absolute inset-0 w-full h-full opacity-0 z-50'
                      />
                      <div className='text-center'>
                        <img
                          className='mx-auto h-12 w-12'
                          src='https://www.svgrepo.com/show/357902/image-upload.svg'
                          alt=''
                        />
                        <h3 className='mt-2 text-sm font-medium text-gray-900'>
                          <label htmlFor='file-upload' className='relative cursor-pointer'>
                            <span>Drag and drop</span>
                            <span className='text-indigo-600'> or browse</span>
                            <span>to upload</span>
                            <input
                              id='file-upload'
                              name='file-upload'
                              type='file'
                              className='sr-only'
                              accept="image/png,image/jpeg,image/gif" 
                              onChange={handleImageChange}
                            />
                          </label>
                        </h3>
                        <p className='mt-1 text-xs text-gray-500'>PNG, JPG, GIF up to 3MB</p>
                      </div>
                      <img src='' className='mt-4 mx-auto max-h-40 hidden' id='preview' />
                    </div>
                  </div>
                  <div>
                    <div
                      className='w-[150px]  relative border-2 border-gray-300 border-dashed rounded-lg p-6'
                      id='dropzone'
                    >
                      <input
                        type='file'
                        className='absolute inset-0 w-full h-full opacity-0 z-50'
                        accept="image/png,image/jpeg,image/gif" 
                        onChange={handleImageChange}
                      />
                      <div className='text-center'>
                        <img
                          className='mx-auto h-12 w-12'
                          src='https://www.svgrepo.com/show/357902/image-upload.svg'
                          alt=''
                        />
                        <h3 className='mt-2 text-sm font-medium text-gray-900'>
                          <label htmlFor='file-upload' className='relative cursor-pointer'>
                            <span>Drag and drop</span>
                            <span className='text-indigo-600'> or browse</span>
                            <span>to upload</span>
                            <input
                              id='file-upload'
                              name='file-upload'
                              type='file'
                              className='sr-only'
                              accept="image/png,image/jpeg,image/gif" 
                              onChange={handleImageChange}
                            />
                          </label>
                        </h3>
                        <p className='mt-1 text-xs text-gray-500'>PNG, JPG, GIF up to 3MB</p>
                      </div>
                      <img src='' className='mt-4 mx-auto max-h-40 hidden' id='preview' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addproduct;
