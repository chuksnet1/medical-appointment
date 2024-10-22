import React, { ButtonHTMLAttributes, ChangeEvent, FormEvent, MouseEventHandler, useState } from "react";

type appointProps = {
  isopen: boolean;
  isclose: () => void;
  oncreate: (e: any) => void;
};

const appointModalcard = ({ isopen, isclose, oncreate }: appointProps) => {
  const [inputValue, setInputValue] = useState({
    name: "",
    reason: "",
    specialist: "",
    symptom: "",
  });

  console.log(inputValue);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputValue((prev) => {
      return { ...prev, [name]: value };
    });

    e.preventDefault();
  };


  const handleClick=()=>{
    oncreate(inputValue),
    setInputValue({
      name: "",
      reason: "",
      specialist: "",
      symptom: "",
    })
  }

  if (!isopen) return;

  return (
    <div>
      <div className="fixed flex flex-col items-center pt-8 inset-0 bg-gray-300 bg-opacity-50 overflow-y-auto h-full w-full z-20">
        <div className="h-1/2 w-1/2 md:w-96 bg-white border">
          <div className="flex justify-between px-3 my-3">
            <span>Schedule Appointment</span>
            <button
              className="bg-blue-100 rounded-md shadow-md w-4 font-bold"
              onClick={isclose}
            >
              X
            </button>
          </div>
          <hr />

          {/* Input fields */}

          <div className="flex flex-col px-6 gap-4 mt-8">
            <input
              className="border"
              placeholder="Enter your name"
              name="name" 
              required
              value={inputValue.name}
              onChange={handleChange}
            ></input>
            <input
              className="border"
              placeholder="Reason to see Doctor"
              name="reason"
              required
              value={inputValue.reason}
              onChange={handleChange}
            ></input>
            <input
              className="border"
              placeholder="what specialist "
              name="specialist"
              required
              value={inputValue.specialist}
              onChange={handleChange}
            ></input>
            <input
              className="border"
              placeholder="what are your symptom"
              name="symptom"
              required
              value={inputValue.symptom}
              onChange={handleChange}
            ></input>
            <button
              className="bg-blue-100 shadow-md hover:bg-blue-200 "
              onClick={handleClick}
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default appointModalcard;
