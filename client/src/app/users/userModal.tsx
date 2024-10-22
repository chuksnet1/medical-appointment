import React, { ChangeEvent, useState } from "react";

type userProps = {
  open: boolean;
  submit: (e: any) => void;
  close: ()=>void
};

const userModal = ({ open, submit, close }: userProps) => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password:"",
    phone: "",
  });

  console.log(open)
  //console.log(inputValue);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;

    setInputValue((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // const handleSubmit=()=>{
  //     submit(inputValue)
  //     setInputValue({
  //         email:"",
  //         name:"",
  //         phone:""
  //     })
  // }

  if (!open) return;

  const style = "border mx-4 h-8 rounded";

  return (
    <div>
      userModal
      <div className="fixed flex flex-col items-center pt-16 inset-0 bg-gray-300 bg-opacity-50 overflow-y-auto h-full w-full z-20">
        <div>
          <div className="flex flex-col items-center justify-center  bg-white h-96 w-80 self-center shadow-xl rounded-md">
            <h1>Register Your Data</h1>
            <div className="flex flex-col items-center gap-4 mt-4 pt-4 border rounded shadow-md">
              <input
                className={` ${style}`}
                placeholder="Enter your name"
                name="name"
                type="text"
                value={inputValue.name}
                onChange={handleInput}
              ></input>
              <input
                className={` ${style}`}
                placeholder="Enter your username"
                type="email"
                name="email"
                value={inputValue.email}
                onChange={handleInput}
              ></input>
              <input
                className={` ${style}`}
                placeholder="Enter your username"
                type="password"
                name="password"
                value={inputValue.password}
                onChange={handleInput}
              ></input>
              <input
                className={` ${style}`}
                placeholder="Enter your phone number"
                type="number"
                name="phone"
                value={inputValue.phone}
                onChange={handleInput}
              ></input>
              <button
                className="bg-blue-100 rounded h-8 w-20 mb-4"
                onClick={() => {
                  submit(inputValue);
                  setInputValue({ email: "", name: "", phone: "", password:"" });
                  close()
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userModal;
