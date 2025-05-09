import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PersonalInfo = () => {
  let navigate = useNavigate();

  const [personalInfo, setPersonalInfo]=useState({
    uname:"",
    email:"",
    phn:"",
    linkedin:"",
    github:"",
    address:"",
    pic:null

  })

  const {uname,email,phn,linkedin,github,address,pic}=personalInfo

  let handleChange=(e)=>{

    let {name,value,type,files}=e.target

    setPersonalInfo({...personalInfo,[name]:type==='file' ?files[0]:value})
  }
  
  let handleSubmit=(e)=>{
    e.preventDefault();
    
    console.log(personalInfo);

    localStorage.setItem("personalinfo",JSON.stringify(personalInfo))
    
  }
  

  return (
    <>
      <main className="border h-[calc(90vh)] w-[calc(100vw)] flex justify-center items-center">
        <form onSubmit={handleSubmit} className="rounded-[10px] h-[75%] w-[50%] box-shadow-c px-3 ">
          <legend className="text-center text-[18px] font-[500] py-2  ">
            Personal Information
          </legend>

          <div className="h-[80%] flex flex-col justify-between items-start px-2 py-2">
            <input
              type="text"
              name="uname"
              id=""
              value={uname}
              onChange={handleChange}
              placeholder="Enter Your Name"
              required
              className="outline-none border-b-3 w-full h-[35px] placeholder-gray-500 border-b-sky-400 "
            />
            <input
              type="email"
              name="email"
              id=""
              value={email}
              onChange={handleChange}
              placeholder="Enter Your Mail "
              required
              className="outline-none border-b-3 w-full h-[35px] placeholder-gray-500 border-b-sky-400 "
            />
            <input
              type="tel"
              name="phn"
              value={phn}
              onChange={handleChange}
              placeholder="Enter Your Mobile Number"
              required
              className="outline-none border-b-3 w-full h-[35px] placeholder-gray-500 border-b-sky-400 "
            />
            <input
              type="url"
              name="linkedin"
              id=""
              value={linkedin}
              onChange={handleChange}
              placeholder="Enter Your Linedin Url"
              className="outline-none border-b-3 w-full h-[35px] placeholder-gray-500 border-b-sky-400 "
            />
            <input
              type="url"
              name="github"
              id=""
              value={github}
              onChange={handleChange}
              placeholder="Enter Your Github url"
              className="outline-none border-b-3 w-full h-[35px] placeholder-gray-500 border-b-sky-400 "
            />
            <input
              type="text"
              name="address"
              value={address}
              onChange={handleChange}
              placeholder="Enter Your Address"
              className="outline-none border-b-3 w-full h-[35px] placeholder-gray-500 border-b-sky-400 "
            />
            <input
              type="file"
              name="pic"
              
              onChange={handleChange}
              placeholder="Insert Your Picture"
              className="outline-none border-b-3 w-full h-[35px] placeholder-gray-500 border-b-sky-400 "
            />
          </div>
          <div className="p-3 text-right">
            <button
              className="bg-sky-400 rounded text-white h-[35px] w-[120px] px-3 text-[14px] font-[500] hover:bg-sky-700 hover:cursor-pointer "
              onClick={() => navigate("/proffessional")}
            >
              Next
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default PersonalInfo;
