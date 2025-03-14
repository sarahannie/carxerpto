
import cardCardA from  "../../assets/carCardF.jpg"
import { useGetMinivansCategoryProductsQuery } from '../../app/api/buyerProductApi.js';
import {useNavigate } from 'react-router-dom';


function CategoryCardMinivans() {
  const navigate = useNavigate();
  const { data} = useGetMinivansCategoryProductsQuery();
  let category = Array.isArray(data?.product) ? data.product : [];
  


  
  return (
    <div className="h-[250px] relative mt-8 rounded-md overflow-hidden bg-gradient-to-b from-[#0f375a] via-[#8a9196] to-[#003B6d] inset-0 opacity-[90%]">
    {data && category.length === 0 ? (
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
            <p className="text-[18px] text-white font-bold ">Sedans</p>
            <p className="text-[16px] text-white font-bold ">{category.length}</p>
          </div>
        </div>
      ))
    )}
  </div>
  );
}



export default CategoryCardMinivans;
