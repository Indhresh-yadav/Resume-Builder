import React from 'react'
import Template1 from './Template1'
import Template2 from './Template2'
import Template3 from './Template3'
import { useNavigate } from 'react-router-dom'


const SelectionPage = () => {
    // let navigate=useNavigate();
    const navigate = useNavigate();
 const handleClick =()=>{
    navigate("/resume1")
 }

    
  return (
 <>
    
      <ul className=' flex  justify-around items-center h-[calc(100vh-60px)] w-[350] p-3 pt-1'>
    <li onClick={handleClick}>
        <Template1 id={1}/>
    </li>
    <li onClick={() => navigate("/resume2")}> 
        <Template2 id={2}/>
    </li>
    <li onClick={() => navigate("/resume3")}>
        <Template3 id={3} />
    </li>
 </ul>
  
 <button
              className="bg-sky-400 rounded text-white h-[35px] w-[120px] mx-180  text-[14px] font-[500] hover:bg-sky-700 hover:cursor-pointer  "
              onClick={() => navigate("/skills")}
            >
              Back
            </button>
 </>
  )
}

export default SelectionPage
