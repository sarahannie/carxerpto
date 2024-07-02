import React, { useEffect } from 'react';
import style from './profilecon.module.css';
import { useEditProfileMutation, useGetProductsQuery } from '../../../app/api/productApi';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useFormik } from 'formik';


const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  username
: Yup.string().required('User Name is required'),
  presentAddress: Yup.string().required('Present Address is required'),
  permanentAddress: Yup.string().required('Permanent Address is required'),
  city: Yup.string().required('City is required'),
  town: Yup.string().required('Town is required'),
  profilePhoto: Yup.mixed()
    .test('fileType', 'Unsupported file format', (value) => {
      if (!value) return true; // Skip validation if no file is selected
      return ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'].includes(value.type);
    })
    .test('fileSize', 'File too large', (value) => {
      if (!value) return true; // Skip validation if no file is selected
      return value.size <= 5000000;
    }),
});

const Profilecon = () => {
  const { data, isSuccess: isGetSuccess } = useGetProductsQuery();
  const profile = isGetSuccess ? data.responseMessage : null;
 

  const [editProfile, { isLoading, isError, isSuccess }] = useEditProfileMutation();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      presentAddress: '',
      permanentAddress: '',
      city: '',
      town: '',
      profilePhoto: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append('firstName', values.firstName);
        formData.append('lastName', values.lastName);
        formData.append('email', values.email);
        formData.append('username', values.username
);
        formData.append('presentAddress', values.presentAddress);
        formData.append('permanentAddress', values.permanentAddress);
        formData.append('city', values.city);
        formData.append('town', values.town);
        if (values.profilePhoto && values.profilePhoto instanceof File) {
          formData.append('profilePhoto', values.profilePhoto);
        }
         await editProfile(formData).unwrap();
         toast.success('Profile updated successfully:')

        
      } catch (error) {
        toast.error(`Failed to update profile: ${error.data ? error.data.error : error.message}`);
        console.error('Failed to update profile', error);
      }
    },
  });

  useEffect(() => {
    if (profile) {
      formik.setValues({
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
        username: profile.username,
        presentAddress: profile.presentAddress,
        permanentAddress: profile.permanentAddress,
        city: profile.city,
        town: profile.town,
        profilePhoto: profile.profilePhoto
 || null,
      });
    }
  }, [profile]);

  return (
    <div className={style.container}>
      <div
        className="lg:mx-[36px] mx-[5px] flex justify-center lg:w-[121px] lg:h-[121px] w-[50px] h-[50px] bg-blue-300/20 rounded-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${formik.values.profilePhoto instanceof File ? URL.createObjectURL(formik.values.profilePhoto) : formik.values.profilePhoto   || 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxwcm9maWxlfGVufDB8MHx8fDE3MTEwMDM0MjN8MA&ixlib=rb-4.0.3&q=80&w=1080'})`,
        }}
      >
        <div className="bg-white/90 rounded-full w-6 h-6 text-center lg:ml-28 ml-5 mt-4">
          <input
            type="file"
            name="profilePhoto"
            id="upload_profile"
            hidden
            onChange={(event) => formik.setFieldValue('profilePhoto', event.currentTarget.files[0])}
          />
          <label htmlFor="upload_profile">
            <svg
              data-slot="icon"
              className="w-6 h-5 text-blue-700"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
              ></path>
            </svg>
          </label>
        </div>
      </div>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex lg:flex-row md:flex-row sm:flex-row xs:flex-col gap-2 justify-center lg:w-[600px] w-[190px] md:w-[400px]">
            <div className="w-full mb-1 mt-1">
              <label htmlFor="firstName" className={style.label}>
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                className="mt-1 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                placeholder="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-red-500 text-sm text-start">{formik.errors.firstName}</div>
              ) : null}
            </div>
            <div className="w-full mb-1 lg:mt-1">
              <label htmlFor="lastName" className={style.label}>
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                className="mt-1 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                placeholder="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-red-500 text-sm text-start">{formik.errors.lastName}</div>
              ) : null}
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-row sm:flex-row xs:flex-col gap-2 justify-center lg:w-[600px] w-[190px] md:w-[400px]">
            <div className="w-full mb-1">
              <label htmlFor="email" className={style.label}>
                Email
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm text-start">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="w-full mb-1">
              <label htmlFor="username" className={style.label}>
                UserName
              </label>
              <input
                type="text"
                name="username"
                className="mt-1 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                placeholder="User Name"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.username
 && formik.errors.username
 ? (
                <div className="text-red-500 text-sm text-start">{formik.errors.username
}</div>
              ) : null}
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-row sm:flex-row xs:flex-col gap-2 justify-center lg:w-[600px] w-[190px] md:w-[400px]">
            <div className="w-full mb-1">
              <label htmlFor="presentAddress" className={style.label}>
                Present Address
              </label>
              <input
                type="text"
                name="presentAddress"
                className="mt-1 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                placeholder="Present Address"
                value={formik.values.presentAddress}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.presentAddress && formik.errors.presentAddress ? (
                <div className="text-red-500 text-sm text-start">{formik.errors.presentAddress}</div>
              ) : null}
            </div>
            <div className="w-full mb-1">
              <label htmlFor="permanentAddress" className={style.label}>
                Permanent Address
              </label>
              <input
                type="text"
                name="permanentAddress"
                className="mt-1 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                placeholder="Permanent Address"
                value={formik.values.permanentAddress}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.permanentAddress && formik.errors.permanentAddress ? (
                <div className="text-red-500 text-sm text-start">{formik.errors.permanentAddress}</div>
              ) : null}
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-row sm:flex-row xs:flex-col gap-2 justify-center lg:w-[600px] w-[190px] md:w-[400px]">
            <div className="w-full mb-1">
              <label htmlFor="city" className={style.label}>
                City
              </label>
              <input
                type="text"
                name="city"
                className="mt-1 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                placeholder="City"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.city && formik.errors.city ? (
                <div className="text-red-500 text-sm text-start">{formik.errors.city}</div>
              ) : null}
            </div>
            <div className="w-full mb-1">
              <label htmlFor="town" className={style.label}>
                Town
              </label>
              <input
                type="text"
                name="town"
                className="mt-1 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                placeholder="Town"
                value={formik.values.town}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.town && formik.errors.town ? (
                <div className="text-red-500 text-sm text-start">{formik.errors.town}</div>
              ) : null}
            </div>
          </div>
          <div className="flex justify-center lg:mt-10 md:mt-10 mt-4">
            <button
              type="submit"
              className="bg-primary-normal text-white w-[300px] h-[35px] rounded-lg hover:bg-primary-dark"
              disabled={isLoading}
            >
              {isLoading ? 'Updating...' : 'Update Profile'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profilecon;
