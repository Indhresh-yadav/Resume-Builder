import React, { useRef } from 'react'
// import image2 from '../assets/image2.jpeg'
import { useEffect } from 'react';
import { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Resume2 = (props) => {
      let data3=localStorage.getItem('personalinfo');
        let result=JSON.parse(data3);
        console.log(result)
        let {uname,email,phn,linkedin,github,address,pic}=result;
    
        let data1=localStorage.getItem('professionalDetails');
        let result1=JSON.parse(data1);
        console.log(result1);
        let {experience,objective,projects}=result1;
    
        let data2=localStorage.getItem('education')
        let result2=JSON.parse(data2);
        console.log(result2);
        const{ssc,sscboard,ssccity,ssccountry,sscstart,sscend,inter,interboard,intercity,intercountry,interstart,interend,graduation,graname,gracity,gracountry,grastart,graend}=result2;

        let [data, setData] = useState({ lang: [], skills: [] });
        useEffect(() => {
          let stored = localStorage.getItem("skillLang");
          if (stored) {
            const parsed = JSON.parse(stored);
            setData(parsed);
          }
        }, []);


      let myref=useRef()
    const handleDownloadPDF = async () => {
    const element = myref.current;
      myref.current.classList.add('no-oklch');
    const canvas = await html2canvas(element,{
       backgroundColor: '#ffffff',
    });
    myref.current.classList.remove('no-oklch')
    const imageData = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imageData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imageData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('form.pdf');
  };
  
  return (
    <> 
    <main className="p-6 h-auto ">
      <div   ref={myref} className=" w-200 m-auto bg-[#FEF2F2] ">
        <div className="grid grid-cols-2 ">
          <ul className="grid grid-cols-3  p-2 w-190">
            <li className='text-[14px]'>{uname}</li> 
            <li className='text-[14px]'>{email}</li>
            <li className='text-[14px]'>{phn}</li>
            <li className='text-[14px]'>{linkedin}</li>
            <li className='text-[14px]'>{address}</li>
            <li className='text-[14px]'>{github}</li>
            
          </ul>
          
        </div>
        <div className='p-5'>
          <hr></hr>
          <h3><b>Profile:</b></h3><br />
          
          <p>
          {objective}
          </p> <br />
          <hr></hr>
          <h3><b>Projects:</b></h3><br/>
          
          <p>{projects}</p> <br/>
          <hr></hr>
          <h3><b>Work Experience</b></h3> <br/>
          <p>{experience}</p>
          <hr></hr>
          <h3><b>Skills</b></h3> <br/>
          <ul className='pl-3'>
              {data.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
              ))}
          </ul>
          <hr></hr>
          <h3><b>Education</b></h3> <br/>
          
          <ul>
             <h3 className='pl-2'>Graduation :</h3>
            <li className='text-[14px]  pl-2'> {graduation} , {graname}, {gracity} ,{gracountry}-------------{grastart}-{graend}</li>
            <h3 className='pl-2'>Intermidiate :</h3>
            <li className='text-[14px]  pl-2'> {inter} , {interboard}  {intercity} ,{intercountry}----------{interstart} {interend}</li>
            <h3 className='pl-2'>SSC :</h3>
            <li className='text-[14px]  pl-2'> {ssc} , {sscboard} ,{ssccity} ,{ssccountry}----------{sscstart} {sscend}</li>
        </ul>
        <hr></hr>
        <h3><b>Language</b></h3> <br/>
        
        <ul className='pl-3'>
        {data.lang.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <br/>
        </div>

      </div>
    </main>
      
           <button onClick={handleDownloadPDF} className='bg-sky-400 px-7 py-2 text-white rounded mx-180' >Download Resume</button> 
      
    </>
  )
}

export default Resume2