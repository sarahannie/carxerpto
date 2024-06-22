import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useChangePasswordMutation } from '../../app/api/signinAuthApi';
import { toast } from 'react-toastify';
import BackgroundImage from '../../assets/image/backgroundimage.webp';
import { useNavigate } from 'react-router-dom';

function ChangePassword() {
  const [changePassword] = useChangePasswordMutation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      otp: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object().shape({
      otp: Yup.string().required('OTP is required'),
      password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await changePassword({
          otp: values.otp,
          password: values.password,
          confirmPassword: values.confirmPassword,
        }).unwrap();
        resetForm();
        toast.success('Password changed successfully!');
        navigate('/signin');
      } catch (error) {
        if (error.data?.error === 'Session expired. Request OTP again.') {
          localStorage.removeItem('authToken'); // Clear expired token
          toast.error('Session expired. Please request a new OTP.');
        } else {
          toast.error(`Failed to change password: ${error.data ? error.data.error : error.message}`);
        }
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
          <div className='-mt-20 lg:mx-0 w-80 h-[350px] lg:w-96 z-10 bg-accent-white pb-12'>
            <h2 className='mb-6 text-primary-normal text-lg font-bold mt-5'>Change Password</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className='mx-10 relative mt-4'>
                <label htmlFor="otp"
                  className='absolute top-0 left-2 -mt-2 px-3 text-xs text-gray-400 bg-white'
                >OTP</label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={formik.values.otp}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  required
                  placeholder="Enter OTP"
                  className='border border-gray-400 text-xs px-3 py-3 rounded lg:w-80 w-60'
                />
                {formik.touched.otp && formik.errors.otp ? (
                  <div className="error text-red-300 text-start text-sm">{formik.errors.otp}</div>
                ) : null}
              </div>
              <div className='mx-10 relative mt-4'>
                <label htmlFor="password"
                  className='absolute top-0 left-2 -mt-2 px-3 text-xs text-gray-400 bg-white'
                >Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  required
                  placeholder="Enter new password"
                  className='border border-gray-400 text-xs px-3 py-3 rounded lg:w-80 w-60'
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error text-red-300 text-start text-sm">{formik.errors.password}</div>
                ) : null}
              </div>
              <div className='mx-10 relative mt-4'>
                <label htmlFor="confirmPassword"
                  className='absolute top-0 left-2 -mt-2 px-3 text-xs text-gray-400 bg-white'
                >Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  required
                  placeholder="Confirm new password"
                  className='border border-gray-400 text-xs px-3 py-3 rounded lg:w-80 w-60'
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                  <div className="error text-red-300 text-start text-sm">{formik.errors.confirmPassword}</div>
                ) : null}
              </div>
              <button type="submit" className='w-60 lg:w-80 bg-primary-normal text-white py-3 rounded mt-3 hover:bg-secondary-normalhover hover:text-accent-white transition duration-300'>
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
