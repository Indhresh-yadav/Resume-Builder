import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProfessionalDetails = () => {
    const navigate=useNavigate();
    const[professionalDetails,setPersonalDetails]=useState({
        objective:"",
        experience:"",
        projects:""
    })

    let {objective,experience,projects}=professionalDetails

    let handleChange=(e)=>{
        let {name,value}=e.target
        setPersonalDetails({...professionalDetails,[name]:value})
    }
    let handleSubmit=(e)=>{
        e.preventDefault();

        console.log(professionalDetails);
        
        localStorage.setItem("professionalDetails",JSON.stringify(professionalDetails))
    }

  return (
    <>
       <main className="border h-[calc(90vh)] w-[calc(100vw)] flex justify-center items-center">
        <form onSubmit={handleSubmit} className="rounded-[10px] h-80%] w-[50%] box-shadow-c px-3 ">
          <legend className="text-center text-[18px] font-[500] py-2  ">
           Professional Information
          </legend>

          <div className="h-[80%] flex flex-col justify-between items-start px-2 py-2">
           <div className='w-full'>
           <label htmlFor="co" className='text-[16px] font-[500]'>Carrer Objective</label>
            <textarea 
              type="text"
              name="objective"
              id=""
              value={objective}
              onChange={handleChange}
              placeholder="Tell about your projects"
              className="outline-none border px-2 w-full h-[135px] placeholder-gray-500  "
            />
           </div>
           <div className='w-full'>
            <label htmlFor="exp" className='text-[16px] font-[500]'>Projects</label>
            <textarea 
              type="text"
              name="projects"
              id=""
              value={projects}
              onChange={handleChange}
              placeholder="Type about your work experience"
              className="outline-none border px-2 w-full h-[135px] placeholder-gray-500  "
            />

            </div>

            <div className='w-full'>
            <label htmlFor="exp" className='text-[16px] font-[500]'>Work Experience</label>
            <textarea 
              type="text"
              name="experience"
              id=""
              value={experience}
              onChange={handleChange}
              placeholder="Type about your work experience"
              className="outline-none border px-2 w-full h-[135px] placeholder-gray-500  "
            />

            </div>
            
            
          </div>
          <div className="p-3 flex justify-end gap-x-2">
          <button
              className="bg-sky-400 rounded text-white h-[35px] w-[120px] px-3 text-[14px] font-[500] hover:bg-sky-700 hover:cursor-pointer "
              onClick={() => navigate("/")}
            >
              Back
            </button>


            <button
              className="bg-sky-400 rounded text-white h-[35px] w-[120px] px-3 text-[14px] font-[500] hover:bg-sky-700 hover:cursor-pointer "
              onClick={() => navigate("/educationdetails")}
            >
              Next
            </button>
          </div>
        </form>
      </main>
    </>
  )
}

export default ProfessionalDetails
