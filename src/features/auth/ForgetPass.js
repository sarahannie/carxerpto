import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useForgotPasswordMutation } from '../../app/api/signinAuthApi';
import { toast } from 'react-toastify';
import BackgroundImage from '../../assets/image/backgroundimage.webp'
import {  useNavigate } from 'react-router-dom/dist';

function ForgotPassword() {
  const [forgotPassword] = useForgotPasswordMutation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Email is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await forgotPassword({ email: values.email }).unwrap();
        resetForm();
        toast.success('Password reset link has been sent to your email!');
        navigate('/changepassword');
      } catch (error) {
        toast.error(`Failed to send reset link: ${error.data ? error.data.error : error.message}`);
      }
    },
  });

  return (
    <div className='relative' style={{
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className='flex flex-col items-center justify-center relative'>
        <div className='absolute inset-0 bg-blue-900 opacity-75' />
        <div className="mx-8 lg:mx-0 flex justify-center items-center h-screen mt-[50px]">
          <div className='-mt-20 lg:mx-0 w-80 h-[250px] lg:w-96 z-10 bg-accent-white pb-12'>
            <h2 className='mb-6 text-primary-normal text-lg font-bold mt-5'>Forgot Password</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className='mx-10 relative mt-4'>
                <label htmlFor="email"
                  className='absolute top-0 left-2 -mt-2 px-3 text-xs text-gray-400 bg-white'
                >Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  required
                  placeholder="Enter your email"
                  className='border border-gray-400 text-xs px-3 py-3 rounded lg:w-80 w-60'
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error text-red-300 text-start text-sm">{formik.errors.email}</div>
                ) : null}
              </div>
              <button type="submit" className='w-60 lg:w-80 bg-primary-normal text-white py-3 rounded mt-3 hover:bg-secondary-normalhover hover:text-accent-white transition duration-300'>
                Send Reset Link
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
