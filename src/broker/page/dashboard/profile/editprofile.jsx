import React, { useEffect, useState } from "react";
import { Stepper, Step, Button, Input, Textarea } from "@material-tailwind/react";
import DashboardNavbar from "../../../widgets/layout/dashboard-navbar";
import Sidenav from "../../../widgets/layout/sidenav";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useGetProfileQuery, useEditProfileMutation} from "../../../../app/api/brokerAuthApi";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  // lastName: Yup.string().required('Last Name is required'),
  // username: Yup.string().required('User Name is required'),
  // email: Yup.string().email('Invalid email address').required('Email is required'),
  // phone: Yup.string().required('Phone is required'),
  // location: Yup.string().required('Location is required'),
  // about: Yup.string().required('About is required'),
  // experience: Yup.string().required('Experience is required'),
  // specialities: Yup.string().required('Specialities is required'),
  // expertise: Yup.string().required('Expertise is required'),
  // language: Yup.string().required('Language is required'),
  // profilePhoto: Yup.mixed()
  //   .test('fileType', 'Unsupported file format', (value) => {
  //     if (!value) return true;
  //     return ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'].includes(value.type);
  //   })
  //   .test('fileSize', 'File too large', (value) => {
  //     if (!value) return true;
  //     return value.size <= 5000000;
  //   }),
  // totalTransaction: Yup.string().required('Total Transactions is required'),
  // avgSalePrice: Yup.string().required('Average Sale Price is required'),
  // clientSatisfaction: Yup.string().required('Client Satisfaction is required'),
});

const EditProfile = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [buttonText, setButtonText] = useState('Save');
  
  const { data, isSuccess: isGetSuccess } = useGetProfileQuery();
  const profile = isGetSuccess ? data.responseMessage : null;

  const [editProfile, { isLoading }] = useEditProfileMutation();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      phone: '',
      location: '',
      about: '',
      experience: '',
      specialities: '',
      expertise: '',
      language: '',
      profilePhoto: null,
      totalTransaction: '',
      avgSalePrice: '',
      clientSatisfaction: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log('Form submitted', values);
      try {
        const formData = new FormData();
        Object.keys(values).forEach(key => {
          formData.append(key, values[key]);
        });
        if (values.profilePhoto && values.profilePhoto instanceof File) {
          formData.append('profilePhoto', values.profilePhoto);
        }
        setButtonText('Updating...');
        await editProfile(formData).unwrap();
        setButtonText('Uploaded');
        toast.success('Profile updated successfully');
      } catch (error) {
        setButtonText('Save');
        toast.error(`Failed to update profile: ${error.data ? error.data.error : error.message}`);
        console.log('hell owrld', error)
      }
    },
  });

  useEffect(() => {
    if (profile) {
      formik.setValues(profile);
    }
  }, [profile]);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div>
      
      <div className="flex flex-row overflow-hidden">
        
        <div className="flex flex-col justify-center mt-7 w-[50%] lg:ml-[30%] ml-[15px] border shadow-lg p-3 mb-3 rounded-lg">
          <Stepper
            activeStep={activeStep}
            isLastStep={(value) => setIsLastStep(value)}
            isFirstStep={(value) => setIsFirstStep(value)}
          >
            <Step className="h-4 w-4" onClick={() => setActiveStep(0)} />
            <Step className="h-4 w-4" onClick={() => setActiveStep(1)} />
            <Step className="h-4 w-4" onClick={() => setActiveStep(2)} />
          </Stepper>

          {activeStep === 0 && (
            <form className="border shadow-lg p-4 mb-3 rounded-lg" onSubmit={formik.handleSubmit}>
              <div className="text-start text-primary-normal my-3 font-bold text-[15px]">
                Personal Detail
              </div>
              <div className="relative ">
                <input type="file" className="absolute w-full h-full opacity-0" id="fileInput"
                  onChange={(event) => formik.setFieldValue('profilePhoto', event.currentTarget.files[0])}
                />
                <label htmlFor="fileInput">
                  <img className="cursor-pointer object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" 
                    src={formik.values.profilePhoto instanceof File 
                      ? URL.createObjectURL(formik.values.profilePhoto) 
                      : formik.values.profilePhoto || 'https://via.placeholder.com/150'}
                    alt="profile"
                  />
                </label>
                {formik.touched.profilePhoto && formik.errors.profilePhoto ? (
                  <div className="text-red-500 text-start text-sm">{formik.errors.profilePhoto}</div>
                ) : null}
              </div>
              <div className="flex gap-3 my-4 ">
                <div className="flex flex-col w-[50%]">
                <Input 
                  type="text" 
                  label="First Name" 
                  name="firstName" 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName} 
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-red-500 text-start text-sm">{formik.errors.firstName}</div>
                ) : null}
                </div>
                <div className="flex flex-col w-[50%]">
                <Input 
                  type="text" 
                  label="Last Name" 
                  name="lastName" 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName} 
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-red-500 text-start text-sm">{formik.errors.lastName}</div>
                ) : null}
                </div>
              </div>
              <div className="flex gap-3 my-4">
                <div className="flex flex-col w-[50%]">
                <Input 
                  type="text" 
                  label="Username" 
                  name="username" 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                  value={formik.values.username} 
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="text-red-500 text-start text-sm">{formik.errors.username}</div>
                ) : null}
                </div>
                <div className="flex flex-col w-[50%]">
                <Input 
                  type="email" 
                  label="Email" 
                  name="email" 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                  value={formik.values.email} 
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-start text-sm">{formik.errors.email}</div>
                ) : null}
                </div>
                
              </div>
                <div className="flex gap-3 my-4">
                <div className="flex flex-col w-[50%]">
                    <Input 
                        type="text" 
                        label="Phone" 
                        name="phone" 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.phone} 
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                        <div className="text-red-500 text-start text-sm">{formik.errors.phone}</div>
                    ) : null}
                </div>
                <div className="flex flex-col w-[50%]">
                    <Input 
                        type="text" 
                        label="Location" 
                        name="location" 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.location} 
                    />
                    {formik.touched.location && formik.errors.location ? (
                        <div className="text-red-500 text-start text-sm">{formik.errors.location}</div>
                    ) : null}
                </div>
                  
                </div>
              <Button className="w-full bg-primary-normal" onClick={handleNext}>Continue</Button>
            </form>
          )}

          {activeStep === 1 && (
            <form className="border shadow-lg p-4 mb-3 rounded-lg" onSubmit={formik.handleSubmit}>
              <div className="text-start text-primary-normal my-3 font-bold text-[15px]">
                Experience
              </div>
              <Textarea 
                type="text" 
                label="About" 
                name="about" 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.about} 
              />
              {formik.touched.about && formik.errors.about ? (
                <div className="text-red-500 text-start text-sm">{formik.errors.about}</div>
              ) : null}
              <div className="my-2">
                <Input 
                  type="text" 
                  label="Experience Years" 
                  name="experience" 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                  value={formik.values.experience} 
                />
                {formik.touched.experience && formik.errors.experience ? (
                  <div className="text-red-500 text-start text-sm">{formik.errors.experience}</div>
                ) : null}
              </div>
              <Textarea 
                type="text" 
                label="Specialities" 
                name="specialities" 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.specialities} 
              />
              {formik.touched.specialities && formik.errors.specialities ? (
                <div className="text-red-500 text-start text-sm">{formik.errors.specialities}</div>
              ) : null}
              <Textarea 
                type="text" 
                label="Expertise" 
                name="expertise" 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.expertise} 
              />
              {formik.touched.expertise && formik.errors.expertise ? (
                <div className="text-red-500 text-start  text-sm">{formik.errors.expertise}</div>
              ) : null}
              <Button className="w-full bg-primary-normal" onClick={handleNext}>Continue</Button>
            </form>
          )}

          {activeStep === 2 && (
            <form className="border shadow-lg p-4 mb-3 rounded-lg" onSubmit={formik.handleSubmit}>
              <div className="text-start text-primary-normal my-3 font-bold text-[15px]">
                Successful Transactions
              </div>
              <div className="my-2">
                <Input 
                  type="text" 
                  label="Total Transactions" 
                  name="totalTransaction" 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                  value={formik.values.totalTransaction} 
                />
                {formik.touched.totalTransaction && formik.errors.totalTransaction ? (
                  <div className="text-red-500 text-start text-sm">{formik.errors.totalTransaction}</div>
                ) : null}
              </div>
              <div className="my-2">
                <Input 
                  type="text" 
                  label="Average Sale Price" 
                  name="avgSalePrice" 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                  value={formik.values.avgSalePrice} 
                />
                {formik.touched.avgSalePrice && formik.errors.avgSalePrice ? (
                  <div className="text-red-500 text-start text-sm">{formik.errors.avgSalePrice}</div>
                ) : null}
              </div>
              <div className="my-2">
                <Input 
                  type="text" 
                  label="Language" 
                  name="language" 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                  value={formik.values.language} 
                />
                {formik.touched.language && formik.errors.language ? (
                  <div className="text-red-500 text-start text-sm">{formik.errors.language}</div>
                ) : null}
              </div>
              <div className="my-2">
                <Input 
                  type="text" 
                  label="Client Satisfaction Rate" 
                  name="clientSatisfaction" 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                  value={formik.values.clientSatisfaction} 
                />
                {formik.touched.clientSatisfaction && formik.errors.clientSatisfaction ? (
                  <div className="text-red-500 text-start text-sm">{formik.errors.clientSatisfaction}</div>
                ) : null}
              </div>
              <Button className="w-full bg-primary-normal" type="submit">
                {isLoading ? 'Updating...' : buttonText}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
