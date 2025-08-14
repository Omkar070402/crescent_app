import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineHome } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import { MdLockOutline } from "react-icons/md";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [token,setToken] = useState('')

  const nav = useNavigate()

  // Validation schema for Login
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
  });

  // Initial values
  const initialValues = {
    email: '',
    password: ''
  };

  // Submit handler
  const handleSubmit =async (values) => {
    
    const response = await axios.post('http://localhost:4000/api/user/login',values)
    localStorage.setItem('token',response.data.token)
    nav('/')
  };

  return (
    <div className='my-5'>
     
      <div className='flex justify-end me-5'>
        <Link to={'/'}><HiOutlineHome size={25} /></Link>
      </div>

      <div id='login-form' className='h-auto w-1/3 mt-5 shadow m-auto rounded-2xl'>
       
        <div className='bg-indigo-200 flex justify-between items-center '>
          <div className='flex flex-col gap-2 ms-4'>
            <h4 className='text-[17px] font-bold text-indigo-700'>Welcome Back, User!</h4>
            <p className='text-[13px] text-indigo-700'>Log In to continue using <br /> Crescent Exchange.</p>
          </div>
          <img src="/register-logo.png" alt="" className='h-30' />
        </div>

        
        <div className='text-[13px] p-8'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                {/* Email */}
                <div className='flex flex-col'>
                  <label htmlFor="email" className='text-indigo-700 font-bold'>Email :</label>
                  <Field
                    type="text"
                    name="email"
                    placeholder='Enter Email'
                    className='border mt-2 py-1 px-1'
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-[12px]" />
                </div>

                {/* Password */}
                <div className='mt-3'>
                  <label htmlFor="password">Password :</label>
                  <div className='flex flex-col'>
                    <div className='flex'>
                      <Field
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder='Enter Password'
                        className='border mt-2 p-1 w-full'
                      />
                      <div
                        onClick={() => setShowPassword(!showPassword)}
                        className='border p-2 flex justify-center h-8 mt-2 items-center border-l-0 cursor-pointer'
                      >
                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                      </div>
                    </div>
                    <ErrorMessage name="password" component="div" className="text-red-500 text-[12px]" />
                  </div>
                </div>

                {/* Remember + Forgot Password */}
                <div className='flex justify-between mt-3 text-center'>
                  <div className='flex gap-2'>
                    <input type="checkbox" />
                    <p>Remember Me</p>
                  </div>
                  <div className='flex text-gray-400 cursor-pointer'>
                    <MdLockOutline size={17} />
                    <p>Forgot Password</p>
                  </div>
                </div>

                {/* Login Button */}
                <div className='flex flex-col mt-2'>
                  <button type="submit" className='px-4 bg-indigo-500 font-bold text-white rounded-[5px] p-2 mt-3'>
                    Login
                  </button>
                </div>

                {/* Social Login */}
                <div className='flex flex-col justify-center items-center gap-2 mt-5'>
                  <h3 className='text-[14px]'>Login with</h3>
                  <div className='flex gap-2 border-2 border-gray-400 py-2 p-1 rounded-[5px] cursor-pointer'>
                    <FcGoogle size={20} />
                    Sign in with Google
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {/* Register Link */}
      <div className='flex justify-center mt-5 text-[14px]'>
        <p>Don't have an account?  
          <Link to="/register" className='text-indigo-500 font-bold'> Register </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
