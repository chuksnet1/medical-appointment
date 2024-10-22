import React from "react";
import PurchaseCard from "@/app/(component)/purchaseCard"
import { useGetDashboardMetricsQuery } from "@/state/api";

type Props = {};

const purchase = (props: Props) => {
    const {data, isLoading} = useGetDashboardMetricsQuery()
    const dataPurchase = data?.purchase
  return (
    <div className="row-span-12 md:col-span-2 rounded-md bg-gray-100">
      <span className="font-semibold text-center ml-4">Purchase</span>
      {dataPurchase?.map((purchase)=>(
        <PurchaseCard
         name={purchase.name}
         price={purchase.unitPrice}
         quantity={purchase.quantity}
         total={purchase.totalAmount}
         department={purchase.department}
         createdAt={purchase.createdAt}
        />
      ))}
      
    </div>
  );
};

export default purchase;
