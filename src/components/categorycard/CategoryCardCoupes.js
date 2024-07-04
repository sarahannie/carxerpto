import React from 'react';
import cardCardA from "../../assets/carCardG.jpg";
import { useGetCoupesCategoryProductsQuery } from '../../app/api/buyerProductApi.js';
import { useNavigate } from 'react-router-dom';

function CategoryCardCoupes() {
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetCoupesCategoryProductsQuery();
  const category = Array.isArray(data?.product) ? data.product : [];

  
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products for category</p>;

  return (
    <div className="h-[250px] relative mt-8 rounded-md overflow-hidden bg-gradient-to-b from-[#0f375a] via-[#8a9196] to-[#003B6d] inset-0 opacity-[90%]">
      { data && category.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-[18px] text-white font-bold">No category yet</p>
        </div>
      ) : (
        category.map((categorys) => (
          <div
            key={categorys._id}
            onClick={() => navigate(`/car-category/${categorys._id}`, { state: { categorys } })}
          >
            <img
              className="w-full h-[250px] object-cover object-center mix-blend-overlay"
              src={cardCardA}
              alt="imageIcon"
            />
            <div className="absolute text-start top-[190px] ml-2">
              <p className="text-[18px] text-white font-bold ">Coupes</p>
              <p className="text-[16px] text-white font-bold ">{category.length}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryCardCoupes;
