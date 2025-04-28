import React from 'react';
import Message from './Message';
import useGetMessage from '../hooks/useGetMessage';
import { useSelector } from 'react-redux';

const Messages = () => {
  useGetMessage();
  const {messages} = useSelector(store=>store.message);
  if(!messages)return;
  return (
    <div className="flex-1 h-full overflow-y-auto px-4 py-4 space-y-3 scroll-smooth bg-gray-50">
      {messages?.map((message, index) => {
        return (
          
          <Message key={message?._id || index} message={message}/>
        )
      })}
    </div>
  );
};

export default Messages;

