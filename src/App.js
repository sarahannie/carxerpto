// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
/* Importing Pages */
import Chat from './features/chat/Chat.js';
import OnboardingPage from './pages/OnboardingPage';
import SignIn from './features/auth/SignIn.js';
import SignUp from './features/auth/SignUp.js';
import AboutYou from './pages/AboutYou';
import ForgetPass from './features/auth/ForgetPass.js';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import FeatureSec from './pages/FeatureSec';
import CarCategory from './pages/CarCategory';
import CarListing from './pages/CarListing';
import CarApprasial from './pages/CarAppar.js';
import CarInsur from './pages/CarInsura.js';
import Prices from './pages/price.js';
import Payment from './pages/Payments.jsx';
import CarQuota from './components/CarQuota.js';
import CarInsurQ from './components/carInsuQuota.js';
import Success from './components/SuccessPay.js';
import CarDetails from './components/CarDetails.js';
//import Stripe from './components/stripe/stripe.js';
import Profile from './pages/profile.jsx';
import Home from './seller/page/dashboard/home.jsx';
import Profiles from './seller/page/dashboard/profiles.jsx';
import List from './seller/page/dashboard/list.jsx';
import Viewproduct from './seller/page/dashboard/viewproduct.jsx';
import Addproduct from './seller/page/dashboard/addproduct.jsx';
import Analytic from './seller/page/dashboard/analytic.jsx';
import History from './seller/page/dashboard/history.jsx';
import Subscription from './seller/page/dashboard/subscription.jsx';
import Setting from './seller/page/dashboard/setting.jsx';
import Message from './features/chat/message.jsx';
import Price from './seller/page/dashboard/price.jsx';
import CarListPage from './pages/carTest.jsx';
import Homeadmin from './admin/page/dashboard/homeadmin.jsx';
import Usermanagement from './admin/page/dashboard/usermanagement.jsx';
import Listadmin from './admin/page/dashboard/listadmin.jsx';
import Analyticadmin from './admin/page/dashboard/analysisadmin.jsx';
import Historyadmin from './admin/page/dashboard/historyadmin.jsx';
import Subscriptionadmin from './admin/page/dashboard/subscription/subscriptionadmin.jsx';
import Insurance from './admin/page/dashboard/insurance/insurance.jsx';
import AdminSetting from './admin/page/dashboard/adminsetting.jsx';
import SettingBroker from './broker/page/dashboard/setting.jsx';
import SubscriptionBroker from './broker/page/dashboard/subscription.jsx';
//import PricementBroker from './broker/layouts/Price/Price.jsx';
import Pricebroker from './broker/page/dashboard/price.jsx';
import Brokerprofile from './broker/page/dashboard/profile/brokerprofile.jsx';
import Editprofile from './broker/page/dashboard/profile/editprofile.jsx';
import MessagesBroker from './broker/page/dashboard/message.jsx';
import Servicebody from './broker/page/dashboard/service/servicebody.jsx';
import Brokerhome from './broker/page/dashboard/home/brokerhome.jsx';
import CarBroker from './pages/CarBroker.jsx';
import BrokerContact from './pages/borkercontact.jsx';
import Navbar from './components/Navbar/Navbar.js';
import ProtectedRoute from './app/api/protectedroute.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUpSeller from './features/auth/SignUp_seller.js';
import SignUpBroker from './features/auth/SignUp_broker.js';
import EmailVerification from './features/auth/verification.js';
import ForgotPassword from './features/auth/ForgetPass.js';
import ChangePassword from './features/auth/changePassword.js';
import EmailVerificationSeller from './features/auth/verificationSeller.js';
import EmailVerificationBroker from './features/auth/verificationBroker.js';
import EditProduct from './seller/page/dashboard/editproduct.jsx';
import Sidenav from './broker/widgets/layout/sidenav.jsx';
import DashboardNavbar from './broker/widgets/layout/dashboard-navbar.jsx';
import { ChatContextProvider } from './context/ChatContext.jsx';

/* Importing Components */

function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className='App'>
      <ChatContextProvider user={user}>
        <ToastContainer />
        <Router>
          <Routes>
            <Route
              element={
                <>
                  <Navbar /> <Outlet />
                </>
              }
            >
              <Route path='/' element={<OnboardingPage />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/forgetpassword' element={<ForgotPassword />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/signupseller' element={<SignUpSeller />} />
              <Route path='/signupbroker' element={<SignUpBroker />} />
              <Route path='/varificationbuyer' element={<EmailVerification />} />
              <Route path='/changepassword' element={<ChangePassword />} />
              <Route path='/varificationseller' element={<EmailVerificationSeller />} />
              <Route path='/varificationbroker' element={<EmailVerificationBroker />} />

              <Route element={<ProtectedRoute />}>
                <Route path='/home' element={<LandingPage />} />
                <Route path='/chat' element={<Chat />} />

                <Route path='/about' element={<AboutYou />} />
                <Route path='/forget' element={<ForgetPass />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/feature' element={<FeatureSec />} />
                <Route path='/car-category/:categoryId' element={<CarCategory />} />
                <Route path='/car-listing' element={<CarListing />} />
                <Route path='/car-apprasial' element={<CarApprasial />} />
                <Route path='/car-insurance' element={<CarInsur />} />
                <Route path='/price' element={<Prices />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/car-quota' element={<CarQuota />} />
                <Route path='/car-quota-insurance' element={<CarInsurQ />} />
                <Route path='/success' element={<Success />} />
                <Route path='/car-details/:productTag' element={<CarDetails />} />
                <Route path='/car-broker' element={<CarBroker />} />
                <Route path='/broker-contact/:_id' element={<BrokerContact />} />
                {/* <Route path="/stripe" element={<Stripe/>}/> */}
                <Route path='/profile' element={<Profile />} />
              </Route>
            </Route>
            {/* Seller */}
            <Route element={<ProtectedRoute />}>
            <Route path='/dashboard/home' element={<Home />} />
            <Route path='/dashboard/seller-profile' element={<Profiles />} />
            <Route path='/dashboard/seller-product' element={<List />} />
            <Route path='/Viewproduct/:productTag' element={<Viewproduct />} />
            <Route path='/Addproduct' element={<Addproduct />} />
            <Route path='/edit-product' element={<EditProduct />} />

            <Route path='/dashboard/analysis' element={<Analytic />} />
            <Route path='/dashboard/history' element={<History />} />
            <Route path='/dashboard/subscription' element={<Subscription />} />
            <Route path='/dashboard/setting' element={<Setting />} />
            <Route
              path='/dashboard/message'
              element={<Message buyerId='buyer123' sellerId='seller456' />}
            />

            <Route path='/seller-price' element={<Price />} />
            <Route path='/auth/signin' element={<SignIn />} />
            <Route path='/test' element={<CarListPage />} />
            </Route>
            {/* Admin */}
            <Route element={<ProtectedRoute />}>
            <Route path='/dashboard/admin' element={<Homeadmin />} />
            <Route path='/dashboard/user' element={<Usermanagement />} />
            <Route path='/dashboard/listing' element={<Listadmin />} />
            <Route path='/dashboard/analyticadmin' element={<Analyticadmin />} />
            <Route path='/dashboard/historyadmin' element={<Historyadmin />} />
            <Route path='/dashboard/subscriptionadmin' element={<Subscriptionadmin />} />
            <Route path='/dashboard/insurance' element={<Insurance />} />
            <Route path='/dashboard/adminSetting' element={<AdminSetting />} />
            </Route>
            {/* Broker Car */}
            <Route
              element={
                <>
                  <DashboardNavbar />
                  <Sidenav /> <Outlet />
                </>
              }
            >
              <Route element={<ProtectedRoute />}>
                <Route path='/dashboard/settingbroker' element={<SettingBroker />} />
                <Route path='/dashboard/SubscriptionBroker' element={<SubscriptionBroker />} />
                <Route path='/pricebroker' element={<Pricebroker />} />
                <Route path='/dashboard/brokerprofile' element={<Brokerprofile />} />
                <Route path='/dashboard/brokerprofileedit' element={<Editprofile />} />
                <Route path='/dashboard/messagebroker' element={<MessagesBroker />} />
                <Route path='/dashboard/service' element={<Servicebody />} />
                <Route path='/dashboard/brokerhome' element={<Brokerhome />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </ChatContextProvider>
    </div>
  );
}

export default App;
