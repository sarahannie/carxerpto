import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Sidenav from '../../widgets/layout/sidenav';
import { Input, Textarea, Button } from '@material-tailwind/react';
import DashboardNavbar from '../../widgets/layout/dashboard-navbar';
import { useAddProductMutation } from '../../../app/api/productApi';
import { toast } from 'react-toastify';

export function AddProduct() {
  const [addProduct, { isLoading, isError, isSuccess }] = useAddProductMutation();

  const formik = useFormik({
    initialValues: {
      name: '',
      category: '',
      shortDescription: '',
      longDescription: '',
      costPrice: '',
      sellingPrice: '',
      color: '',
      condition: '',
      make: '',
      model: '',
      year: '',
      milleage: '',
      quantity: '',
      discount: false,
      discountType: '',
      discountValue: '',
      images: []
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Value is required'),
      category: Yup.string().required('Value is required'),
      shortDescription: Yup.string().required('Value is required'),
      longDescription: Yup.string().required('Value is required'),
      costPrice: Yup.string().required('Value is required'),
      sellingPrice: Yup.string().required('Value is required'),
      color: Yup.string().required('Value is required'),
      condition: Yup.string().required('Value is required'),
      make: Yup.string().required('Value is required'),
      model: Yup.string().required('Value is required'),
      year: Yup.string().required('Value is required'),
      milleage: Yup.string().required('Value is required'),
      quantity: Yup.string().required('Value is required'),
      discount: Yup.boolean().required('Value is required'),
      discountType: Yup.string().required('Value is required'),
      discountValue: Yup.string().required('Value is required'),
      images: Yup.array()
        .min(1, 'At least one image is required')
        .of(
          Yup.mixed()
            .test('fileType', 'Unsupported file format', (value) =>
              ['image/jpeg','image/jpg', 'image/png', 'image/gif'].includes(value?.type)
            )
            .test('fileSize', 'File too large', (value) => value && value.size <= 5000000)
        )
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log("Form submitted with values:", values);
      try {
        const formData = new FormData();
        for (let key in values) {
          if (key === 'images') {
            values.images.forEach((image, index) => {
              formData.append(`images[${index}]`, image);
            });
          } else {
            formData.append(key, values[key]);
          }
        }
        await addProduct(formData).unwrap();
        resetForm();
        toast.success('Product added successfully!');
      } catch (error) {
        toast.error(`Failed to add product: ${error.data ? error.data.error : error.message}`);
        console.error('Failed to add product:', error);
      }
    }
  });

  return (
    <div className=''>
      <DashboardNavbar />
      <div className='flex flex-row overflow-hidden'>
        <div className=''>
          <Sidenav />
        </div>
        <div className='mt-7 w-[90%] lg:ml-[20%] ml-[15px]'>
          <form onSubmit={formik.handleSubmit}>
            <div className='mb-6 flex justify-between mr-4'>
              <div>
                <h3 className='text-xl text-primary-normal pb-3 text-start'>Add new list</h3>
              </div>
              <div className='flex gap-4 align-center'>
                {/* <button
                  type='submit'
                  className='flex items-center gap-2 bg-green-900 text-white px-4 py-2 round-md'
                >
                  Save as Draft
                </button> */}
                <button
                  type='submit'
                  className='flex items-center gap-2 bg-primary-normal text-white px-3 py-2 round-md'
                >
                  Save & Publish
                </button>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='w-[60%] p-6 border mb-7 shadow-lg rounded-lg'>
                {/* Product Name */}
                <div className='w-full mb-4'>
                  <label htmlFor='name' className='block text-primary-normal text-start pb-3'>
                    Product Name:
                  </label>
                  <Input
                    type='text'
                    name='name'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    label='Enter Product Name'
                    className='w-full'
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className='text-red-300 text-start text-sm'>{formik.errors.name}</div>
                  ) : null}
                </div>

                {/* Images */}
                <div className='w-full mb-4'>
                  <label htmlFor='images'>Upload Images</label>
                  <input
                    id='images'
                    name='images'
                    type='file'
                    multiple
                    onChange={(event) => {
                      const files = Array.from(event.currentTarget.files);
                      formik.setFieldValue('images', [...formik.values.images, ...files]);
                    }}
                  />
                  {formik.touched.images && formik.errors.images ? (
                    <div className='text-red-300 text-start text-sm'>{formik.errors.images}</div>
                  ) : null}
                </div>
                <div>
                  {formik.values.images &&
                    formik.values.images.map((file, index) => (
                      <div key={index}>
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`preview ${index}`}
                          style={{ width: '100px', height: '100px' }}
                        />
                        <button
                          type='button'
                          onClick={() => {
                            const newImages = formik.values.images.filter((_, i) => i !== index);
                            formik.setFieldValue('images', newImages);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                </div>

                {/* Category */}
                <div className='w-full mb-4'>
                  <label htmlFor='category' className='block text-primary-normal text-start pb-3'>
                    Category:
                  </label>
                  <Input
                    type='text'
                    label='Enter Product Category'
                    name='category'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.category}
                    className='w-full'
                  />
                  {formik.touched.category && formik.errors.category ? (
                    <div className='text-red-300 text-start text-sm'>{formik.errors.category}</div>
                  ) : null}
                </div>

                {/* Short Description */}
                <div className='w-full mb-4'>
                  <label htmlFor='shortDescription' className='block text-primary-normal text-start pb-3'>
                    Short description:
                  </label>
                  <Input
                    type='text'
                    name='shortDescription'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.shortDescription}
                    label='Please enter details'
                    className='w-full'
                  />
                  {formik.touched.shortDescription && formik.errors.shortDescription ? (
                    <div className='text-red-300 text-start text-sm'>{formik.errors.shortDescription}</div>
                  ) : null}
                </div>

                {/* Long Description */}
                <div className='w-full mb-4'>
                  <label htmlFor='longDescription' className='block text-primary-normal text-start pb-3'>
                    Long description:
                  </label>
                  <Textarea
                    type='text'
                    name='longDescription'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.longDescription}
                    label='Please enter full details'
                  />
                  {formik.touched.longDescription && formik.errors.longDescription ? (
                    <div className='text-red-300 text-start text-sm'>{formik.errors.longDescription}</div>
                  ) : null}
                </div>

                {/* Selling Price */}
                <div className='flex gap-4 mb-4'>
                  <div className='w-full mb-4'>
                    <label htmlFor='sellingPrice' className='block text-primary-normal text-start pb-3'>
                      Selling Price:
                    </label>
                    <Input
                      type='text'
                      name='sellingPrice'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.sellingPrice}
                      label='Enter your selling price'
                      className='w-full'
                    />
                    {formik.touched.sellingPrice && formik.errors.sellingPrice ? (
                      <div className='text-red-300 text-start text-sm'>{formik.errors.sellingPrice}</div>
                    ) : null}
                  </div>

                  {/* Cost Price */}
                  <div className='w-full mb-4'>
                    <label htmlFor='costPrice' className='block text-primary-normal text-start pb-3'>
                      Cost Price:
                    </label>
                    <Input
                      type='text'
                      name='costPrice'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.costPrice}
                      label='Enter your Cost price'
                      className='w-full'
                    />
                    {formik.touched.costPrice && formik.errors.costPrice ? (
                      <div className='text-red-300 text-start text-sm'>{formik.errors.costPrice}</div>
                    ) : null}
                  </div>
                </div>

                {/* Color */}
                <div className='flex gap-4 mb-4'>
                  <div className='w-full mb-4'>
                    <label htmlFor='color' className='block text-primary-normal text-start pb-3'>
                      Color:
                    </label>
                    <Input
                      type='text'
                      name='color'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.color}
                      label='Enter your color'
                      className='w-full'
                    />
                    {formik.touched.color && formik.errors.color ? (
                      <div className='text-red-300 text-start text-sm'>{formik.errors.color}</div>
                    ) : null}
                  </div>

                  {/* Condition */}
                  <div className='w-full mb-4'>
                    <label htmlFor='condition' className='block text-primary-normal text-start pb-3'>
                      Condition:
                    </label>
                    <Input
                      type='text'
                      name='condition'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.condition}
                      label='Enter your condition'
                      className='w-full'
                    />
                    {formik.touched.condition && formik.errors.condition ? (
                      <div className='text-red-300 text-start text-sm'>{formik.errors.condition}</div>
                    ) : null}
                  </div>
                </div>

                {/* Make */}
                <div className='flex gap-4 mb-4'>
                  <div className='w-full mb-4'>
                    <label htmlFor='make' className='block text-primary-normal text-start pb-3'>
                      Make:
                    </label>
                    <Input
                      type='text'
                      name='make'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.make}
                      label='Enter the Make of your product'
                      className='w-full'
                    />
                    {formik.touched.make && formik.errors.make ? (
                      <div className='text-red-300 text-start text-sm'>{formik.errors.make}</div>
                    ) : null}
                  </div>

                  {/* Model */}
                  <div className='w-full mb-4'>
                    <label htmlFor='model' className='block text-primary-normal text-start pb-3'>
                      Model:
                    </label>
                    <Input
                      type='text'
                      name='model'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.model}
                      label='Enter the Model of your product'
                      className='w-full'
                    />
                    {formik.touched.model && formik.errors.model ? (
                      <div className='text-red-300 text-start text-sm'>{formik.errors.model}</div>
                    ) : null}
                  </div>
                </div>

                {/* Year */}
                <div className='flex gap-4 mb-4'>
                  <div className='w-full mb-4'>
                    <label htmlFor='year' className='block text-primary-normal text-start pb-3'>
                      Year:
                    </label>
                    <Input
                      type='text'
                      name='year'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.year}
                      label='Enter the year of production'
                      className='w-full'
                    />
                    {formik.touched.year && formik.errors.year ? (
                      <div className='text-red-300 text-start text-sm'>{formik.errors.year}</div>
                    ) : null}
                  </div>

                  {/* Mileage */}
                  <div className='w-full mb-4'>
                    <label htmlFor='mileage' className='block text-primary-normal text-start pb-3'>
                      Mileage:
                    </label>
                    <Input
                      type='text'
                      name='milleage'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.milleage}
                      label='Enter the mileage of production'
                      className='w-full'
                    />
                    {formik.touched.milleage && formik.errors.milleage ? (
                      <div className='text-red-300 text-start text-sm'>{formik.errors.milleage}</div>
                    ) : null}
                  </div>
                </div>

                {/* Quantity */}
                <div className='w-full mb-4'>
                  <label htmlFor='quantity' className='block text-primary-normal text-start pb-3'>
                    Quantity in stock:
                  </label>
                  <Input
                    type='text'
                    name='quantity'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.quantity}
                    label='Enter stock number'
                    className='w-full'
                  />
                  {formik.touched.quantity && formik.errors.quantity ? (
                    <div className='text-red-300 text-start text-sm'>{formik.errors.quantity}</div>
                  ) : null}
                </div>

                {/* Discount */}
                <div className='flex justify-between mb-4'>
                  <p>Discount</p>
                  <label className='relative mb-5 cursor-pointer'>
                    <input
                      type='checkbox'
                      name='discount'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.discount}
                      className='peer sr-only'
                    />
                    <div className="peer h-5 w-9 rounded-full bg-gray-400 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-900 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200"></div>
                  </label>
                  {formik.touched.discount && formik.errors.discount ? (
                    <div className='text-red-300 text-start text-sm'>{formik.errors.discount}</div>
                  ) : null}
                </div>

                {/* Discount Type */}
                <div className='flex gap-4 mb-4'>
                  <div className='w-full mb-4'>
                    <label htmlFor='discountType' className='block text-primary-normal text-start pb-3'>
                      Type:
                    </label>
                    <Input
                      type='text'
                      name='discountType'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.discountType}
                      label='Enter the type of discount'
                      className='w-full'
                    />
                    {formik.touched.discountType && formik.errors.discountType ? (
                      <div className='text-red-300 text-start text-sm'>{formik.errors.discountType}</div>
                    ) : null}
                  </div>

                  {/* Discount Value */}
                  <div className='w-full mb-4'>
                    <label htmlFor='discountValue' className='block text-primary-normal text-start pb-3'>
                      Value:
                    </label>
                    <Input
                      type='text'
                      name='discountValue'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.discountValue}
                      label='Enter the value of the discount'
                      className='w-full'
                    />
                    {formik.touched.discountValue && formik.errors.discountValue ? (
                      <div className='text-red-300 text-start text-sm'>{formik.errors.discountValue}</div>
                    ) : null}
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

export default AddProduct;
