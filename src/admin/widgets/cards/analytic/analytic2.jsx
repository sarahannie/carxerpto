

  
export function AnalyticCard2({ color, icon, title, value, footer }) {
  return (
   <div className="border border-primary-normal pt-4 pb-1 px-3 rounded-md shadow-lg  " style={{ borderLeft: '5px solid #00c6bc' }}>
      <div className="flex justify-between py-3 align-center text-primary-normal">
          <div className="text-secondary-normal text-bold">
          User Engagement
          </div>
          <div className="" >
          <select name="" id="">
              <option value="">this week</option>
              <option value="">one month</option>
              <option value="">3 month</option>
              <option value="">6 months</option>
              <option value="">year</option>
          </select>
          </div>
      </div>
      <div className=" mb-6 grid gap-y-10 gap-x-6 grid-cols-2 mt-5 text-primary-normal">
          <div className="text-start ">
              <h3 className="text-gray-400 text-[13px]">Ave listing per User</h3>
              <p className="text-black-900 text-xl ">$25,000</p>
          </div>
          <div className="text-start ">
              <h3 className="text-gray-400 text-[13px]">Avge Trans per User</h3>
              <p className="text-black-900 text-xl">0.37%</p>
          </div> 
      </div>
      <div className=" mb-6 grid gap-y-1 gap-x-6 grid-cols-2 mt-5 text-primary-normal">
          <div className="text-start ">
              <h3 className="text-gray-400 text-[13px]">Avge Rev per Trans</h3>
              <p className="text-black-900 text-xl">$45</p>
          </div> 
      </div>
   </div>
  );
}