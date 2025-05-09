import React, { useRef } from 'react'
import image1 from '../assets/image1.jpeg'
import { useState } from 'react';
import { useEffect } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Resume3 = (props) => {
  let data3 = localStorage.getItem('personalinfo');
  let result = JSON.parse(data3);
  console.log(result)
  let { uname, email, phn, linkedin, github, address, pic } = result;

  let data1 = localStorage.getItem('professionalDetails');
  let result1 = JSON.parse(data1);
  console.log(result1);
  let { experience, objective, projects } = result1;

  let data2 = localStorage.getItem('education')
  let result2 = JSON.parse(data2);
  console.log(result2);
  const { ssc, sscboard, ssccity, ssccountry, sscstart, sscend, inter, interboard, intercity, intercountry, interstart, interend, graduation, graname, gracity, gracountry, grastart, graend } = result2;

  let [data, setData] = useState({ lang: [], skills: [] });
  useEffect(() => {
    let stored = localStorage.getItem("skillLang");
    if (stored) {
      const parsed = JSON.parse(stored);
      setData(parsed);
    }
  }, []);


  let myref = useRef()
  const handleDownloadPDF = async () => {
    const element = myref.current;
    myref.current.classList.add('no-oklch');
    const canvas = await html2canvas(element, {
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
      <div ref={myref} className=' p-10'>
        <div className='bg-white w-200 box-shadow-c  m-auto flex '>
          <div className='bg-[#163853]  w-80'>
            <h3 className='pl-3'><b>contanct :-</b></h3>  <br></br>
            <ul>
              <li className='text-[12px] text-white pl-2'>{uname}</li>
              <li className='text-[12px] text-white pl-2'>{phn}</li>
              <li className='text-[12px] text-white pl-2' >{email}</li>
              <li className='text-[12px] text-white pl-2'>{address}</li>
              <li className='text-[12px] text-white pl-2'>{linkedin}</li>
            </ul>
            <h3 className='pl-3'><b>Skills :-</b></h3> <br />
            <ul className='pl-3  text-white'>
              {data.skills.map((skill, index) => (
                <li key={index} className='text-[12px] text-white'>{skill}</li>
              ))}
            </ul>
            <h3 className='pl-3'><b>Education :-</b></h3> <br></br>
            <ul>

              <li className='text-[14px]  text-white pl-2'> {graduation} , {graname},{gracity} ,{gracountry}---{grastart}-{graend}</li>
              <h3 className='pl-2'><b>Intermidiate :</b></h3>
              <li className='text-[14px]  text-white pl-2'> {inter} , {interboard}  {intercity} ,{intercountry}--{interstart} {interend}</li>
              <h3 className='pl-2'><b>SSC :</b></h3>
              <li className='text-[14px]  text-white pl-2'> {ssc} , {sscboard} ,{ssccity} ,{ssccountry}---{sscstart} {sscend}</li>
            </ul>
            <h3 className='pl-3'><b>Languages :-</b></h3> <br />
            <ul className='pl-3 '>
              {data.lang.map((language, index) => (
                <li key={index} className='text-white text-[14px]' >{language}</li>
              ))}
            </ul>
          </div>
          <div>

            <h3><b>Profile :-</b></h3>
            <hr></hr>
            <p className='text-[14px]'>{objective}
            </p>
            <br></br>

            <h3><b>Projects :-</b></h3>
            <hr></hr>
            <p className='text-[14px]'>{projects}
            </p>
            <br></br>
            <h3><b>Work Experience :-</b></h3>
            <p className='text-[14px]'> {experience}</p>
            <br></br>

            <h3><b>Certificates:-</b></h3>
            <hr></hr>
            <h2 className='text-[14px]  pl-2'>SalesForce developer provided by Apsce</h2>


          </div>

        </div>

      </div>
      <button onClick={handleDownloadPDF} className='bg-sky-400 px-7 py-2 text-white rounded mx-180 p-5' >Download Resume</button>
    </>
  )
}

export default Resume3;