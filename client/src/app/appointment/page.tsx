"use client";
import React, { useState } from "react";
import AppointmentCard from "../(component)/appointmentCard";
import DeleteModal from "./deleteModalAppoint";
import {
  useCreateAppointmentMutation,
  useGetAppointmentQuery,
  useDeleteAppointmentMutation,
} from "@/state/api";
import AppointModalcard from "./appointModalcard";

const Appointment = () => {
  const [creatAppointment] = useCreateAppointmentMutation();
  const [deleteAppointment] = useDeleteAppointmentMutation();
  const { data, isLoading } = useGetAppointmentQuery();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [rowId, setRowId] = useState("");

  console.log(data);

  // CREATE APPOINTMENT FUNCTION
  const createAppoint = (e: any) => {
    //check if tabs are empty
    if (
      e.name === "" ||
      e.reason === "" ||
      e.specialist === "" ||
      e.symptom === ""
    )
      return;

    try {
      creatAppointment(e);
      closeModal();
    } catch (error) {}
  };

  type newDeletedAppointment = {
    id: string;
  };
  // DELETE ROW FROM THE TABLE
  const handleDelete = (id: any) => {
    setRowId(id);
    //do function here
    if (isOpenDelete) {
      deleteAppointment(id);
      handleDeleteCloseModal();
    } else {
      console.log("he is risen", isOpenDelete, isOpen);
      setIsOpenDelete(true);
      return;
    }
  };

  //CLOSE DELETE MODAL
  const handleDeleteCloseModal = () => {
    setIsOpenDelete(false);
  };

  //CLOSE MODAL
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="mx-4 my-4  ">
      <div className="my-4 flex justify-between">
        <span>Appointment</span>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-300 rounded-md shadow-md h-10 px-3 cursor-pointer hover:bg-gray-300"
        >
          Create Appointment
        </button>
      </div>

      <table className="border w-full h-full">
        <tr className="bg-gray-500 h-14">
          <th className="border">Image</th>
          <th className="border">Namee</th>
          <th className="border">Reason</th>
          <th className="border">Symptom</th>
          <th className="border">Specialist</th>
          <th className="border">Approval</th>
          <th className="border">CreatedAt</th>
        </tr>

        {data?.map((appointment) => (
          <AppointmentCard
            name={appointment.name}
            reason={appointment.reason}
            symptoms={appointment.symptoms}
            specialist={appointment.specialist}
            approval={appointment.approval.toString()}
            createdAt={String(appointment.createdAt)}
            deleterow={() => {
              handleDelete(appointment.appointmentId);
            }}
            key={appointment.appointmentId}
          />
        ))}
      </table>

      {/* modal Creation */}

      <AppointModalcard
        oncreate={createAppoint}
        isopen={isOpen}
        isclose={closeModal}
      />

      <DeleteModal
        isopen={isOpenDelete}
        deleteData={() => {
          handleDelete(rowId);
        }}
        closeDeleteModal={handleDeleteCloseModal}
      />
    </div>
  );
};

export default Appointment;
