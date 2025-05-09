import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EducationDetails = () => {
    const navigate=useNavigate();

    const[education,setEducation]=useState({
       ssc:'',
       sscboard:'',
       ssccity:'',
       ssccountry:'',
       sscstart:'',
       sscend:'',
       inter:'',
       interboard:'',
       intercity:'',
       intercountry:'',
       interstart:'',
       interend:'',
       graduation:'',
       graname:'',
       gracity:'',
       gracountry:'',
       grastart:'',
       graend:''

    })

    const{ssc,sscboard,ssccity,ssccountry,sscstart,sscend,inter,interboard,intercity,intercountry,interstart,interend,graduation,graname,gracity,gracountry,grastart,graend}=education;

    let handleChange=(e)=>{
        let {name,value}=e.target

        setEducation({...education,[name]:value})

    }

    let handleSubmit=(e)=>{
        e.preventDefault()

        console.log(education);
        localStorage.setItem("education",JSON.stringify(education))
        
    }
    



  return (
    <>
      <main className="border h-[calc(90vh)] w-[calc(100vw)] flex justify-center items-center">
        <form onSubmit={handleSubmit} className="rounded-[10px] h-[100%] w-[50%] box-shadow-c px-3 ">
          <legend className="text-center text-[15px] font-[400] py-2  ">
            Educational Details
          </legend>

        <div className="h-[80%] w-full flex flex-col gap-y-7 items-start px-2 py-6">
        <div>
                    <label>School level Education</label>
                    <input
                        type="text"
                        name="ssc"
                        value={ssc}
                        onChange={handleChange}
                        id=""
                        placeholder="Enter your school name"
                        className="outline-none border-b-3 w-full h-[30px] placeholder-gray-500 border-b-orange-400 "
                    />
                    <input
                        type="text"
                        name="sscboard"
                        id=""
                        value={sscboard}
                        onChange={handleChange}
                        placeholder="Enter your board name"
                        className="outline-none border-b-3 w-full h-[30px] placeholder-gray-500 border-b-orange-400 "
                    />
                      <div className="flex gap-20">
                    <input
                        type="text"
                        name="ssccity"
                        id=""
                        value={ssccity}
                        onChange={handleChange}
                        placeholder="Enter your city name"
                        required
                        className="outline-none border-b-3 w-full h-[30px] placeholder-gray-500 border-b-orange-400 "
                    />
                    <input
                        type="text"
                        name="ssccountry"
                        id=""
                        value={ssccountry}
                        onChange={handleChange}
                        placeholder="Enter your country name"
                        required
                        className="outline-none border-b-3 w-full h-[30px] placeholder-gray-500 border-b-orange-400 "
                    />
                    </div> 
                    <div className="flex gap-10">
                            <label>Start date</label>
                        <br></br>
                        <input
                        type="date"
                        name="sscstart"
                        id=""
                        value={sscstart}
                        onChange={handleChange}
                        className="outline-none border-b-3 w-[150px] h-[30px] placeholder-gray-500 border-b-orange-400 "
                        />
                        <br></br>
                        <label>End date</label>
                        <br></br>
                        <input
                        type="date"
                        name="sscend"
                        id=""
                        value={sscend}
                        onChange={handleChange}
                        className="outline-none border-b-3 w-[150px] h-[30px] placeholder-gray-500 border-b-orange-400 "
                        />
                    </div>
            </div>


            <div>
                    <label>higher level Education</label>
                    <input
                        type="text"
                        name="inter"
                        value={inter}
                        onChange={handleChange}
                        id=""
                        placeholder="Enter your school name"
                        className="outline-none border-b-3 w-full h-[30px] placeholder-gray-500 border-b-orange-400 "
                    />
                    <input
                        type="text"
                        name="interboard"
                        id=""
                        value={interboard}
                        onChange={handleChange}
                        placeholder="Enter your board name"
                        className="outline-none border-b-3 w-full h-[30px] placeholder-gray-500 border-b-orange-400 "
                    />
                      <div className="flex gap-20">
                    <input
                        type="text"
                        name="intercity"
                        id=""
                        value={intercity}
                        onChange={handleChange}
                        placeholder="Enter your city name"
                        required
                        className="outline-none border-b-3 w-full h-[30px] placeholder-gray-500 border-b-orange-400 "
                    />
                    <input
                        type="text"
                        name="intercountry"
                        id=""
                        value={intercountry}
                        onChange={handleChange}
                        placeholder="Enter your country  name"
                        required
                        className="outline-none border-b-3 w-full h-[30px] placeholder-gray-500 border-b-orange-400 "
                    />
                    </div> 
                    <div className="flex gap-10">
                            <label>Start date</label>
                        <br></br>
                        <input
                        type="date"
                        name="interstart"
                        id=""
                        value={interstart}
                        onChange={handleChange}
                        className="outline-none border-b-3 w-[150px] h-[30px] placeholder-gray-500 border-b-orange-400 "
                        />
                        <br></br>
                        <label>End date</label>
                        <br></br>
                        <input
                        type="date"
                        name="interend"
                        id=""
                        value={interend}
                        onChange={handleChange}
                        className="outline-none border-b-3 w-[150px] h-[30px] placeholder-gray-500 border-b-orange-400 "
                        />
                    </div>
            </div>
            
            <div>
                    <label>Graduation</label>
                    <input
                        type="text"
                        name="graduation"
                        value={graduation}
                        onChange={handleChange}
                        id=""
                        placeholder="Enter your degree"
                        className="outline-none border-b-3 w-full h-[30px] placeholder-gray-500 border-b-orange-400 "
                    />
                    <input
                        type="text"
                        name="graname"
                        id=""
                        value={graname}
                        onChange={handleChange}
                        placeholder="Enter your  university / college"
                        className="outline-none border-b-3 w-full h-[30px] placeholder-gray-500 border-b-orange-400 "
                    />
                      <div className="flex gap-20">
                    <input
                        type="text"
                        name="gracity"
                        id=""
                        value={gracity}
                        onChange={handleChange}
                        placeholder="Enter your city name"
                        required
                        className="outline-none border-b-3 w-full h-[30px] placeholder-gray-500 border-b-orange-400 "
                    />
                    <input
                        type="text"
                        name="gracountry"
                        id=""
                        value={gracountry}
                        onChange={handleChange}
                        placeholder="Enter your country  name"
                        required
                        className="outline-none border-b-3 w-full h-[30px] placeholder-gray-500 border-b-orange-400 "
                    />
                    </div> 
                    <div className="flex gap-10">
                            <label>Start date</label>
                        <br></br>
                        <input
                        type="date"
                        name="grastart"
                        id=""
                        value={grastart}
                        onChange={handleChange}
                        className="outline-none border-b-3 w-[150px] h-[30px] placeholder-gray-500 border-b-orange-400 "
                        />
                        <br></br>
                        <label>End date</label>
                        <br></br>
                        <input
                        type="date"
                        name="graend"
                        id=""
                        value={graend}
                        onChange={handleChange}
                        className="outline-none border-b-3 w-[150px] h-[30px] placeholder-gray-500 border-b-orange-400 "
                        />
                    </div>
            </div>

        </div>
          <div className="p-6 flex justify-end gap-x-2">
          <button
              className="bg-sky-400 rounded text-white h-[35px] w-[120px] px-3 text-[14px] font-[500] hover:bg-sky-700 hover:cursor-pointer "
              onClick={() => navigate("/proffessional")}
            >
              Back
            </button>

                <button
                className="bg-orange-400 rounded text-white h-[35px] w-[120px] px-3 text-[14px] font-[500] hover:bg-sky-700 hover:cursor-pointer "
                onClick={() => navigate("/skills")}
                >
                Next
                </button>
            </div>
        </form>
      </main>
    </>
  );
};

export default EducationDetails;
