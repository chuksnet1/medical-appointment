import React from "react";

type Props={
  id: string
}

type scheduleProps = {
  name: string;
  reason: string;
  specialist: string;
  symptoms: string;
  approval: string;
  createdAt: string;
  deleterow: (id:any) => void;
};

const appointmentCard = ({
  name,
  reason,
  specialist,
  symptoms,
  approval,
  createdAt,
  deleterow,
}: scheduleProps) => {
  //console.log(approval);
  return (
    <>
      {/* <div className=""> */}
      <tr
        onClick={deleterow}
        className="border h-16 hover:bg-gray-300 cursor-pointer"
      >
        <td className="border ">
          <img src="" alt="" />
        </td>
        <td className="border">{name}</td>
        <td className="border">{reason}</td>
        <td className="border">{symptoms}</td>
        <td className="border">{specialist}</td>
        <td className="border">{approval}</td>
        <td className="border">{createdAt}</td>
      </tr>

    </>
  );
};

export default appointmentCard;
