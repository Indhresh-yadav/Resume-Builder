import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Skills = () => {
    let navigate=useNavigate()
    const[skillLang,setSkilsLang]=useState({
        skills:[],
        lang:[]
    })

    const{skills,lang}=skillLang
    let handleChange=(e)=>{
        const { name, value, checked } = e.target;
        setSkilsLang((prev) => {
            const updated = checked
              ? [...prev[name], value]
              : prev[name].filter((item) => item !== value);
          
            return {
              ...prev,
              [name]: updated,
            };
          });
    }

    let handleSubmit=(e)=>{
        e.preventDefault();

        console.log(skillLang);
        localStorage.setItem("skillLang" ,JSON.stringify(skillLang))
        
    }

  return (
    
    <>
    <main className="border h-[calc(90vh)] w-[calc(100vw)] flex justify-center items-center">
        <form onSubmit={handleSubmit} className="rounded-[10px] h-[85%] w-[50%] box-shadow-c px-3 ">
          <legend className="text-center text-[18px] font-[500] py-2  ">
            Skills
          </legend>
          <legend><b>Technical Skills</b></legend>

          <input type='checkbox' name='skills' value="Java"  onChange={handleChange} checked={skills.includes("Java")}></input><label htmlFor="" >Java</label><br></br>
          <input type='checkbox' name='skills' value="Html"  onChange={handleChange} checked={skills.includes("Html")}></input><label htmlFor="">Html</label><br></br>
          <input type='checkbox' name='skills' value="Css"  onChange={handleChange} checked={skills.includes("Css")}></input><label htmlFor="">Css</label> <br></br>
          <input type='checkbox' name='skills' value="JavaScript"  onChange={handleChange} checked={skills.includes("JavaScript")}></input> <label htmlFor="">JavaScript</label> <br></br>
          <input type='checkbox' name='skills' value="ReactJs"  onChange={handleChange} checked={skills.includes("ReactJs")}></input> <label htmlFor="">Reactjs</label><br></br>
          <input type='checkbox' name='skills' value="Node Js"  onChange={handleChange} checked={skills.includes("Node Js")}></input> <label htmlFor="">Node Js</label><br></br>
          <input type='checkbox' name='skills' value="MongoDb"  onChange={handleChange} checked={skills.includes("MongoDb")}></input>  <label htmlFor="">Mogodb</label> 
           <br /><br />
           <hr className='text-gray-300' />
           <br />
          <legend><b>Language Known</b></legend>
          <input type='checkbox' name='lang' value="Kannada" onChange={handleChange} checked={lang.includes("Kannada")}></input><label htmlFor="">Kannada</label> <br></br>
          <input type='checkbox' name='lang' value="Hindi" onChange={handleChange} checked={lang.includes("Hindi")}></input><label htmlFor="" >Hindi</label><br></br>
          <input type='checkbox' name='lang' value="English" onChange={handleChange} checked={lang.includes("English")}></input><label htmlFor="">English</label><br></br>
          <input type='checkbox' name='lang' value="Telugu" onChange={handleChange} checked={lang.includes("Telugu")}></input> <label htmlFor="">Telugu</label> <br></br>
          <input type='checkbox' name='lang' value="Odia" onChange={handleChange} checked={lang.includes("Odia")}></input> <label htmlFor="">Odia</label><br></br>
          <input type='checkbox' name='lang' value="Tulu" onChange={handleChange} checked={lang.includes("Tulu")}></input> <label htmlFor="">Tulu</label><br></br>
          <input type='checkbox' name='lang' value="Marath" onChange={handleChange} checked={lang.includes("Marath")}></input>  <label htmlFor="">Marathi</label> 

          <div className="p-3 flex justify-end gap-x-2">
          <button
              className="bg-sky-400 rounded text-white h-[35px] w-[120px] px-3 text-[14px] font-[500] hover:bg-sky-700 hover:cursor-pointer "
              onClick={() => navigate("/educationdetails")}
            >
              Back
            </button>


            <button
              className="bg-sky-400 rounded text-white h-[35px] w-[120px] px-3 text-[14px] font-[500] hover:bg-sky-700 hover:cursor-pointer "
             onClick={()=>navigate("/selectionpage")}
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </>
  )
}

export default Skills
