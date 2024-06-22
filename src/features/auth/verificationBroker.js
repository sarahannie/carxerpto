import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useVerifyEmailMutation } from '../../app/api/brokerAuthApi';
import { useResendOtpMutation } from '../../app/api/signinAuthApi';
import BackgroundImage from '../../assets/image/backgroundimage.webp';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function EmailVerificationBroker() {
  const [verifyEmail] = useVerifyEmailMutation();
  const [resendOtp] = useResendOtpMutation();
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('auth');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  console.log(`TokenVer.jsFile: `, token);

  const formik = useFormik({
    initialValues: {
      otp: '',
      email: ''
    },
    validationSchema: Yup.object().shape({
      otp: Yup.string().required('Verification code is required')
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await verifyEmail({
          otp: values.otp
        }).unwrap();
        resetForm();
        toast.success('Email verification successful!');
        navigate('/home');
      } catch (error) {
        toast.error(`Email verification failed: ${error.data ? error.data.error : error.message}`);
      }
    }
  });

  const handleResendOtp = async () => {
    if (!formik.values.email) {
      toast.error('Please provide an email');
      return;
    }
    try {
      await resendOtp({ email: formik.values.email }).unwrap();
      toast.success('OTP has been resent!');
    } catch (error) {
      toast.error(`Failed to resend OTP: ${error.data ? error.data.error : error.message}`);
    }
  };

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
          <div className='-mt-20 lg:mx-0 w-80 h-[220px] lg:w-96 z-10 bg-accent-white pb-12'>
            <h2 className='mb-6 text-primary-normal text-lg font-bold mt-5'>Email Verification</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className='mx-10 relative mt-4'>
                <label
                  htmlFor='otp'
                  className='absolute top-0 left-2 -mt-2 px-3 text-xs text-gray-400 bg-white'
                >
                  Verification Code
                </label>
                <input
                  type='text'
                  id='otp'
                  name='otp'
                  value={formik.values.otp}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  required
                  placeholder='Enter verification code'
                  className='border border-gray-400 text-xs px-3 py-3 rounded lg:w-80 w-60'
                />
                {formik.touched.otp && formik.errors.otp ? (
                  <div className='error text-red-300 text-start text-sm'>{formik.errors.otp}</div>
                ) : null}
              </div>
              <button
                type='submit'
                className='w-60 lg:w-80 bg-primary-normal text-white py-3 rounded mt-3 hover:bg-secondary-normalhover hover:text-accent-white transition duration-300'
              >
                Verify Email
              </button>
            </form>
            <button
              onClick={handleResendOtp}
              className='mt-4 text-sm text-blue-500 hover:underline'
            >
              Resend OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailVerificationBroker;
