import React from 'react';
import ChatBox from '../../components/chat/ChatBox'; 
import DashboardNavbar from '../../seller/widgets/layout/dashboard-navbar';
import Sidenav from '../../seller/widgets/layout/sidenav';
import {MainContainer} from '@chatscope/chat-ui-kit-react';
import OtherChats from '../../components/chat/OtherChats';



const Message = () => {
  return (
    <div>
      
      <div className='flex flex-row overflow-hidden'>
        <div
          className='mt-7 w-[90%] lg:ml-[5%]  lg:mr-10px mr-1px border rounded-lg shadow-md bg-white'
          style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
        >
          <MainContainer
            responsive
            style={{
              display: 'flex',
              flexDirection: 'row',
              height: '100vh',
            }}
          >
            {/* Chat side bar */}
            <OtherChats />

              {/* MainChat box */}
            <ChatBox />
          </MainContainer>
        </div>
      </div>
    </div>
  );
};

export default Message;

