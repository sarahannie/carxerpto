import React from 'react';
import DashboardNavbar from '../../widgets/layout/dashboard-navbar';
import Sidenav from '../../widgets/layout/sidenav';
import { Select, Option, Input, Button, Typography, Card, CardHeader, CardBody, Avatar, Chip, IconButton } from '@material-tailwind/react';
import { IoMdAdd } from 'react-icons/io';
import { FaEye } from 'react-icons/fa';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import { useGetProductsQuery } from '../../../app/api/productApi';

const TABLE_HEAD = ["Product Name", "Category", "color","costprice", "In-Stock", "DiscountType", "Total Value",  "View"];

export function List() {
  const { data, error, isLoading } = useGetProductsQuery();
  const navigate = useNavigate();
  const products = data?.responseMessage?.product || [];
  const prod = data?.responseMessage || [];

  console.log("Hello world", products)
  console.log("product", prod)
 

  return (
    <div className="">
      <DashboardNavbar />
      <div className="flex flex-row overflow-hidden">
        <div className="">
          <Sidenav />
        </div>
        <div className="mt-7 w-[90%] lg:ml-[20%] ml-[15px]">
          <div className="mb-6 flex justify-between mr-3">
            <div>
              <h3>Inventory Summary</h3>
            </div>
            <div>
              <Link to='/Addproduct' className="flex items-center gap-2 bg-primary-normal text-white px-3 py-2">
                <IoMdAdd className="h-5 w-5" />
                Add new Product List
              </Link>
            </div>
          </div>
          <div className="mb-6 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-2 mr-3">
            {/* Add any summary or card components here if needed */}
          </div>
          <div>
            <Card className="h-full w-full">
              <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                  <div>
                    <Typography variant="h5" className="text-primary-normal">
                      List Items
                    </Typography>
                  </div>
                  <div className="flex w-full shrink-0 gap-2 md:w-max">
                    <div className="w-full md:w-72">
                      <Input
                        label="Search"
                        icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                      />
                    </div>
                    <Button className="flex items-center bg-primary-normal gap-3" size="sm">
                      Search Items
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="overflow-scroll px-0">
              {isLoading ? (
                  <div>Loading...</div>
                ) : (
                  <table className="w-full min-w-max table-auto text-left">
                    <thead>
                      <tr>
                        {TABLE_HEAD.map((head) => (
                          <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                              {head}
                            </Typography>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {products.length === 0 ? (
                        <tr>
                          <td colSpan={TABLE_HEAD.length} className="p-4 text-center">
                            No products added yet. Please add a new product.
                          </td>
                        </tr>
                      ) : (
                        products.map((product, index) => {
                          const isLast = index === products.length - 1;
                          const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                          return (
                            <tr key={product.id}>
                              <td className={classes}>
                                <div className="flex items-center gap-3">
                                  <Avatar
                                    src={product.images[0]}
                                    alt={product.name}
                                    size="md"
                                    className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                                  />
                                  <Typography variant="small" color="blue-gray" className="font-bold">
                                    {product.name}
                                  </Typography>
                                </div>
                              </td>
                              <td className={classes}>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                  {product.category}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                  {product.color}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                  {product.costPrice}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                  {product.quantity}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <div className="w-max">
                                  {product.discountType}
                                </div>
                              </td>
                              <td className={classes}>
                                <div className="w-max">
                                  {product.sellingPrice}
                                </div>
                              </td>
                              <td className={classes}>
                                <div className="flex items-center gap-3">
                                  
                                    <IconButton variant="text" size="sm"
                                     onClick={() => navigate(`/Viewproduct/${product.productTag}`, { state: { product } })}
                                    >
                                      <FaEye className="h-5 w-5" />
                                    </IconButton>
                                  
                                </div>
                              </td>
                             
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                )}
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
