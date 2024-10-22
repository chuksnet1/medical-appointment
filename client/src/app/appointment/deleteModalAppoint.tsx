import React from "react";

type deleteProps = {
  isopen: boolean;
  deleteData: (id: any) => void;
  closeDeleteModal: () => void;
};

const deleteModalAppoint = ({
  isopen,
  deleteData,
  closeDeleteModal,
}: deleteProps) => {
  if (!isopen) return;
  return (
    <div className="fixed flex flex-col py-20 justify-center items-center inset-0 bg-gray-500 bg-opacity-50 overflow-y-auto h-full w-full z-20">
      <div className="flex flex-col justify-center  gap-10 bg-white border h-64 w-60 align-middle  ">
        <h1 className="self-center font-extrabold text-xl">Do You Want To Delete</h1>
        <div className="flex gap-6 justify-around">
          <button
            className="bg-blue-200 hover:bg-gray-200 mt-14 rounded-md shadow-md h-10 w-1/3"
            onClick={deleteData}
          >
            YES
          </button>
          <button
            className="bg-blue-200 hover:bg-gray-200 mt-14 rounded-md shadow-md h-10 w-1/3"
            onClick={closeDeleteModal}
          >
            NO
          </button>
        </div>
      </div>
    </div>
  );
};

export default deleteModalAppoint;
