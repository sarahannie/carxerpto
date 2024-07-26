import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import BackgroundImage from '../../assets/image/backgroundimage.webp';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLoginMutation } from '../../app/api/signinAuthApi';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../app/slice/authSlice';
import { Button } from '@material-tailwind/react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom/dist';

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();

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
        // Call login mutation
        const response = await login({ email: values.email, password: values.password }).unwrap();

        console.log('response!!', response.responseMessage);

        // Assuming the response contains user and token fields
        const userData = {
          user: response.responseMessage,
          token: response.token
        };

        // Store token in localStorage
        localStorage.setItem('auth', userData.token);

        // Dispatch action to update Redux store with user data
        dispatch(loginUser(userData));

        // Reset form fields
        resetForm();

        // Display success toast
        toast.success('Sign in successful!');

        // Redirect based on user role
        const role = response.responseMessage.role;
        if (role === 'Buyer') {
          navigate('/home');
        } else if (role === 'Seller') {
          navigate('/dashboard/home');
        } else if (role === 'Broker') {
          navigate('/dashboard/brokerhome');
        } else if (role === 'Admin') {
          navigate('/dashboard/admin');
        } else {
          toast.error('Invalid role specified');
        }
      } catch (error) {
        // Handle login failure
        toast.error(`Login failed: ${error.data?.error || error.error}`);
        console.error('Login failed:', error);
      }
    }
  });

  return (
    <div
      className='relative'
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='flex flex-col items-center justify-center relative'>
        <div className='absolute inset-0 bg-blue-900 opacity-75' />
        <div className='mx-8 lg:mx-0 flex justify-center items-center h-screen mt-[50px]'>
          <div className='-mt-20 lg:mx-0 w-80 h-[420px] lg:w-96 z-10 bg-accent-white pb-12'>
            <h2 className='mb-6 text-primary-normal text-lg font-bold mt-5'>
              Log In to Your Account
            </h2>
            <form className='relative' onSubmit={formik.handleSubmit}>
              <div className='mx-10 flex flex-col gap-3 items-center mb-2 relative'>
                <div>
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
                    <div className='text-red-300 text-start text-sm'>{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className='mx-10 relative'>
                  <label
                    htmlFor='password'
                    className='absolute top-0 left-2 -mt-2 px-3 text-xs text-gray-400 bg-white'
                  >
                    Password
                  </label>
                  <div className=''>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id='password'
                      name='password'
                      value={formik.values.password}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder='***********'
                      className='border border-gray-400 text-xs px-3 py-3 rounded pr-10 lg:w-80 w-60  flex items-center'
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div className='text-red-300 text-start text-sm'>
                        {formik.errors.password}
                      </div>
                    ) : null}
                    <button
                      type='button'
                      onClick={togglePasswordVisibility}
                      className='absolute inset-y-0 right-0 px-2 py-2 text-gray-400'
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
              </div>
              <label className='flex lg:flex-row flex-col text-start lg:gap-0 gap-2 lg:items-center mx-10 mb-8'>
                <div>
                  <input
                    type='checkbox'
                    className='form-checkbox bg-transparent text-gray-900 mr-2'
                    name='agree'
                  />
                  <span className='-mt-1 text-sm text-gray-900 font-extralight'>Remind me</span>
                </div>
                <Link to='/forgetpassword' className='-mt-1 mx-1 underline'>
                  <span className='lg:-mt-2 lg:ml-24 text-sm text-gray-900 font-extralight'>
                    Forgot Password
                  </span>
                </Link>
              </label>
              <Button
                className='w-60 lg:w-80 bg-primary-normal text-white py-3 rounded hover:bg-secondary-normalhover hover:text-accent-white transition duration-300'
                type='submit'
              >
                Log in
              </Button>
            </form>
            <div className='flex items-center mx-10 mt-5'>
              <hr className='flex-grow border-t-2 border-gray-400 mr-1' />
              <span className='text-gray-500'>OR</span>
              <hr className='flex-grow border-t-2 border-gray-400 ml-1' />
            </div>
            <div className='flex flex-col items-center mx-9 gap-3 mt-3'>
              <Button
                type='submit'
                className='flex justify-center mx-10 items-center gap-4 w-80 py-2 px-4 border border-x-2 border-y-2 rounded-md font-semibold text-center text-base text-gray-900 white bg-transparent hover:bg-secondary-normalhover hover:text-accent-white'
              >
                <FaGoogle className='' />
                SignIn with Google
              </Button>
            </div>
          </div>
        </div>
        <div className='z-10 flex flex-col items-center mx-10 -mt-28 mb-8'>
          <h2 className='mb-4 text-accent-white text-lg font-semibold '>Don't have an account?</h2>
          <Button className='w-40 bg-accent-white text-gray-900 py-3 rounded hover:bg-secondary-normalhover hover:text-accent-white transition duration-300'>
            <Link to='/signup'>Sign Up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
