import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [userData, setUserData] = useState('')

  

  const submitHandler = (e)=>{
    e.preventDefault();
    setUserData({
      fullname: {
        firstname: firstname,
        lastname: lastname
      },
      password: password,
      email: email
    })

    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />

        <form onSubmit={(e)=>{submitHandler(e)}} action="">

          <h3 className='text-lg font-medium mb-2'>What's your name</h3>
          <div className='flex gap-4 mb-5'>
            <input required className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base' type="text" name="" id="" placeholder='firstname' value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} />
            <input className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base' type="text" name="" id="" placeholder='lastname' value={lastname} onChange={(e)=>{setLastname(e.target.value)}}  />
          </div>


          <h3 className='text-lg font-medium mb-2'>Enter your email</h3>
          <input required className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" name="" id="" placeholder='email@example.com' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          <h3 className='text-lg font-medium mb-2'>Enter password</h3>
          <input  className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base' required  type="password" name="" id="" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>
        </form>
        <p className="text-center">Already have a Account?  <Link to='/login' className="text-blue-600">Login here</Link></p>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service</span> apply.</p>
      </div>
    </div>
    )
}

export default UserSignup