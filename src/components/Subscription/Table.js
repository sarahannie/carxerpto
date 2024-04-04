import React from "react";
function Table() {
  return (
    <div>
      <div class="overflow-x-auto">
        <section class="container mx-auto mb-20 mt-10">
          <table class="table-auto min-w-max">
            <thead>
              <tr>
                <th class="border border-primary-normal border-x-2 border-y-2 border-t-4 border-l-4 px-[100px] py-2 bg-primary-light text-primary-normal">
                  Feature
                </th>
                <th class="border border-primary-normal border-x-2 border-y-2 border-t-4 px-[100px] py-2 bg-primary-light text-primary-normal">
                  Basic Plan
                </th>
                <th class="border border-primary-normal border-x-2 border-y-2 border-t-4 px-[100px] py-2 bg-primary-light text-primary-normal">
                  Standard Plan
                </th>
                <th class="border border-primary-normal border-x-2 border-y-2 border-t-4 px-[100px] py-2 bg-primary-light text-primary-normal">
                  Premuim Plan
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-primary-normal border-x-2 border-y-2 border-l-4 px-14 py-2 text-primary-normal font-semibold">
                  Number of Listings
                </td>
                <td class="border border-primary-normal border-x-2 border-y-2 px-14 py-2 text-primary-darker font-bold">
                  Up to 5
                </td>
                <td class="border border-primary-normal border-x-2 border-y-2 px-14 py-2 text-primary-darker font-bold">
                  Up to 10
                </td>
                <td class="border border-primary-normal border-x-2 border-y-2 px-14 py-2 text-primary-darker font-bold">
                  Unlimited
                </td>
              </tr>
              <tr>
                <td class="border border-primary-normal border-x-2 border-y-2 border-l-4 px-14 py-2 text-primary-normal font-semibold">
                  Analytics
                </td>
                <td class="border border-primary-normal border-x-2 border-y-2 px-14 py-2 text-primary-darker font-bold">
                  Basics
                </td>
                <td class="border border-primary-normal border-x-2 border-y-2 px-14 py-2 text-primary-darker font-bold">
                  Advanced
                </td>
                <td class="border border-primary-normal border-x-2 border-y-2 px-14 py-2 text-primary-darker font-bold">
                  Comprehensive
                </td>
              </tr>
              <tr>
                <td class="border border-primary-normal border-x-2 border-y-2 border-l-4 px-14 py-2 text-primary-normal font-semibold">
                  Support
                </td>
                <td class="border border-primary-normal border-x-2 border-y-2 px-14 py-2 text-primary-darker font-bold">
                  Standard
                </td>
                <td class="border border-primary-normal border-x-2 border-y-2 px-14 py-2 text-primary-darker font-bold">
                  Prioritized
                </td>
                <td class="border border-primary-normal border-x-2 border-y-2 px-14 py-2 text-primary-darker font-bold">
                  Dedicated
                </td>
              </tr>
              <tr>
                <td class="border border-primary-normal border-x-2 border-y-2 border-l-4 px-14 py-2 text-primary-normal font-semibold">
                  Featured Listings
                </td>
                <td class="border border-primary-normal border-x-2 border-y-2 px-14 py-2 text-primary-lightactive font-bold">
                  Not Available
                </td>
                <td class="border border-primary-normal border-x-2 border-y-2 px-14 py-2 text-primary-lightactive font-bold">
                  Not Available
                </td>
                <td class="border border-primary-normal border-x-2 border-y-2 px-14 py-2 text-primary-lightactive font-bold">
                  Not Available
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default Table;
