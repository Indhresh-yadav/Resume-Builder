import React, { useState ,useEffect, useRef } from 'react'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



const Resume1 = () => {
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
    const [data, setData] = useState({ lang: [], skills: [] });
    useEffect(() => {
      const stored = localStorage.getItem("skillLang");
      if (stored) {
        const parsed = JSON.parse(stored);
        setData(parsed);
      }
    }, []);


    let myref=useRef()
    const handleDownloadPDF = async () => {
    const element = myref.current;

    const canvas = await html2canvas(element);
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
   <div ref={myref} className='bg-white  w-200 .box-shadow-c   m-auto my-10 p-[8px]'>
         <ul className='flex grid grid-cols-3 pl-3'>
          <h1 className='pl-2  text-[12px]'>{uname}</h1>
          <li className='text-[12px] '><b>{phn}</b></li>
          <li className='text-[12px] ' ><b>{email}</b></li>
          <li className='text-[12px] '><b>{address}</b></li>
          <li className='text-[12px]  '><b>{linkedin}</b></li>
          <li className='text-[12px]  '><b>{github}</b></li>
          
      </ul>
          <br />
          <br />
          <hr  className='py-2'/>
            <h3 className='p-1'><b>Profile :-</b></h3>
            
            <p  className='text-[12px] p-2'>{objective}
            </p>
            <h3 className='p-2'><b>Projects :-</b></h3>  
            <p  className='text-[10px] pl-2 '>{projects}
            </p>
            
            <h3 className='p-2'><b>Education :-</b></h3>
        <ul>
             <h3 className='pl-2'><b>Graduation :</b></h3>
            <li className='text-[14px]  pl-2'> {graduation} , {graname}, {gracity} ,{gracountry}-------------{grastart}-{graend}</li>
            <h3 className='pl-2'><b>Intermidiate :</b></h3>
            <li className='text-[14px]  pl-2'> {inter} , {interboard}  {intercity} ,{intercountry}----------{interstart} {interend}</li>
            <h3 className='pl-2'><b>SSC :</b></h3>
            <li className='text-[14px]  pl-2'> {ssc} , {sscboard} ,{ssccity} ,{ssccountry}----------{sscstart} {sscend}</li>
        </ul>
           <h3 className='pl-2'><b>Skills :-</b></h3>
           <ul className='pl-3'>
        {data.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      
      <h3 className='p-2'><b>Language :-</b></h3>
      <ul className='pl-3'>
        {data.lang.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
    </div>
        <button onClick={handleDownloadPDF} className='bg-sky-400 px-7 py-2 text-white rounded mx-180' >Download Resume</button>
        
    </>
  )
}


export default Resume1
