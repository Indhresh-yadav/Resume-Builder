import React from 'react'

const Template1 = (props) => {
  console.log(props.id);
  
  return (
    <> 
   <div className='bg-white h-135 w-100 border-1 '>
    <h1 className='pl-2 pt-2 text-[14px]'>G INDHRESH</h1>
    
       <ul className='flex grid grid-cols-2 p-2'>
          <li className='text-[14px] '><b>9959410482</b></li>
          <li className='text-[14px] ' ><b>gollaindresh201@gmail.com</b></li>
          <li className='text-[14px] '><b>punjagutta hyderabad</b></li>
          <li className='text-[14px]  '><b>www.linkdin.com</b></li>
      </ul>
          <hr></hr>
          <hr></hr>
            <h3 className='p-2'><b>Profile :-</b></h3>
            
            <p  className='text-[10px] pl-2'>A motivated individual with in-depth knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills .
            </p>
            <h3 className='p-2'><b>Projects :-</b></h3>  
            <p  className='text-[10px] pl-2 '>A motivated individual with in-depth knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills .
            </p>
            
            <h3 className='p-2'><b>Education :-</b></h3>
        <ul>
            <li className='text-[12px]  pl-2'><b>Bsc</b>-sv degree college, Anatapur</li>
            <li className='text-[12px]  pl-2'><b>Puc</b>-Lrg naidu jr college ,hindupur</li>
            <li className='text-[12px]  pl-2'><b>SSC</b> -balayasu boys vidyalaya,hindupur</li>
          
       </ul>
           <h3 className='pl-2'><b>Skills :-</b></h3>
        <ul>
            <li className='text-[12px]  pl-2'>java</li>
            <li className='text-[12px]  pl-2'>Reacjs</li>
            <li className='text-[12px]  pl-2'>html</li>
            <li className='text-[12px]  pl-2'>css</li>
            <li className='text-[12px]  pl-2'>JavaScript</li>
       </ul>
       
      <h3 className='pl-2'><b>Certificates:-</b></h3>
      <h2 className='text-[12px]  pl-2'>SalesForce developer provided by Apsce</h2>
      <h3 className='p-2'><b>Language :-</b></h3>
      <ul className='flex gap-20 pl-2'>
          <li className='text-[12px]'>English</li>
          <li className='text-[12px]'>Kannada</li>
          <li className='text-[12px]'>Telugu</li>
      </ul>

    </div>
    </>
  )
}

export default Template1
