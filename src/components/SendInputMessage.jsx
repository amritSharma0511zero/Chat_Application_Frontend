import React, { useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setMessages } from '../redux/messageSlice';

const SendInputMessage = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const {selectedUser} = useSelector(store => store.user);
  const {messages} = useSelector(store => store.message);


  const onSubmitHandle = async(e) => {
    e.preventDefault();

    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(`https://chat-application-backend-bxvv.onrender.com/api/v1/message/send/${selectedUser?._id}`, {message},
        {
          headers:{
            'Content-Type':'application/json'
          },
          withCredentials:true
        }
      );
      dispatch(setMessages([...messages, res?.data?.newMessage]));
      console.log(res);      
    } catch (error) {
      console.log(error);
    }
    setMessage("");
  }
  return (
    <div className="p-4 border-t border-gray-200 bg-white">
        <form onSubmit={onSubmitHandle} className="flex items-center gap-2">
          <input
            value={message}
            onChange={(e)=> setMessage(e.target.value)}
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition"
          >
            Send
          </button>
        </form>
      </div>
  )
}

export default SendInputMessage