import React from 'react'
import image2 from '../assets/image2.jpeg'

const Template2 = (props) => {
  console.log(props.id);
  return (
    <> 
    
   <div className='bg-white h-138 w-100 '>
     <div className='bg-red-50 h-136 w-99.6 '>
        <img src={image2} className='rounded-full  w-30 h-30 absolute left-198 pt-3'></img>
        <div className='p-5'>
        <h1 className=' text-2xl'>G Rajini</h1> 
        <h3><b>gollarajini9959@gmail.com</b></h3>
        <h3>9959410482</h3> <br/>
       <div>
        <div>
          <hr></hr>
            <h3><b>Profile :-</b></h3>
            <hr></hr>  
            <p  className='text-[10px]'>A motivated individual with in-depth knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills .
            </p>
        </div>
        <div>
            <hr></hr>
            <h3><b>Projects :-</b></h3>
            <hr></hr>   
            <p  className='text-[10px]'>A motivated individual with in-depth knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills .
            </p>
        </div>
        <div>
        <hr></hr>
          <h3><b>Skills :-</b></h3>
          <hr></hr>
          <ul>
            <li>java</li>
            <li>Reacjs</li>
            <li>html</li>
            <li>css</li>
          </ul>
        </div>
        <div>
            <hr></hr>
            <h3><b>Education :-</b></h3>
            <hr></hr>  
            <ul>
              <li>Bsc- sv degree college, Anatapur</li>
              <li>Intermidaite- sv degree college ,Anatapur</li>
              <li>ssc- sv degree college, Anatapur</li>
            </ul>
        </div>
        <div>

        </div>
       </div>
         <hr></hr>
            <h3><b>Language :-</b></h3>
            <hr></hr> 
            <ul className='flex gap-20'>
              <li>English</li>
              <li>Kannada</li>
              <li>Telugu</li>
            </ul>
        </div>
            
     </div>

    </div>
    </>
  )
}

export default Template2