


const Formpage = () => {

  return (
    <>
      <div className='absolute left-95 top-10  p-10 bg-[#24B9E8]'>
        <h1 className='text-[30px] text-green-900 text-center'>Create your Resume</h1> <br></br>
        <form>
          <input type="text" placeholder='Enter your name' required className='outline-none border-1 h-[35px] p-[5px] rounded w-60 '></input><br></br> <br />
          <input type="email" placeholder='Enter your emailid' required className='outline-none border-1 h-[35px] p-[5px] rounded w-60 ' ></input><br></br><br></br>
          <input type="tel" placeholder='Enter your mobile number' required className='outline-none border-1 h-[35px] p-[5px] rounded w-60  '></input><br></br><br></br>
          <input type="text" placeholder='Enter your Address' className='outline-none border-1 h-[35px] p-[5px] rounded w-60 '></input><br></br><br></br>
          <input type="url" placeholder='paste your linkdin profile url' className='outline-none border-1 h-[35px] p-[5px] rounded w-60 '></input><br></br><br></br>
          <input type="url" placeholder='paste your linkdin profile url' className='outline-none border-1 h-[35px] p-[5px] rounded w-60  '></input><br></br><br></br>
          <fieldset className=' border-none  '>
            <legend className=" text-xl font-semibold mb-3">Profile Information</legend>
            <textarea name="message" placeholder="Write your profile information  here..." className='outline-none w-200 h-30 border-2 border-red-200 rounded-[10px]'></textarea>
          </fieldset>
          <fieldset className=' border-none  '>
            <legend className="text-xl font-semibold mb-3">Projects</legend>
            <textarea name="message" placeholder="explain your projects  here..." className='outline-none w-200 h-30 border-2 border-red-200 rounded-[10px]'></textarea>
          </fieldset>
          <label>Choose your Skill :-</label> <br></br>
          <select className='mb-2 w-full h-[35px] outline-none border'>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
            <option value="react">React</option>
            <option value="nodejs">Node.js</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
            <option value="spring">Spring boot</option>
            <option value="hibernate">Hibernate</option>
            <option value="kotlin">Kotlin</option>
            <option value="dotnet">dot.net</option>
            <option value="ms-excel">Ms-excel</option>
            <option value="ms-window">ms-window</option>
            <option value="sql">SQL</option>
            <option value="git">Git</option>
          </select> <br></br>
          <label>Choose your Language :-</label> <br></br>
          <select  className='mb-2 w-full h-[35px] border'>
            <option value="english">English</option>
            <option value="telugu">Telugu</option>
            <option value="kannada">Kannada</option>
            <option value="tamil">Tamil</option>
            <option value="odisha">Odisha</option>
            <option value="tulu">Tulu</option>
            <option value="hindi">Hindi</option>

          </select>
        </form>
        <form>
          <h3 className="text-xl font-semibold mb-3">Education:- </h3>
          <label>Degree :-   </label>
          <input placeholder='Enter Degree/ Field Of Study' required className='border-2 rounded-[10px] w-60 ' ></input><br></br> <br />
          <label>School   :- </label>
          <input placeholder='Enter your School /University' required className='border-2 rounded-[10px] w-60 '></input><br></br> <br />
          <div className="flex gap-6">
            <label>city :-   </label>
            <input placeholder='Enter your city' className='border-2 rounded-[10px] w-60  gap-20'></input>
            <label>Country :-   </label>
            <input placeholder='Enter your Country' className='border-2 rounded-[10px] w-60 '></input>
            <label>End Date</label>
            <select className='mb-2 rounded-[15px]'>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>
        </form>


      </div>
    </>
  )
}

export default Formpage
