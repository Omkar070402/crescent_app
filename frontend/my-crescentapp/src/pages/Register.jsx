import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineHome } from "react-icons/hi";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
const Register = () => {
   
    const nav = useNavigate()


    // Validation schema using Yup
    const validationSchema = Yup.object().shape({
        first_name: Yup.string().required('First Name is required'),
      
        last_name: Yup.string().required('Last Name is required'),
        mobile: Yup.string().required('Mobile is required').matches(/^\d{10}$/, 'Mobile must be 10 digits'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        dob: Yup.date().required('Date of Birth is required'),
        password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        terms: Yup.bool().oneOf([true], 'You must accept the terms and conditions')
    });

    // Initial form values
    const initialValues = {
        first_name: '',
        last_name: '',
        mobile: '',
        email: '',
        dob: '',
        password: '',
        confirmPassword: '',
        terms: false
    };

    // Submit handler
    const handleSubmit = async (values) => {
        try {
            const response = await axios.post('http://localhost:4000/api/user/register', values)
            console.log(response.data)
            nav('/login')
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <div className='my-5'>
            <div className='flex justify-end me-5'>
                <Link to={'/'}><HiOutlineHome size={25} /></Link>
            </div>

            <div id='register-form' className='h-auto w-1/3 mt-5 shadow m-auto rounded-2xl'>
                <div className='bg-indigo-200 flex justify-between items-center '>
                    <div className='flex flex-col gap-2 ms-4'>
                        <h4 className='text-[17px] font-bold text-indigo-700'>Register</h4>
                        <p className='text-[13px] text-indigo-700'>Get your Crescent Exchange <br /> account now.</p>
                    </div>
                    <img src="/register-logo.png" alt="" className=' h-30' />
                </div>

                <div className='text-[13px] p-8'>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values, handleChange }) => (
                            <Form>
                                <div className='flex justify-between gap-5'>
                                    <div className='w-1/2'>
                                        <label>First Name :</label>
                                        <Field
                                            type="text"
                                            name="first_name"
                                            placeholder='Enter First Name'
                                            className='border mt-2 py-1 px-1 w-100'
                                        />
                                        <ErrorMessage name="first_name" component="div" className="text-red-500 text-[12px]" />
                                    </div>

                                </div>

                                <div className='flex justify-between mt-2 gap-5'>
                                    <div className='w-1/2'>
                                        <label>Last Name :</label>
                                        <Field
                                            type="text"
                                            name="last_name"
                                            placeholder='Enter Last Name'
                                            className='border mt-2 p-1 w-full'
                                        />
                                        <ErrorMessage name="last_name" component="div" className="text-red-500 text-[12px]" />
                                    </div>
                                    <div className='w-1/2'>
                                        <label>Mobile :</label>
                                        <Field
                                            type="text"
                                            name="mobile"
                                            placeholder='Enter Mobile'
                                            className='border mt-2 p-1 w-full'
                                        />
                                        <ErrorMessage name="mobile" component="div" className="text-red-500 text-[12px]" />
                                    </div>
                                </div>

                                <div className='flex mt-2 gap-5'>
                                    <div className='w-1/2'>
                                        <label>Email :</label>
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder='Enter Email'
                                            className='border mt-2 p-1 w-full'
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-500 text-[12px]" />
                                    </div>
                                    <div className='w-1/2'>
                                        <label>Date of Birth :</label>
                                        <Field
                                            type="date"
                                            name="dob"
                                            className='border mt-2 p-1 w-full'
                                        />
                                        <ErrorMessage name="dob" component="div" className="text-red-500 text-[12px]" />
                                    </div>
                                </div>

                                <div className='flex mt-2 gap-5'>
                                    <div className='w-1/2'>
                                        <label>Password :</label>
                                        <div className='flex'>
                                            <Field
                                                type="password"
                                                name="password"
                                                placeholder='Enter Password'
                                                className='border mt-2 p-1 w-full'
                                            />
                                            <div className='border p-2 w-1/4 flex justify-center h-8 mt-2 items-center border-l-0'>
                                                <FaRegEye />
                                            </div>
                                        </div>
                                        <ErrorMessage name="password" component="div" className="text-red-500 text-[12px]" />
                                    </div>
                                    <div className='w-1/2'>
                                        <label>Confirm Password :</label>
                                        <div className='flex'>
                                            <Field
                                                type="password"
                                                name="confirmPassword"
                                                placeholder='Enter Password'
                                                className='border mt-2 p-1 w-full'
                                            />
                                            <div className='border p-2 w-1/4 flex justify-center h-8 mt-2 items-center border-l-0'>
                                                <FaRegEye />
                                            </div>
                                        </div>
                                        <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-[12px]" />
                                    </div>
                                </div>

                                <div className='flex mt-3 text-center items-center gap-2'>
                                    <Field type="checkbox" name="terms" className='mb-2' />
                                    <p>Click here to agree to the terms and conditions
                                        of Crescent Exchange Terms of Use</p>
                                </div>
                                <ErrorMessage name="terms" component="div" className="text-red-500 text-[12px]" />

                                <div className='flex justify-end mt-2'>
                                    <button type="submit" className='px-4 bg-indigo-500 font-bold text-white rounded-[5px] p-2'>
                                        Register
                                    </button>
                                </div>

                                <hr className='text-gray-400 mt-4' />

                                <div className='flex flex-col justify-center items-center gap-2 mt-2'>
                                    <h3 className='text-[14px]'>Register with</h3>
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

            <div className='flex justify-center mt-3 text-[14px]'>
                <p>Already have an account ?
                    <Link to="/login" className='text-indigo-500 font-bold'> LOGIN </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
