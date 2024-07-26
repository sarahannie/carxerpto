import React from 'react';
import BackgroundImage from '../../assets/image/backgroundimage.webp';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRegisterMutation } from '../../app/api/brokerAuthApi';
import { Button } from '@material-tailwind/react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom/dist';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../app/slice/authSlice';

function SignUpBroker() {
  const [signUp] = useRegisterMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('invalid email')
        .required('Email is required'),
      firstName: Yup.string().required('Enter your firstname'),
      lastName: Yup.string().required('Enter your lastname'),
      password: Yup.string().required(
        'Password must contain at least 1 lowercase, 1 uppercase, 1 number, 1 symbol, and be at least 8 characters long'
      ),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Confirm Password is required')
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await signUp({
          email: values.email,
          password: values.password,
          firstName: values.firstName,
          lastName: values.lastName
        }).unwrap();
        console.log('Registration successful:', response);

        // Store the token
        const token = response.token;
        console.log(`Token: `, token);
        if (token) {
          localStorage.setItem('auth', token);
          dispatch(loginUser({ user: response.user, token }));
          resetForm();
          toast.success('Sign up successful!');
          navigate('/varificationbroker');
        } else {
          toast.error('Token not found in response');
        }
      } catch (error) {
        toast.error(`Sign up failed: ${error.data?.error || error.error}`);
        console.error('Sign up failed:', error);
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
        <div className='flex justify-center items-center h-screen mt-[50px]'>
          <div className='-mt-20 w-96 h-[550px] z-10 bg-accent-white rounded-md'>
            <h2 className='mb-4 text-primary-normal text-lg font-semibold mt-5'>
              Sign Up to Get Started
            </h2>
            <form className='relative flex flex-col justify-center' onSubmit={formik.handleSubmit}>
              <div className='flex mx-10 mb-4 gap-1'>
                <div className='relative'>
                  <label
                    htmlFor='firstName'
                    className='absolute top-0 left-2 -mt-2 px-1 text-xs text-gray-400 bg-white'
                  >
                    FirstName
                  </label>
                  <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    value={formik.values.firstName}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    required
                    placeholder='Sarah'
                    className='border border-gray-400 text-xs px-3 py-3 rounded w-40 outline-none'
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className='text-red-300 text-start text-xs'>{formik.errors.firstName}</div>
                  ) : null}
                </div>
                <div className='relative'>
                  <label
                    htmlFor='lastName'
                    className='absolute top-0 left-2 -mt-2 px-1 text-xs text-gray-400 bg-white'
                  >
                    LastName
                  </label>
                  <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    value={formik.values.lastName}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    required
                    placeholder='Annie'
                    className='border border-gray-400 text-xs px-3 py-3 rounded w-40 outline-none'
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className='text-red-300 text-start text-xs'>{formik.errors.lastName}</div>
                  ) : null}
                </div>
              </div>
              <div className='mx-10 relative mb-4'>
                <label
                  htmlFor='email'
                  className='absolute top-0 left-2 -mt-2 px-1 text-xs text-gray-400 bg-white'
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
                  className='border border-gray-400 text-xs px-3 py-3 rounded w-80 outline-none'
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className='text-red-300 text-start text-xs'>{formik.errors.email}</div>
                ) : null}
              </div>
              <div className='mx-10 mb-4 relative'>
                <label
                  htmlFor='password'
                  className='absolute top-0 left-2 -mt-2 px-1 text-xs text-gray-400 bg-white'
                >
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  required
                  className='border border-gray-400 text-xs px-3 py-3 rounded w-80 outline-none'
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className='text-red-300 text-start text-xs'>{formik.errors.password}</div>
                ) : null}
              </div>
              <div className='mx-10 mb-4 relative'>
                <label
                  htmlFor='confirmPassword'
                  className='absolute top-0 left-2 -mt-2 px-1 text-xs text-gray-400 bg-white'
                >
                  Confirm Password
                </label>
                <input
                  type='password'
                  id='confirmPassword'
                  name='confirmPassword'
                  value={formik.values.confirmPassword}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  required
                  className='border border-gray-400 text-xs px-3 py-3 rounded w-80 outline-none'
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                  <div className='text-red-300 text-start text-xs'>
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
              </div>
              <label className='flex items-center justify-start mx-10 mb-5'>
                <input
                  type='checkbox'
                  className='form-checkbox bg-transparent text-gray-900 mr-2'
                  name='agree'
                />
                <span className='text-sm text-gray-900 font-extralight'>Remind me always</span>
              </label>
              <Button
                type='submit'
                className='w-80 mx-10 bg-primary-normal text-white py-3 rounded hover:bg-primary-normalhover transition duration-300 hover:bg-secondary-normalhover hover:text-accent-white transition duration-300'
              >
                Sign up
              </Button>
            </form>
            <div className='flex items-center mx-9 mt-6'>
              <hr className='flex-grow border-t-2 border-gray-400 mr-2' />
              <span className='text-gray-500'>OR</span>
              <hr className='flex-grow border-t-2 border-gray-400 ml-2' />
            </div>
            <div className='flex flex-col items-center mx-9 gap-3 mt-3'>
              <Button
                type='submit'
                className='flex justify-center mx-10 items-center gap-4 w-80 py-2 px-4 border border-x-2 border-y-2 rounded-md font-semibold text-center text-base text-gray-900 white bg-transparent hover:bg-secondary-normalhover hover:text-accent-white'
              >
                <FaGoogle />
                SignIn with Google
              </Button>
            </div>
          </div>
        </div>
        <div className='z-10 flex flex-col items-center mx-10 lg:-mt-20 -mt-2 mb-5'>
          <h2 className='mb-8 text-accent-white text-lg font-semibold lg:mt-8 -mt-2 mb-3'>
            Already have an account?
          </h2>
          <Button className='w-40 bg-accent-white text-gray-900 py-3 rounded hover:bg-secondary-normalhover hover:text-accent-white transition duration-300'>
            <Link to='/signin'>Log In</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignUpBroker;
