"use client";
import { useCreateUserMutation, useGetUserQuery } from "@/state/api";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import UserModal from "./userModal";

const columns: GridColDef[] = [
  { field: "userId", headerName: "id", width: 90 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "email", headerName: "User Email", width: 200 },
  { field: "phone", headerName: "Phone Address", width: 200 },
];
const users = () => {
  const { data: user, isLoading } = useGetUserQuery();
  const [openModal, setOpenModal] = useState(false);
  const [createUser] = useCreateUserMutation()

  const handleSubmit = (e: any) => {
    if (e.name === "" || e.email === "" || e.phone === "") return;
    console.log("we passed")
    console.log(e);
    createUser(e)
    
  };


  const closeModal=()=>{
    console.log("i click close")
    setOpenModal(false)

  }
  return (
    <div className="h-full w-full">
      <div className="my-4 mx-2 w-full h-full overflow-auto">
        <div className="flex justify-between px-2">
          <h1>Users</h1>
          <button
            className="bg-blue-50 my-3 shadow-md rounded-md px-2 hover:bg-gray-300"
            onClick={() => setOpenModal(true)}
          >
            Create User
          </button>
        </div>

        <div className="flex flex-col bg-gray-400  w-full">
          <DataGrid
            columns={columns}
            rows={user}
            getRowId={(users) => users.userId}
          />
        </div>
      </div>
      <UserModal open={openModal} submit={handleSubmit} close={closeModal}/>
    </div>
  );
};

export default users;
