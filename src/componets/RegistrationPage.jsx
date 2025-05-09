import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const RegistrationPage = () => {
  const navigate=useNavigate();
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
  });
  let { firstName, lastName, email, password, mobile } = register;
  const handleChange = (e) => {
    let { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem('register',JSON.stringify(register));
    // console.log(register)
    toast.success("Registration Successful")
    
  };

  return (
    <>
    <h1 className="text-right   h-155 py-15 px-100 text-[25px] text-orange-400">SocialHire Resume Builder</h1>
      <div className="absolute bottom-20 left-200 box-shadow-r w-100 h-140 pt-40 pl-25 rounded-xl border-red-500 ">
        
        <form onSubmit={handleRegister}>
          <input
            required
            type="text"
            name="firstName"
            placeholder="Enter Your FirstName"
            value={firstName}
            onChange={handleChange}
            className="rounded-md border-b-2 w-50"
          />
          <br />
          <br />
          <input
            type="text"
            name="lastName"
            placeholder="Enter Your Lastname"
            value={lastName}
            onChange={handleChange}
            className="rounded-md border-b-2 w-50"
          />
          <br />
          <br />
          <input
            type="text"
            name="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={handleChange}
            className="rounded-md border-b-2 w-50"
          />
          <br />
          <br />
          <input
            type="text"
            name="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={handleChange}
            className="rounded-md border-b-2 w-50"
          />
          <br />
          <br />
          <input
            type="text"
            name="mobile"
            placeholder="Enter Your Mobile Number"
            value={mobile}
            onChange={handleChange}
            className="rounded-md border-b-2 w-50"
          />
          <br />
          <br />
          <div className="flex gap-5">
            <button type="submit" className="bg-sky-400 rounded text-white h-[35px] w-[120px]  text-[14px] font-[500] hover:bg-sky-700 hover:cursor-pointer " onClick={()=>navigate("/login")}>Register</button>
           <button className=" bg-sky-400 rounded text-white h-[35px] w-[120px]  text-[14px] font-[500] hover:bg-sky-700 hover:cursor-pointer" onClick={() => navigate("/login")}>Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistrationPage;
