import React from 'react'
import image1 from '../assets/image1.jpeg'

const Template3 = (props) => {
  console.log(props.id);
  return (
    <> 
   <div className='bg-white h-136 w-100 border-2  flex '>
    <div className='bg-[#163853] h-135.5 w-40 '>
        <img src={image1} className='rounded-full p-5'></img>
      <h3 className='pl-3'><b>contanct :-</b></h3> 
      <ul>
        <li className='text-[10px] text-white pl-2'>9959410482</li>
        <li className='text-[10px] text-white pl-2' >gollaindresh201@gmail.com</li>
        <li className='text-[10px] text-white pl-2'>punjagutta hyderabad</li>
        <li className='text-[10px] text-white pl-2'>www.linkdin.com</li>
      </ul>
      <h3 className='pl-3'><b>Skills :-</b></h3>
      <ul>
            <li className='text-[10px] text-white pl-2'>java</li>
            <li className='text-[10px] text-white pl-2'>Reacjs</li>
            <li className='text-[10px] text-white pl-2'>html</li>
            <li className='text-[10px] text-white pl-2'>css</li>
      </ul>
      <h3 className='pl-3'><b>Education :-</b></h3>
      <ul>
            <li className='text-[10px] text-white pl-2'><b>Bsc</b>-sv degree college, Anatapur</li>
            <li className='text-[10px] text-white pl-2'><b>Puc</b>-Lrg naidu jr college ,hindupur</li>
            <li className='text-[10px] text-white pl-2'><b>SSC</b> -balayasu boys vidyalaya,hindupur</li>
          
      </ul>
      <h3 className='pl-3'><b>Languages :-</b></h3>
      <ul>
            <li className='text-[10px] text-white pl-2'>kannada</li>
            <li className='text-[10px] text-white pl-2'>English</li>
            <li className='text-[10px] text-white pl-2'>Telugu</li>
          
      </ul>
    </div>
    <div>
            
            <h3><b>Profile :-</b></h3>
            <hr></hr>  
            <p  className='text-[10px]'>A motivated individual with in-depth knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills .
            </p>
            <br></br>
           
            <h3><b>Projects :-</b></h3>
            <hr></hr>   
            <p  className='text-[10px]'>A motivated individual with in-depth knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills .
            </p>
            <br></br>
            <h3><b>Work Experience :-</b></h3>
            <ul>
            <li className='text-[12px]  pl-2'>
            -Developed responsive web applications using React.js, delivering dynamic and seamless user experiences across desktop and mobile platforms.
            </li>
            <li className='text-[12px]  pl-2'>
            -Built and integrated RESTful APIs with Java Spring Boot to ensure smooth communication between front-end and back-end systems.
            </li>
            <li className='text-[12px]  pl-2'>
            -Designed and implemented interactive UI components with HTML5, CSS3, and JavaScript, adhering to modern design principles and accessibility standards.
            </li>
          
      </ul>
      <br></br>

      <h3><b>Certificates:-</b></h3>
            <hr></hr> 
          <h2 className='text-[12px]  pl-2'>SalesForce developer provided by Apsce</h2>
          
          
    </div>

    </div>
    </>
  )
}

export default Template3