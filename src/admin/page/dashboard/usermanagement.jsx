import React from 'react'

import Sidenav from '../../widgets/layout/sidenav'
import DashboardNavbar from '../../widgets/layout/dashboard-navbar'
import { Select, Option } from "@material-tailwind/react";
import { UserTrans } from '../../widgets/cards/user/userTrans'
import { MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import { UserTrans2 } from '../../widgets/cards/user/userTrans2';
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Input,
} from "@material-tailwind/react";


const TABLE_HEAD = ["Name", "Email", "Category", "Discount","Total Value", "Action", "Status"];
const TABLE_ROWS = [
    {
      img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
      name: "Quattro 2020",
      unit_price: "$25,000",
      stock: "8",
      discount: "$500.00",
      action: "Edit",
      total_value: "$24,500.00",
      status: "published",
      
    },
    {
      img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
      name: "Quattro 2020",
      unit_price: "$25,000",
      stock: "8",
      discount: "$500.00",
      action: "publish",
      total_value: "$24,500.00",
      status: "published",
    },
    {
      img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
      name: "Quattro 2020",
      unit_price: "$25,000",
      stock: "8",
      discount: "$500.00",
      action: "Edit",
      total_value: "$24,500.00",
      status: "published",
    },
    {
      img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
      name: "Quattro 2020",
      unit_price: "$25,000",
      stock: "8",
      discount: "$500.00",
      action: "Publish",
      total_value: "$24,500.00",
      status: "published",
    },
    {
      img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
      name: "Quattro 2020",
      unit_price: "$25,000",
      stock: "8",
      discount: "$500.00",
      action: "Edit",
      total_value: "$24,500.00",
      status: "published",
    },
  ];

export function Usermanagement() {
  return (
    <div className="">
      <DashboardNavbar />
      <div className="flex flex-row  overflow-hidden">
        <div className="">
        <Sidenav/>
        </div>
      <div className=" mt-7 w-[90%] lg:ml-[20%] ml-[15px]">
      <div className=" mb-6 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-2 mr-5">
        <UserTrans />
        <UserTrans2/>
      </div>
      <div>
        <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" className="text-primary-normal">
              User Management
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
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              (
                {
                  img,
                  name,
                  unit_price,
                  stock,
                  status,
                  discount,
                  total_value
                },
                index,
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={img}
                          alt={name}
                          size="md"
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        />
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {name}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {unit_price}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {stock}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        {discount}
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        {total_value}
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                      <Select variant="outlined" label="Perform an Action">
                        <Option>Publish</Option>
                        <Option>Edit</Option>
                        <Option>Delete</Option>
                        <Option>Draft</Option>
                    </Select>
                      </div>
                    </td>
                    <td className={classes}>
                    <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={status}
                          color={
                            status === "published"
                              ? "green"
                              : status === "pending"
                              ? "amber"
                              : "red"
                          }
                        />
                      </div>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button variant="outlined" size="sm" className="text-primary-normal border-primary-normal">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton variant="outlined" size="sm">
            1
          </IconButton>
          <IconButton variant="text" size="sm">
            2
          </IconButton>
          <IconButton variant="text" size="sm">
            3
          </IconButton>
          <IconButton variant="text" size="sm">
            ...
          </IconButton>
          <IconButton variant="text" size="sm">
            8
          </IconButton>
          <IconButton variant="text" size="sm">
            9
          </IconButton>
          <IconButton variant="text" size="sm">
            10
          </IconButton>
        </div>
        <Button variant="outlined" size="sm" className="text-primary-normal border-primary-normal">
          Next
        </Button>
        </CardFooter>
        </Card>
        </div>
    </div>
    </div>
      
    </div>
  )
}


export default Usermanagement