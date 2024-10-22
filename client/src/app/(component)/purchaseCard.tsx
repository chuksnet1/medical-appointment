import React from "react";

type purchaseProps = {
  name: string;
  quantity: number;
  price: number;
  total: number;
  department: string;
  createdAt: Date;
};

const purchaseCard = ({
  name,
  quantity,
  price,
  total,
  department,
  createdAt,
}: purchaseProps) => {
  return (
    <div className="grid grid-cols-7  mx-3 mt-3  overflow-auto">
         <div className="row-span-4  text-center font-medium bg-white">image</div>
      <div className="row-span-4 text-center font-medium bg-white">{name}</div>
      <div className="row-span-4 text-center font-medium bg-white">{quantity}</div>
      <div className="row-span-4 text-center font-medium bg-white">{price}</div>
      <div className="row-span-4 text-center font-medium bg-white">{total}</div>
      <div className="row-span-4 text-center font-medium bg-white ">{department}</div>
      <div className="row-span-4 text-center font-medium bg-white">createdAt</div>
     
    </div>
  );
};

export default purchaseCard;
