import CategoryCard1 from "../components/categorycard/CategoryCard.js";
import CategoryCardCoupes from "./categorycard/CategoryCardCoupes.js";
import CategoryCardMinivans from "./categorycard/CategoryCardMinivans.js";
import CategoryCardSuv from "./categorycard/CategoryCardSuv.js";
import CategoryCardPickupTrucks from "./categorycard/CategoryCardPickupTrucks.js";
import CategoryHatchbacks from "./categorycard/CategoryCardHatchbacks.js";



function CategoryGrid(){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4  w-full lg-max-[1200px] p-3 sm:p-3">
         <CategoryCard1  />
         <CategoryCardCoupes/>
         <CategoryCardMinivans/>
         <CategoryCardSuv/>
         <CategoryCardPickupTrucks/>
         <CategoryHatchbacks/>
      </div>
    )
}

export default CategoryGrid


