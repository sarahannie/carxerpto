
import { useGetProductsQuery } from '../app/api/buyerProductApi';
import { useNavigate } from 'react-router-dom';

function List(){
  const navigate = useNavigate();
  const { data} = useGetProductsQuery();
  const products = Array.isArray(data?.product) ? data.product : [];
    return(
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
        {products.map((cars) => (
          <div
            key={cars.id}
            className="border border-slate-300 bg-white shadow-md"
            onClick={() => navigate(`/car-details/${cars.productTag}`, { state: { cars } })}
          >
            <div className="w-full h-[177px]">
              <img
                className="w-full h-full object-contain"
                src={cars.images[0]}
                alt="imageIcon"
              />
            </div>
            <div className="p-3 flex flex-col gap-2">
              <div className="flex carss-center justify-between ">
                <h1 className=" text-[16.8px] text-[#002C52] font-bold">
                  {cars.name}
                </h1>
                <p className="text-[#002C52] text-[15px] font-bold">
                  ${cars.sellingPrice}
                </p>
              </div>
              <div className="flex carss-center text-[10px] md:text-[12px] font-medium justify-between">
                <span className="">make: {cars.make}</span>
                <hr className="w-[0.1px] h-[10px] border border-gray-400" />
                <span>model: {cars.model}</span>
                <hr className="w-[0.1px] h-[10px] border border-gray-400" />
                <span>Year: {cars.year}</span>
                <hr className="w-[0.1px] h-[10px] border border-gray-400" />
                <span>mileage: {cars.milleage}</span>
              </div>
              <div className="text-[14px] font-medium leading-[22.4px] ">
                <h3 className="text-start  text-[16px]">Features</h3>
                    <ul className="flex flex-col carss-center  text-start " >
                      <li className="" >condition: {cars.condition}</li>
                      <li className="" >color: {cars.color}</li>
                      <li className="" >Details: {cars.shortDescription}</li>
                    </ul>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    )
}
export default List