import React from 'react';
import SendInputMessage from './SendInputMessage';
import Messages from './Messages';
import { useSelector } from 'react-redux';

const MessageContainer = () => {
  const {selectedUser} = useSelector(store => store.user);
  return (
    <div className="w-full h-screen flex flex-col ">
      {/* Header */}
      <div className="flex items-center gap-4 p-4 bg-gray-200 shadow-sm">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
          <img
            src={selectedUser?.profilePhoto}
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-medium text-gray-800">{selectedUser?.fullName}</p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto">
        <Messages />
      </div>

      {/* Sticky Input Area */}
      <div className="sticky bottom-0 bg-white p-4 border-t border-gray-200">
        <SendInputMessage/>
      </div>
    </div>
  );
};

export default MessageContainer;
