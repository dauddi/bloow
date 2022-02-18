import React, {useState} from 'react'

import { ToastContainer, toast } from 'react-toastify';

const testUser = {
  email: "demo@bloow.com",
  password: "demo",
}
const emailExp = new RegExp(/^demo\@bloow\.com$/);
const passExp = new RegExp(/^demo$/);

console.log(typeof(testUser.email));

const compareEmailAndPassword = (testUser, credentials) => {
  const { email, password } = credentials;
  if (email.match(emailExp)?.length && password.match(passExp)?.length) {
    return 200;
  } return 401;
}

const AuthForm = ({ authenticate, dispatch }) => {
  const [credentials, setCredentials] = useState({});

  const handleEmailChange = (e) => {
    setCredentials({...credentials, email: e.target.value })
  }
  
  const handlePasswordChange = (e) => {
      setCredentials({...credentials, password: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = compareEmailAndPassword(testUser, credentials);
    
    if (res === 200) {
      toast.success("🎉 Login Success!!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: "",
    })
      setTimeout(() => {
        dispatch(authenticate());
      }, 1000);
    } else {
      toast.error("Invalid Email or Password", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: "",
    })
    }
  }
  
  return (
    <div className='w-full flex flex-col justify-center items-center md:h-screen ' >
      <div className="text-2xl md:text-3xl font-extrabold text-indigo-800 " >
        <h1>Welcome to Bloow Music</h1>
        <h2 className=' p-3 text-xl text-indigo-900' >Login to continue listening</h2>
      </div>

      <form action="submit" onSubmit={handleSubmit} className='w-[100%] lg:w-[80%] flex flex-col items-center justify-center' >
        <div className="w-full mt-4" >
          <input type="text" className="w-[100%] p-4 rounded-lg font-semibold text-md md:text-lg border-indigo-400 " autoComplete='email' value={credentials.email} onChange={handleEmailChange} type="email" placeholder='jondoe@email.com' required />
        </div>
        
        <div className="w-full mt-4" >
          <input type="text" className="w-[100%] p-4 rounded-lg font-semibold text-md md:text-lg border-indigo-400 " value={credentials.password} onChange={handlePasswordChange} type="password" placeholder='*********' required />
        </div>

        <button type='submit' className='p-4 mt-5 w-full bg-indigo-800 text-white font-extrabold rounded-md hover:bg-indigo-900 mb-16 md:mb-4 ' >
          Log In
        </button>

        <ToastContainer 
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
         
      </form>
    </div>
  )
}

export default AuthForm;