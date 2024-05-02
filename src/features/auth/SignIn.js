import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import BackgroundImage from '../../assets/backgroundimage.jpg';
import Logo from '../../assets/Logo1.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLoginMutation } from '../../app/api/authApi';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../app/slice/authSlice';

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();

  const [ login ] = useLoginMutation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('invalid email')
        .required('Email is required'),
      password: Yup.string().required('Password is required')
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await login({ email: values.email, password: values.password }).unwrap();
        dispatch(loginUser(response));
        resetForm();
        alert('Sign in successful!');
      } catch (error) {
        console.error('Login failed:', error);
      }
    }
  });

  return (
    <div>
      <div className=' h-screen relative overflow-hidden'>
        <div className='flex flex-col items-center justify-center relative'>
          <img
            src={BackgroundImage}
            alt='background'
            fetchpriority='high'
            className='absolute inset-0 h-full w-full object-cover'
          />
          <div className='absolute inset-0 bg-blue-900 opacity-75' />
          <Link to='/'>
            <img
              src={Logo}
              alt='logo'
              className='lg:w-56 w-48 h-40 absolute -left-2 -top-8 lg:-top-8 lg:left-0 object-contain'
            />
          </Link>
          {/* <h1 className="absolute -left-14 top-4 lg:top-4 lg:left-4 object-contain font-bold text-2xl text-accent-white mx-16
      ">
            Auto<span className="text-secondary-normalhover">Buy</span>
          </h1> */}
          <div className=' mx-8 lg:mx-0 flex justify-center items-center h-screen'>
            <div className='-mt-20 lg:mx-0 w-80 h-auto lg:w-96 z-10 bg-accent-white pb-12'>
              <h2 className='mb-6 text-primary-normal text-lg font-bold mt-5'>
                Log Into Your Account
              </h2>
              <form className='relative' onSubmit={formik.handleSubmit}>
                <div className='mx-10 flex flex-col gap-3 items-center mb-2 relative'>
                  <label
                    htmlFor='email'
                    className='absolute top-0 left-2 -mt-2 px-3 text-xs text-gray-400 bg-white'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    required
                    placeholder='example@gmail.com'
                    className='border border-gray-400 text-xs px-3 py-3 rounded lg:w-80 w-60'
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className='text-red-300 text-start'>{formik.errors.email}</div>
                  ) : null}
                  <div className='mx-10 relative'>
                    <label
                      htmlFor='password'
                      className='absolute top-0 left-2 -mt-2 px-3 text-xs text-gray-400 bg-white'
                    >
                      Password
                    </label>
                    <div className=''>
                      <input
                        type='password'
                        id='password'
                        name='password'
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder='***********'
                        className='border border-gray-400 text-xs px-3 py-3 rounded pr-10 lg:w-80 w-60'
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <div className='text-red-300 text-start'>{formik.errors.password}</div>
                      ) : null}
                      <button
                        type='submit'
                        className='absolute inset-y-0 right-0 px-2 py-2 text-gray-400'
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>
                </div>
                <label class='flex lg:flex-row flex-col text-start lg:gap-0 gap-2 lg:items-center mx-10 mb-8'>
                  <div>
                    <input
                      type='checkbox'
                      className='form-checkbox bg-transparent text-gray-900 mr-2'
                      name='agree'
                    />
                    <span className='-mt-1 text-sm text-gray-900 font-extralight'>Remind me</span>
                  </div>
                  <Link to='/forget' className='-mt-1 mx-1 underline'>
                    <span className='lg:-mt-2 lg:ml-24  text-sm text-gray-900 font-extralight'>
                      Forgot Password
                    </span>
                  </Link>
                </label>
                <button
                  type='submit'
                  className='w-60 lg:w-80 bg-primary-normal text-white py-3 rounded hover:bg-secondary-normalhover hover:text-accent-white transition duration-300'
                >
                  Log In
                </button>
              </form>

              <div class='flex items-center mx-10 mt-5'>
                <hr class='flex-grow border-t-2 border-gray-400 mr-1' />
                <span class='text-gray-500'>OR</span>
                <hr class='flex-grow border-t-2 border-gray-400 ml-1' />
              </div>

              <div className='flex flex-col items-center gap-2 mt-6'>
                <Link
                  to=''
                  className='flex items-center gap-4 w-60 py-2 px-4 border border-x-2 border-y-2 rounded-md font-semibold text-center text-base text-gray-900 white bg-transparent hover:bg-secondary-normalhover hover:text-accent-white'
                >
                  <FaGoogle className='' />
                  Login with Google
                </Link>

                <Link
                  to=''
                  className='flex items-center gap-4 w-60 py-2 px-4 border border-x-2 border-y-2 rounded-md font-semibold text-center text-base text-gray-900 bg-transperent hover:bg-secondary-normalhover hover:text-accent-white'
                >
                  <FaApple className='' />
                  Login with Apple
                </Link>
              </div>
            </div>
          </div>
          <div className='z-10 flex flex-col items-center mx-10 -mt-28 mb-8'>
            <h2 className='mb-4 text-accent-white text-lg font-semibold '>
              Don't have an account?
            </h2>
            <Link
              to='/signup'
              className='py-2 px-4 rounded-md text-base text-gray-900 bg-accent-white hover:bg-secondary-normalhover hover:text-accent-white transition duration-300'
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
